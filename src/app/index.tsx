import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import { SearchBar } from "@/components/SearchBar";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text>Meus Contatos</Text>
        <SearchBar />
      </View>
      <View style={styles.content}>

      </View>
    </SafeAreaView>
  );
}
