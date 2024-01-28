import { useCreateUserMutation } from "@/stores/services/users.api";
import { Auth } from "@/utils/auth.utils";
import { GoogleSignin, GoogleSigninButton, statusCodes } from "@react-native-google-signin/google-signin";
import { Pressable, Text, ToastAndroid, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignIn() {
  const [getData, { data, isLoading, isError, isSuccess }] = useCreateUserMutation();

  if (isLoading) ToastAndroid.showWithGravity("Creating user. Please wait!", ToastAndroid.SHORT, ToastAndroid.TOP);

  return (
    <SafeAreaView>
      <View className="px-3 flex justify-center items-center h-full">
        <Pressable onPress={() => Auth.signIn({ createUser: getData })}>
          <Text>
            <GoogleSigninButton />
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
