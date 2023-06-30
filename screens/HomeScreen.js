import {
  View,
  Text,
  SafeAreaView,
  Platform,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Bars3CenterLeftIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import { styles } from "../theme";
import TrendingMovies from "../components/TrendingMovies";
import MovieList from "../components/MovieList";

const ios = Platform.OS === "ios";
export const HomeScreen = () => {
  const [trending, setTrending] = useState([1, 2, 3]);
  const [upcoming, setUpcoming] = useState([4, 5, 6]);
  const [topRated, setTopRated] = useState([7, 8, 9]);

  return (
    <View className="flex-1 bg-neutral-800">
      {/* Search bar and logo */}
      <SafeAreaView className={ios ? "-mb-2" : "mt-10 mb-3"}>
        <StatusBar style="light" />
        <View className="flex-row justify-between items-center mx-4">
          <Bars3CenterLeftIcon size={30} strokeWidth={2} color={"white"} />
          <Text className="text-white text-3xl font-bold">
            <Text style={styles.text}>M</Text>ovies
          </Text>
          <TouchableOpacity>
            <MagnifyingGlassIcon size="30" strokeWidth={2} color="white" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      <ScrollView
        scrollIndicatorInsets={false}
        contentContainerStyle={{ paddingBottom: 10 }}
      >
        {/* Trending Movies */}
        <TrendingMovies data={trending} />
        {/* Movie List Uncoming */}
        <MovieList title="Upcoming" data={upcoming} />
        {/* Movie List Rate */}
        <MovieList title="Upcoming" data={topRated} />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
