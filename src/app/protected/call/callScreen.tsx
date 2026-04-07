import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { BlurView } from "expo-blur";
import { CONTACTS_MOCK } from "@/mocks/contacts";
import styles from "./styles";

export default function CallSimulation() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const [timer, setTimer] = useState(0);

  const contact = CONTACTS_MOCK.find((c) => c.id === id);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  if (!contact) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Contato não encontrado</Text>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.backLink}>Voltar</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image
        source={contact.photo}
        style={StyleSheet.absoluteFill}
        contentFit="cover"
      />
      <BlurView intensity={90} tint="dark" style={StyleSheet.absoluteFill} />

      <SafeAreaView style={styles.content}>
        <View style={styles.contactInfo}>
          <View style={styles.avatarContainer}>
            <Image
              source={contact.photo}
              style={styles.avatar}
              contentFit="cover"
            />
          </View>
          <Text style={styles.name}>{contact.name}</Text>
          <Text style={styles.phoneNumber}>{contact.phone}</Text>
          <Text style={styles.timer}>{formatTime(timer)}</Text>
        </View>

        <View style={styles.bottomControls}>
          <TouchableOpacity 
            style={styles.hangupButton} 
            onPress={() => router.back()}
            activeOpacity={0.8}
          >
            <Ionicons name="call" size={40} color="white" style={{ transform: [{ rotate: '135deg' }] }} />
          </TouchableOpacity>
          <Text style={styles.hangupLabel}>Encerrar</Text>
        </View>
      </SafeAreaView>
    </View>
  );
}
