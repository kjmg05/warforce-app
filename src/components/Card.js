import React from "react";
import { StyleSheet, Text, View, Image} from "react-native";
import StarWarsImage from "./StarWarsImage"

export const CardCharacters = ({swData1, swData2, swData3, swData4, number}) => {
  return (
      <View style={styles.container}>
        <Text style={styles.text}>{swData1}</Text>
        <Text style={styles.text}>{swData2}</Text>
        <Text style={styles.text}>{swData3}</Text>
        <Text style={styles.text}>{swData4}</Text>
        <StarWarsImage number = {number}/>
    </View>
  );
};

export const CardMovies = ({swData1, swData2, swData3, swData4, number}) => {
  return (
      <View style={styles.container}>
        <Text style={styles.text}>{swData1}</Text>
        <Text style={styles.text}>{swData2}</Text>
        <Text style={styles.text}>{swData3}</Text>
        <Text style={styles.text}>{swData4}</Text>
        <StarWarsImage number = {number}/>
    </View>
  );
};

export const CardPlanets = ({swData1, swData2, swData3, swData4, number}) => {
  return (
      <View style={styles.container}>
        <Text style={styles.text}>{swData1}</Text>
        <Text style={styles.text}>{swData2}</Text>
        <Text style={styles.text}>{swData3}</Text>
        <Text style={styles.text}>{swData4}</Text>
        <StarWarsImage number = {number}/>
    </View>
  );
};

export const CardStarships = ({swData1, swData2, swData3, swData4, number}) => {
  return (
      <View style={styles.container}>
        <Text style={styles.text}>{swData1}</Text>
        <Text style={styles.text}>{swData2}</Text>
        <Text style={styles.text}>{swData3}</Text>
        <Text style={styles.text}>{swData4}</Text>
        <StarWarsImage number = {number}/>
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