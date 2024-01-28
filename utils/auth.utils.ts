import * as SecureStore from "expo-secure-store";
import { AUTH } from "@/constants/auth.constants";
import { router } from "expo-router";
import { useAuthStore } from "@/stores/auth.store";

export class Auth {
  static validateUser() {
    const userDetailsJson = SecureStore.getItem(AUTH.USER_DETAILS_TOKEN);

    if (!userDetailsJson) {
      router.replace("/sign_in/");
    } else {
      const setUserDetails = useAuthStore((state) => state.setUserDetails);
      const userDetails = JSON.parse(userDetailsJson);
      setUserDetails(userDetails);
    }
  }
}
