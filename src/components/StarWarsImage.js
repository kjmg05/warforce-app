  
import React from "react";
import { Dimensions, Image, StyleSheet, View, } from "react-native";
import getEnvVars from "../../environment";
const {width, height} = Dimensions.get("screen");
const { imageUrl } = getEnvVars();

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
       //width: width * 0.3,
//     height: width * 0.8,


      //height: width * 0.3,
      resizeMode: "contain",
      width:300,
      height: 300,
      flex: 1,
      position: "relative",
      alignSelf: "center",


  },

});

export default PokemonImage;