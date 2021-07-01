  
import React from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";
import getEnvVars from "../../environment";

const { imageUrl } = getEnvVars();
const { width } = Dimensions.get("screen");

const PokemonImage = ({ number }) => {
  return (
    <View>
      <Image
        source={{
          uri: `${imageUrl}${number}.jpg`,
        }}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
   image: {
//     width: width * 0.8,
//     height: width * 0.8,
//     resizeMode: "contain",
        width:300,
      height: 300,
  },

});

export default PokemonImage;