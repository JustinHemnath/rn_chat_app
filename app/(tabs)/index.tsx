import { Pressable, StyleSheet } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { useEffect, useState } from "react";
import { GoogleSignin, GoogleSigninButton, statusCodes } from "@react-native-google-signin/google-signin";
import * as SecureStore from "expo-secure-store";

export default function TabOneScreen() {
  const [userInfo, setUserInfo] = useState<any>(null);

  GoogleSignin.configure();

  GoogleSignin.configure({
    scopes: ["https://www.googleapis.com/auth/drive.readonly"], // what API you want to access on behalf of the user, default is email and profile
    // webClientId: '<FROM DEVELOPER CONSOLE>', // client ID of type WEB for your server. Required to get the idToken on the user object, and for offline access.
    // offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    // hostedDomain: '', // specifies a hosted domain restriction
    // forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
    // accountName: '', // [Android] specifies an account name on the device that should be used
    // iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    // googleServicePlistPath: '', // [iOS] if you renamed your GoogleService-Info file, new name here, e.g. GoogleService-Info-Staging
    // openIdRealm: '', // [iOS] The OpenID2 realm of the home web server. This allows Google to include the user's OpenID Identifier in the OpenID Connect ID token.
    // profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
  });

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      setUserInfo({ userInfo });
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
  };

  console.log(userInfo);

  async function handleSetStorage() {
    // console.log("handleSetStorage");
    const result: any = await SecureStore.setItemAsync("myKey", "Justin Hemnath");
    if (result) {
      alert(result);
    } else {
      alert("No key");
    }
  }

  async function handleGetStorage() {
    const result: any = await SecureStore.getItemAsync("myKey");
    if (result) {
      alert(result);
    } else {
      alert("No key");
    }
  }

  return (
    <View style={styles.container}>
      <Pressable onPress={() => signIn()} style={styles.box}>
        <Text>Sign In</Text>
      </Pressable>

      <Pressable onPress={() => handleSetStorage()} style={[styles.box, styles.buttonOne]}>
        <Text>Set storage</Text>
      </Pressable>

      <Pressable onPress={() => handleGetStorage()} style={[styles.box, styles.buttonTwo]}>
        <Text>Get storage</Text>
      </Pressable>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  box: {
    marginVertical: 20,
  },
  buttonOne: {
    backgroundColor: "red",
  },
  buttonTwo: {
    backgroundColor: "green",
  },
});
