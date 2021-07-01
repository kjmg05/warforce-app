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
        flex:1,
        padding: 10,
        margin: 10,
        borderColor:"#000",
        borderWidth: 1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor: "rgba(15,15, 15,1)",
        borderRadius: 25,
          borderWidth: 5,
          borderColor: "rgba(248,221,43,1)",
          shadowColor: "rgba(218,224,12,1)",
          shadowOffset: {
              width: 3,
              height: 3},        
          elevation: 15,
          shadowOpacity: 0.77,
          shadowRadius: 5,
      },
    
    text: {
         fontSize:18,
         fontWeight:"bold",    
         textAlign:"center",    
         color: "rgba(248,221,43,1)",
    },
   
    
    image:{
     
      minHeight:"100%",
      minWidth:"100%",
      width:300,
      height: 300,
    },
});