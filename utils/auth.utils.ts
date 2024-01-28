import * as SecureStore from "expo-secure-store";
import { AUTH } from "@/constants/auth.constants";
import { router } from "expo-router";
import { GoogleSignin, statusCodes } from "@react-native-google-signin/google-signin";
import { store } from "@/stores/store";
import { setUserDetails } from "@/stores/auth.slice";

export class Auth {
  static async validateUser() {
    const userDetailsJson = await SecureStore.getItemAsync(AUTH.USER_DETAILS_TOKEN);

    if (!userDetailsJson) {
      router.replace("/sign_in/");
    } else {
      const userDetails = JSON.parse(userDetailsJson);
      store.dispatch(setUserDetails(userDetails));
    }
  }

  static async signIn({ createUser }: any) {
    try {
      await GoogleSignin.hasPlayServices();
      const googleInfo = await GoogleSignin.signIn();
      if (!googleInfo) {
        alert("Failed to sign in through google. Try again");
      } else {
        const { name, id, email } = googleInfo.user;
        // await createUser({ name, email });
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
