import * as SecureStore from "expo-secure-store";
import { AUTH } from "@/constants/auth.constants";
import { router } from "expo-router";
import { useAuthStore } from "@/stores/auth.store";
import { GoogleSignin, statusCodes } from "@react-native-google-signin/google-signin";

export class Auth {
  static async validateUser() {
    const userDetailsJson = await SecureStore.getItemAsync(AUTH.USER_DETAILS_TOKEN);

    if (!userDetailsJson) {
      router.replace("/sign_in/");
    } else {
      const setUserDetails = useAuthStore.getState().setUserDetails;
      const userDetails = JSON.parse(userDetailsJson);
      setUserDetails(userDetails);
    }
  }

  static async signIn() {
    try {
      await GoogleSignin.hasPlayServices();
      const googleInfo = await GoogleSignin.signIn();
      if (!googleInfo) {
        alert("Failed to sign in through google. Try again");
      } else {
        const { name, id, email } = googleInfo.user;
        await SecureStore.setItemAsync(AUTH.USER_DETAILS_TOKEN, JSON.stringify({ name, id, email }));
        router.replace("/");
      }
    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  }
}
