import { Auth } from "@/utils/auth.utils";
import { GoogleSignin, GoogleSigninButton, statusCodes } from "@react-native-google-signin/google-signin";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignIn() {
  return (
    <SafeAreaView>
      <View className="px-3 flex justify-center items-center h-full">
        <Pressable onPress={() => Auth.signIn()}>
          <Text>
            <GoogleSigninButton />
          </Text>
          {/* <Text className="text-white bg-emerald-800 p-3 rounded-lg text-2xl">Sign In </Text> */}
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
