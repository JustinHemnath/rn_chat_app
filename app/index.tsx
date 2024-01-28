import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from "react-native";
import { Auth } from "@/utils/auth.utils";
import { router } from "expo-router";
import { useSelector } from "react-redux";
import { RootState } from "@/stores/store";

export default function Home() {
  let userDetails = useSelector((state: RootState) => state.auth.value.userDetails);
  if (!userDetails) Auth.validateUser();

  console.log(userDetails);

  return (
    <SafeAreaView>
      <View className="px-4 h-14 rounded-b-lg flex w-full bg-emerald-700 shadow-lg items-center justify-center">
        <Text className="text-white text-2xl font-semibold">{userDetails?.name || "user"}</Text>
      </View>

      <View className="h-full bg-white"></View>
    </SafeAreaView>
  );
}
