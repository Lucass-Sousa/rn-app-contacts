import { Text, View, FlatList, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

import styles from "./styles";
import colors from "@/theme";
import { SearchBar } from "@/components/SearchBar";
import { CONTACTS_MOCK, Contact } from "@/mocks/contacts";
import { useBottomSheet } from "@/components/bottom-sheet-stack";
import { BottomSheet } from "@/components/bottom-sheet";
import { useAuth } from "@/context/auth";

export default function Index() {
  const { present, dismiss } = useBottomSheet();
  const { signOut } = useAuth();
  const router = useRouter();

  const handleContactPress = (contact: Contact) => {
    present(
      <BottomSheet 
        snapPoints={["55%"]} 
        backgroundColor={colors.dark.background}
      >
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
            <TouchableOpacity style={styles.menuItem} onPress={() => { dismiss(); console.log('Edit', contact.id); }}>
              <Ionicons name="pencil-outline" size={24} color={colors.dark.text} />
              <Text style={styles.menuItemText}>Editar Contato</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem} onPress={() => { dismiss(); console.log('Delete', contact.id); }}>
              <Ionicons name="trash-outline" size={24} color="#FF453A" />
              <Text style={[styles.menuItemText, { color: '#FF453A' }]}>Excluir Contato</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.callButton} 
              onPress={() => { 
                dismiss(); 
                router.push({
                   pathname: "/protected/call/callScreen",
                   params: { id: contact.id }
                });
              }}
            >
              <Ionicons name="call" size={24} color="white" />
              <Text style={styles.callButtonText}>Iniciar Ligação</Text>
            </TouchableOpacity>
          </View>
        </View>
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
          data={CONTACTS_MOCK}
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
        onPress={() => console.log('Create New Contact')}
      >
        <Ionicons name="add" size={32} color="white" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}
