import { FlatList, SafeAreaView, View } from "react-native";
import Message from "./Message";
import { RootState } from "@/stores/store";
import { useSelector } from "react-redux";
import { TUserDetails } from "@/stores/auth.slice";

const MessageList = () => {
  const userDetails: TUserDetails | undefined = useSelector((state: RootState) => state.auth.value.userDetails);

  const DATA = [
    {
      id: "1",
      sender: "justin.hemnath.96@gmail.com",
      receiver: "test@gmail.com",
      message: "TEST 1",
    },
    {
      id: "2",
      sender: "justin.hemnath.96@gmail.com",
      receiver: "test@gmail.com",
      message: "TEST 2",
    },
    {
      id: "3",
      sender: "justin.hemnath.96@gmail.com",
      receiver: "test@gmail.com",
      message: "TEST 3",
    },
    {
      id: "4",
      sender: "justin.hemnath.96@gmail.com",
      receiver: "test@gmail.com",
      message: "TEST 4",
    },
    {
      id: "4",
      sender: "justin.hemnath.96@gmail.com",
      receiver: "test@gmail.com",
      message: "TEST 4",
    },
    {
      id: "4",
      sender: "justin.hemnath.96@gmail.com",
      receiver: "test@gmail.com",
      message: "TEST 4",
    },
    {
      id: "4",
      sender: "justin.hemnath.96@gmail.com",
      receiver: "test@gmail.com",
      message: "TEST 4",
    },
    {
      id: "4",
      sender: "justin.hemnath.96@gmail.com",
      receiver: "test@gmail.com",
      message: "TEST 4",
    },
    {
      id: "4",
      sender: "justin.hemnath.96@gmail.com",
      receiver: "test@gmail.com",
      message: "TEST 4",
    },
    {
      id: "4",
      sender: "justin.hemnath.96@gmail.com",
      receiver: "test@gmail.com",
      message: "TEST 4",
    },
    {
      id: "4",
      sender: "justin.hemnath.96@gmail.com",
      receiver: "test@gmail.com",
      message: "TEST 4",
    },
    {
      id: "4",
      sender: "justin.hemnath.96@gmail.com",
      receiver: "test@gmail.com",
      message: "TEST 4",
    },
  ];

  return (
    <SafeAreaView className="px-4 bg-red-500 h-full flex items-end">
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Message messageItem={item} {...{ userDetails }} />}
        keyExtractor={(item) => item.id}
        scrollEnabled
      />
    </SafeAreaView>
  );
};

export default MessageList;
