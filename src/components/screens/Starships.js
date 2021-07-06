import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { fetchStarWars } from "../../api";
import { StarshipsCardList } from "../shared/CardList";

const { width, height } = Dimensions.get("screen");

const Starships = ({ navigation, route }) => {
  const [starships, setStarships] = useState({});
  const { page, starshipNumber } = route.params;

  const getStarships = async () => {
    const response = await fetchStarWars(page);

    setStarships(response);
  };

  useEffect(() => {
    getStarships();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../../../assets/image/r2d2.jpg")}
        resizeMode="contain"
        style={styles.bgImage}
      />

      {starships.count ? (
        <StarshipsCardList
          starships={starships}
          navigation={navigation}
          starshipNumber={starshipNumber}
        />
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
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    width: width,
    height: height,
    position: "absolute",
    marginTop: -20,
  },
});

export default Starships;
