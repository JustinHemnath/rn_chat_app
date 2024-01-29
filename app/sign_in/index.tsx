import { useAppDispatch } from "@/stores/store";
import { Auth } from "@/utils/auth.utils";
import { GoogleSigninButton } from "@react-native-google-signin/google-signin";
import { Pressable, Text, ToastAndroid, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignIn() {
  return (
    <SafeAreaView>
      <View className="px-3 flex justify-center items-center h-full">
        <Pressable onPress={() => Auth.signIn()}>
          <Text>
            <GoogleSigninButton />
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
