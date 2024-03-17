import { useEffect, useState } from "react";
import { TextInput, Text, View, Pressable, Keyboard, ToastAndroid, TouchableWithoutFeedback, KeyboardEvent } from "react-native";

const SendMessage = () => {
  const [text, setText] = useState("");
  const [bottomOffset, setBottomOffset] = useState<number>(0);

  useEffect(() => {
    function onKeyboardDidShow(e: KeyboardEvent) {
      setBottomOffset(Number(e.endCoordinates.height.toFixed(1)));
    }

    function onKeyboardDidHide() {
      setBottomOffset(0);
    }

    const showSubscription = Keyboard.addListener("keyboardDidShow", onKeyboardDidShow);
    const hideSubscription = Keyboard.addListener("keyboardDidHide", onKeyboardDidHide);
    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View className="bg-green-500 p-1 w-screen" style={{ height: "15%", position: "absolute", bottom: bottomOffset }}>
        <View className="flex bg-red-500 gap-4 w-screen flex-row">
          <View className="w-[70%]">
            <TextInput className="text-black bg-white" onChangeText={(value) => setText(value)} placeholder="Send message...">
              {text}
            </TextInput>
          </View>

          <View className="w-[30%]">
            <Pressable>
              <Text>Submit</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SendMessage;
