import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  Dimensions,
} from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { fetchStarWars } from "../../api";
import { PlanetsCardList } from "../shared/CardList";
import theme from "../../theme";
const { width, height } = Dimensions.get("screen");

const Planets = ({ navigation, route }) => {
  const [planets, setPlanets] = useState({});
  const { page, planetNumber } = route.params;

  const getPlanets = async () => {
    const response = await fetchStarWars(page);

    setPlanets(response);
  };

  useEffect(() => {
    getPlanets();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../../../assets/image/leia.jpg")}
        resizeMode="contain"
        style={styles.bgImage}
      />
      {planets.count ? (
        <PlanetsCardList
          planets={planets}
          navigation={navigation}
          planetNumber={planetNumber}
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
    marginTop: -15,
    backgroundColor: theme.colors.orange,
  },
});

export default Planets;
