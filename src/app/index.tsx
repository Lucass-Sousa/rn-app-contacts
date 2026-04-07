import { Text, View, FlatList, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { Ionicons } from "@expo/vector-icons";

import styles from "./styles";
import { SearchBar } from "@/components/SearchBar";
import { CONTACTS_MOCK } from "../mocks/contacts";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Meus Contatos</Text>
        <SearchBar />
      </View>
      
      <View style={styles.content}>
        <FlatList
          data={CONTACTS_MOCK}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingBottom: 100 }}
          renderItem={({ item }) => (
            <View style={styles.contactCard}>
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

              <View style={styles.actions}>
                <TouchableOpacity onPress={() => console.log('Edit', item.id)}>
                  <Ionicons name="pencil-outline" size={20} color="#8E8E93" />
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => console.log('Delete', item.id)}>
                  <Ionicons name="trash-outline" size={20} color="#FF453A" />
                </TouchableOpacity>
              </View>
            </View>
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
