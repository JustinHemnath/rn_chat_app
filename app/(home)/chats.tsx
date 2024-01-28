import { View } from "@/components/Themed";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native";

export default function Chats() {
  return (
    <SafeAreaView>
      <Text style={{ color: "white" }}>Chats</Text>
    </SafeAreaView>
  );
}
