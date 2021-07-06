import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { fetchStarWars } from "../../api";
import { CharactersCardList } from "../shared/CardList";
import theme from "../../theme";

const { width, height } = Dimensions.get("screen");
const Characters = ({ navigation, route }) => {
  const [characters, setCharacters] = useState({});
  const { page, charNumber } = route.params;

  const getCharacters = async () => {
    const response = await fetchStarWars(page);

    setCharacters(response);
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return (
  <SafeAreaView style={styles.container}>
    <ImageBackground
      source={require("../../../assets/image/darth.jpg")}
      resizeMode="contain"
      style={styles.bgImage}
    />
      
        {characters.count ? (
          <CharactersCardList
            characters={characters}
            navigation={navigation}
            charNumber={charNumber}
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
    width: width,
    height: height,
  },
  wfImageModal: {
    width: 200,
    height: 130,
    marginTop: 250,
    marginLeft: 105,
    position: "relative",
<<<<<<< HEAD
  },
  bgImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    width: width,
    height: height,
    position: "absolute",
    backgroundColor: theme.colors.red,
    marginTop: -10,
  },
  bg: {
    backgroundColor: theme.colors.red,
  },
=======
  },
  bgImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    width: width,
    height: height,
    position: "absolute",
    backgroundColor: theme.colors.darth,
    marginTop: -10,
  },
  
>>>>>>> e439214d0eeeefb39e7afb9a6e0fcdcefa5aa906
});

export default Characters;