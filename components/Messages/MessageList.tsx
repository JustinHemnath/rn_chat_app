import { FlatList } from "react-native";
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
      id: "5",
      sender: "justin.hemnath.96@gmail.com",
      receiver: "test@gmail.com",
      message: "TEST 4",
    },
    {
      id: "6",
      sender: "justin.hemnath.96@gmail.com",
      receiver: "test@gmail.com",
      message: "TEST 4",
    },
    {
      id: "7",
      sender: "justin.hemnath.96@gmail.com",
      receiver: "test@gmail.com",
      message: "TEST 4",
    },
    {
      id: "8",
      sender: "justin.hemnath.96@gmail.com",
      receiver: "test@gmail.com",
      message: "TEST 4",
    },
    {
      id: "9",
      sender: "justin.hemnath.96@gmail.com",
      receiver: "test@gmail.com",
      message: "TEST 4",
    },
    {
      id: "10",
      sender: "justin.hemnath.96@gmail.com",
      receiver: "test@gmail.com",
      message: "TEST 4",
    },
    {
      id: "11",
      sender: "justin.hemnath.96@gmail.com",
      receiver: "test@gmail.com",
      message: "TEST 4",
    },
    {
      id: "12",
      sender: "justin.hemnath.96@gmail.com",
      receiver: "test@gmail.com",
      message: "TEST 4",
    },
    {
      id: "13",
      sender: "justin.hemnath.96@gmail.com",
      receiver: "test@gmail.com",
      message: "TEST 4",
    },
    {
      id: "14",
      sender: "justin.hemnath.96@gmail.com",
      receiver: "test@gmail.com",
      message: "TEST 4",
    },
    {
      id: "15",
      sender: "justin.hemnath.96@gmail.com",
      receiver: "test@gmail.com",
      message: "TEST 234",
    },
  ];

  return (
    <FlatList
      data={DATA}
      renderItem={({ item }) => <Message messageItem={item} {...{ userDetails }} />}
      keyExtractor={(item) => item.id}
      scrollEnabled
      className="h-[80%] bg-red-500"
    />
  );
};

export default MessageList;
