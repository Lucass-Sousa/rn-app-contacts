import { Text, View, FlatList, TouchableOpacity, TextInput, Alert, Platform, KeyboardAvoidingView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import * as ImagePicker from "expo-image-picker";
import { useState, useMemo } from "react";

import styles from "./styles";
import colors from "@/theme";
import { SearchBar } from "@/components/SearchBar";
import { Contact } from "@/mocks/contacts";
import { useBottomSheet, useBottomSheetStack } from "@/components/bottom-sheet-stack";
import { BottomSheet } from "@/components/bottom-sheet";
import { useAuth } from "@/context/auth";
import { useContacts } from "@/context/contacts";

const ContactForm = ({ contact, onSave }: { contact?: Contact, onSave: (data: Partial<Contact>) => void }) => {
  const [name, setName] = useState(contact?.name || "");
  const [phone, setPhone] = useState(contact?.phone || "");
  const [photo, setPhoto] = useState(contact?.photo || "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?q=80&w=200");

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
    });

    if (!result.canceled) {
      setPhoto(result.assets[0].uri);
    }
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.sheetContent}
    >
      <Text style={styles.sheetTitle}>{contact ? "Editar Contato" : "Novo Contato"}</Text>
      
      <TouchableOpacity 
        style={styles.sheetAvatarContainer} 
        onPress={pickImage}
      >
        <Image 
          source={photo}
          style={styles.sheetAvatarLarge}
          contentFit="cover"
        />
        <View style={styles.sheetAvatarEditBadge}>
          <Ionicons name="camera" size={20} color="white" />
        </View>
      </TouchableOpacity>

      <TextInput 
        style={styles.sheetInput} 
        placeholder="Nome" 
        placeholderTextColor="#888"
        value={name}
        onChangeText={setName}
      />
      
      <TextInput 
        style={styles.sheetInput} 
        placeholder="Telefone (Somente Números)" 
        placeholderTextColor="#888"
        value={phone}
        keyboardType="number-pad"
        onChangeText={setPhone}
      />

      <TouchableOpacity 
        style={styles.callButton} 
        onPress={() => onSave({ ...contact, name, phone, photo })}
      >
        <Text style={styles.callButtonText}>Salvar</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const ContactMenu = ({ contactId, onEdit, onDelete, onCall }: { contactId: string, onEdit: (c: Contact) => void, onDelete: (id: string) => void, onCall: (id: string) => void }) => {
  const { getContact } = useContacts();
  const contact = getContact(contactId);

  if (!contact) return null;

  return (
    <View style={styles.sheetContent}>
      <View style={styles.sheetHeader}>
        <Image 
          source={contact.photo}
          style={styles.sheetAvatar}
          contentFit="cover"
        />
        <Text style={styles.sheetTitle}>{contact.name}</Text>
        <Text style={styles.sheetPhone}>{contact.phone}</Text>
      </View>

      <View style={styles.sheetMenu}>
        <TouchableOpacity style={styles.menuItem} onPress={() => onEdit(contact)}>
          <Ionicons name="pencil-outline" size={24} color={colors.dark.text} />
          <Text style={styles.menuItemText}>Editar Contato</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => onDelete(contact.id)}>
          <Ionicons name="trash-outline" size={24} color="#FF453A" />
          <Text style={[styles.menuItemText, { color: '#FF453A' }]}>Excluir Contato</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.callButton} 
          onPress={() => onCall(contact.id)}
        >
          <Ionicons name="call" size={24} color="white" />
          <Text style={styles.callButtonText}>Iniciar Ligação</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default function Index() {
  const { present, dismiss } = useBottomSheet();
  const { popToRoot } = useBottomSheetStack();
  const { signOut } = useAuth();
  const { contacts, addContact, updateContact, deleteContact } = useContacts();
  const router = useRouter();

  const handleDeleteContact = (id: string) => {
    const performDelete = () => {
      deleteContact(id);
      popToRoot();
    };

    if (Platform.OS === "web") {
      const confirmed = window.confirm("Tem certeza que deseja excluir este contato?");
      if (confirmed) performDelete();
    } else {
      Alert.alert(
        "Excluir Contato",
        "Tem certeza que deseja excluir este contato?",
        [
          { text: "Cancelar", style: "cancel" },
          { text: "Excluir", style: "destructive", onPress: performDelete }
        ]
      );
    }
  };

  const handleSaveContact = (contact: Partial<Contact>) => {
    if (contact.id) {
      updateContact(contact.id, contact);
    } else {
      const newContact: Contact = {
        id: Date.now().toString(),
        name: contact.name || "Novo Contato",
        phone: contact.phone || "",
        photo: contact.photo || "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?q=80&w=200",
      };
      addContact(newContact);
    }
    dismiss();
  };

  const openForm = (contact?: Contact) => {
    present(
      <BottomSheet 
        snapPoints={["75%"]} 
        backgroundColor={colors.dark.background}
      >
        <ContactForm contact={contact} onSave={handleSaveContact} />
      </BottomSheet>
    );
  };

  const startCall = (id: string) => {
    popToRoot(); 
    
    setTimeout(() => {
      router.push({
        pathname: "/protected/call/callScreen",
        params: { id }
      });
    }, 100);
  };

  const handleContactPress = (contact: Contact) => {
    present(
      <BottomSheet 
        snapPoints={["55%"]} 
        backgroundColor={colors.dark.background}
      >
        <ContactMenu 
          contactId={contact.id} 
          onEdit={openForm} 
          onDelete={handleDeleteContact} 
          onCall={startCall}
        />
      </BottomSheet>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <Text style={styles.headerTitle}>Meus Contatos</Text>
          <TouchableOpacity onPress={signOut}>
            <Ionicons name="log-out-outline" size={24} color={colors.dark.text} />
          </TouchableOpacity>
        </View>
        <SearchBar />
      </View>
      
      <View style={styles.content}>
        <FlatList
          data={contacts}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingBottom: 100 }}
          renderItem={({ item }) => (
            <TouchableOpacity 
              activeOpacity={0.7}
              onPress={() => handleContactPress(item)}
              style={styles.contactCard}
            >
              <Image 
                source={item.photo}
                style={styles.avatar}
                contentFit="cover"
                transition={200}
              />
              
              <View style={styles.contactInfo}>
                <Text style={styles.contactName}>{item.name}</Text>
                <Text style={styles.contactPhone}>{item.phone}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>

      <TouchableOpacity 
        style={styles.fab} 
        activeOpacity={0.8}
        onPress={() => openForm()}
      >
        <Ionicons name="add" size={32} color="white" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}
