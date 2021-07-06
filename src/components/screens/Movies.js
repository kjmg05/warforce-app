import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { fetchStarWars } from "../../api";
import { MoviesCardList } from "../shared/CardList";

const { width, height } = Dimensions.get("screen");

const Movies = ({ navigation }) => {
  const [movies, setMovies] = useState({});

  const getMovies = async () => {
    const response = await fetchStarWars("films/");

    setMovies(response);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
  <SafeAreaView style={styles.container}>
    <ImageBackground
      source={require("../../../assets/image/luke.jpg")}
      resizeMode="contain"
      style={styles.bgImage}
    />
      
        {movies.count ? (
          <MoviesCardList movies={movies} navigation={navigation} />
        ) : (
          <ActivityIndicator animating={true} />
        )}
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    resizeMode: "contain",
    justifyContent: "center",
    alignItems: "center",
    width: width,
    height: height,
    position: "absolute",
    marginTop: -10,
  },
});

export default Movies;
