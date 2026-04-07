import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BottomSheetStackProvider } from "../components/bottom-sheet-stack";

import { AuthProvider } from "../context/auth";
import { ContactsProvider } from "../context/contacts";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AuthProvider>
        <ContactsProvider>
          <BottomSheetStackProvider>
            <Stack screenOptions={{ headerShown: false }}>
              <Stack.Screen name="index" />
              <Stack.Screen name="auth/login" />
              <Stack.Screen name="protected/index" />
              <Stack.Screen name="protected/call/callScreen" options={{ presentation: "fullScreenModal", animation: "slide_from_bottom" }} />
            </Stack>
          </BottomSheetStackProvider>
        </ContactsProvider>
      </AuthProvider>
    </GestureHandlerRootView>
  );
}

