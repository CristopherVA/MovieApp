import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Bars3CenterLeftIcon } from "react-native-heroicons/outline";

const ios = Platform.OS === "ios";
export const HomeScreen = () => {
  return (
    <View className="fle-1 bg-red-800">
      {/* Search bar and logo */}
      <SafeAreaView className={ios ? "-mb-2" : "-mb-3"}>
        {/* <StatusBar style="dark" /> */}
        <View className="flex justify-between items-center mx-4">
          <Bars3CenterLeftIcon size={30} strokeWidth={2} color={"white"} />
          <Text className="text-white text-3xl font-bold">Movies</Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
