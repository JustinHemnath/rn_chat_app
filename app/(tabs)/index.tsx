import { Pressable, StyleSheet } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { useEffect, useState } from "react";
import { GoogleSignin, GoogleSigninButton, statusCodes } from "@react-native-google-signin/google-signin";
import * as SecureStore from "expo-secure-store";

export default function TabOneScreen() {
  const [userInfo, setUserInfo] = useState<any>(null);

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
    const result: any = await SecureStore.setItemAsync("myKey", "Justin Hemnath");
    if (!result) {
      alert("Failed to set storage");
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

  async function handleDeleteStorage() {
    const result: any = await SecureStore.deleteItemAsync("myKey");
    if (result) {
      alert(`deleted ${result}`);
    } else {
      alert("Cant delete");
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

      <Pressable onPress={() => handleDeleteStorage()} style={[styles.box, styles.buttonTwo]}>
        <Text>Delete storage</Text>
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
