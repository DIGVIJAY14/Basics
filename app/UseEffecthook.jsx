import { View, Text, Button } from "react-native";
import React, { useEffect, useState } from "react";
import UseEffecthook_2 from "./UseEffecthook_2";

const UseEffecthook = () => {
  const [count, setcount] = useState(0);
  useEffect(() => {
    // console.warn("hey!!");
  }, []);
  //   for mounting (execution time call only..) []
  return (
    <View>
      <Text className="text-2xl ml-[90] font-extrabold mt-[10] underline ">
        UseEffecthook :- {count}
      </Text>
      <Button title="changes" onPress={() => setcount(count + 1)} />
      <UseEffecthook_2 />
    </View>
  );
};

export default UseEffecthook;
