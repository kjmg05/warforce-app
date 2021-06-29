import React from "react";
import { Dimensions, Image, StyleSheet, Text, View, ScrollView } from "react-native";

const Card = ({name, climate, population}) => {
  return (
    
      <ScrollView style={styles.container}><View>
        <Text style={styles.text}>{name}</Text>
        <Text style={styles.text}>{climate}</Text>
        <Text style={styles.text}>{population}</Text></View>
        <Image style={styles.image} source = {{uri : 'https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/characters/1.jpg'}}/>
    </ScrollView>
    
    
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