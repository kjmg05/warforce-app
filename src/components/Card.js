import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

const Card = ({name, climate, population}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>{name}</Text>
        <Text style={styles.text}>{climate}</Text>
        <Text style={styles.text}>{population}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        padding: 10,
        margin: 10,
        borderColor:"#000",
        borderWidth: 1,
      },
    
    text: {
         fontSize:18,
         fontWeight:"bold",    
    },
    
    image:{
       width:300,
        height: 300,
    },
});

export default Card;