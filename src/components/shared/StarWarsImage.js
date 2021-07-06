import React from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";
import getEnvVars from "../../../environment";
const { imageUrl } = getEnvVars();

const StarWarsImage = ({ number }) => {
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
    resizeMode: "contain",
    width: 300,
    height: 300,
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 10,
  },
});

export default StarWarsImage;
