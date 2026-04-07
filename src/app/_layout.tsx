import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BottomSheetStackProvider } from "../components/bottom-sheet-stack";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetStackProvider>
        <Stack>
          <Stack.Screen options={{ headerShown: false }} name="index" />
        </Stack>
      </BottomSheetStackProvider>
    </GestureHandlerRootView>
  );
}
