import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View, Pressable } from "react-native";
import { Auth } from "@/utils/auth.utils";
import { router } from "expo-router";
import { useSelector } from "react-redux";
import { RootState } from "@/stores/store";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import * as SecureStore from "expo-secure-store";
import { AUTH } from "@/constants/auth.constants";

export default function Home() {
  let userDetails = useSelector((state: RootState) => state.auth.value.userDetails);
  if (!userDetails) Auth.validateUser();

  console.log(userDetails);

  async function handleSignOut() {
    try {
      await GoogleSignin.signOut();
      await SecureStore.deleteItemAsync(AUTH.USER_DETAILS_TOKEN);
      router.replace("/sign_in/");
    } catch (err: any) {
      console.log(err);
    }
  }

  return (
    <SafeAreaView>
      <View className="h-full bg-white">
        <View className="px-4 h-14 rounded-b-lg flex w-full bg-emerald-700 shadow-lg items-center justify-center">
          <Text className="text-white text-2xl font-semibold">{userDetails?.name || "user"}</Text>
        </View>

        <Pressable className="my-10 w-[10rem]" onPress={() => handleSignOut()}>
          <Text className="text-black text-2xl p-4 text-center rounded-lg font-semibold bg-red-500">Sign Out</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
