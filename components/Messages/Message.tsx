import { messageBgColor } from "@/constants/Colors";
import { Pressable, Text, View } from "react-native";

const Message = ({ messageItem, userDetails }: any) => {
  return (
    <View
      className="bg-green-300 rounded-lg "
      style={{ marginVertical: 10, paddingVertical: 10, backgroundColor: messageBgColor, maxWidth: 200 }}
    >
      <Pressable onPress={() => alert(messageItem.message)}>
        <Text className="px-4">{messageItem.message}</Text>
      </Pressable>
    </View>
  );
};

export default Message;
