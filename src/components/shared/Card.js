import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  SafeAreaView
} from "react-native";
import StarWarsImage from "./StarWarsImage";
import theme from "../../theme";

const { width, height } = Dimensions.get("screen");
export const CardCharacters = ({
  swData1,
  number,
}) => {
  return (
      <View style={styles.CardCharacters}>
        <Text style={styles.textCharacters}>{swData1}</Text>
        <StarWarsImage
          number={number}
          width={width * 0.35}
          height={width * 0.35}
        />
      </View>
  );
};

export const CardMovies = ({
  swData1,
  number,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.CardMovies}>
        <Text style={styles.textMovies}>{swData1}</Text>

        <StarWarsImage number={number} />
      </View>
    </View>
  );
};

export const CardPlanets = ({
  swData1,
  number,
}) => {
  return (
    <View style={styles.CardPlanets}>
      <Text style={styles.textPlanets}>{swData1}</Text>

      <StarWarsImage number={number} />
    </View>
  );
};

export const CardStarships = ({
  swData1,
  number,
}) => {
  return (
    <View style={styles.CardStarships}>
      <Text style={styles.textShip}>{swData1}</Text>

      <StarWarsImage number={number} />
    </View>
  );
};

const styles = StyleSheet.create({
  safeAreaC: {
    flex: 1,
    backgroundColor: theme.colors.darth,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  CardCharacters: {
    flex: 1,
    margin: 10,
    padding: 10,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.opacityblack,
    borderRadius: 25,
    borderWidth: 5,
    borderColor: theme.colors.red,
    shadowColor: theme.colors.red,
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.77,
    shadowRadius: 5,
    marginTop: 20,
  },
  CardMovies: {
    flex: 1,
    margin: 10,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.opacityblack,
    borderRadius: 25,
    borderWidth: 5,
    borderColor: theme.colors.lightBlue,
    shadowColor: theme.colors.blue,
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.77,
    shadowRadius: 5,
    marginTop: 20,
  },
  CardPlanets: {
    flex: 1,
    margin: 10,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.opacity,
    borderRadius: 25,
    borderWidth: 5,
    borderColor: theme.colors.lightYellow,
    shadowColor: theme.colors.lightYellow,
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.77,
    shadowRadius: 5,
    marginTop: 25,
  },
  CardStarships: {
    flex: 1,
    margin: 10,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.opacityblack,
    borderRadius: 25,
    borderWidth: 5,
<<<<<<< HEAD
    borderColor: theme.colors.blue,
=======
    borderColor: theme.colors.r2d2,
>>>>>>> e439214d0eeeefb39e7afb9a6e0fcdcefa5aa906
    shadowColor: theme.colors.lightBlue,
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.77,
    shadowRadius: 5,
    marginTop: 30,
  },
  textCharacters: {
<<<<<<< HEAD
    fontSize: 20,
=======
    fontSize: 30,
>>>>>>> e439214d0eeeefb39e7afb9a6e0fcdcefa5aa906
    fontWeight: "bold",
    textAlign: "center",
    color: theme.colors.red,
  },
  textMovies: {
<<<<<<< HEAD
    fontSize: 13,
=======
    fontSize: 20,
>>>>>>> e439214d0eeeefb39e7afb9a6e0fcdcefa5aa906
    fontWeight: "bold",
    textAlign: "center",
    color: theme.colors.lightBlue,
  },
  textPlanets: {
<<<<<<< HEAD
    fontSize: 20,
=======
    fontSize: 30,
>>>>>>> e439214d0eeeefb39e7afb9a6e0fcdcefa5aa906
    fontWeight: "bold",
    textAlign: "center",
    color: theme.colors.lightYellow,
  },
  textShip: {
<<<<<<< HEAD
    fontSize: 15,
=======
    fontSize: 30,
>>>>>>> e439214d0eeeefb39e7afb9a6e0fcdcefa5aa906
    fontWeight: "bold",
    textAlign: "center",
    color: theme.colors.blue,
  },
<<<<<<< HEAD
  text: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#ff1500",
  },
  image: {
    minHeight: "100%",
    minWidth: "100%",
    width: 300,
    height: 300,
  },
  resize: {
    resizeMode: "contain",
  },
=======
  
>>>>>>> e439214d0eeeefb39e7afb9a6e0fcdcefa5aa906
});
