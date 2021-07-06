import React from "react";
import { StyleSheet, Text, View, Image,Dimensions,ImageBackground} from "react-native";
import StarWarsImage from "./StarWarsImage"
import theme from "../theme";

const {width, height} = Dimensions.get("screen");
export const CardCharacters = ({swData1, swData2, swData3, swData4, swData5, swData6, swData7, swData8, swData9, number}) => {
  return (
    
 
    <View style={styles.CardCharacters}>
        <Text style={styles.textCharacters}>{swData1}</Text>
        <Text style={styles.textCharacters}>{swData2}</Text>
        <Text style={styles.textCharacters}>{swData3}</Text>
        <Text style={styles.textCharacters}>{swData4}</Text>
        <Text style={styles.textCharacters}>{swData5}</Text>
        <Text style={styles.textCharacters}>{swData6}</Text>
        <Text style={styles.textCharacters}>{swData7}</Text>
        <Text style={styles.textCharacters}>{swData8}</Text>
        <Text style={styles.textCharacters}>{swData9}</Text>
        <StarWarsImage style={styles.resize} number = {number}/>
    </View>

     
  );
};

export const CardMovies = ({swData1, swData2, swData3, swData4, swData5, number}) => {
  return (
    <View style={styles.container}> 
      <View style={styles.CardMovies}>
        <Text style={styles.textMovies}>{swData1}</Text>
        <Text style={styles.textMovies}>{swData2}</Text>
        <Text style={styles.textMovies}>{swData3}</Text>
        <Text style={styles.textMovies}>{swData4}</Text>
        <StarWarsImage number = {number}/>
        <Text style={styles.textMovies}>{swData5}</Text>
    </View>
    </View>
  );
};

export const CardPlanets = ({swData1, swData2, swData3, swData4, swData5, swData6, swData7, swData8, swData9, number}) => {
  return (
      <View style={styles.CardPlanets}>
        <Text style={styles.textPlanets}>{swData1}</Text>
        <Text style={styles.textPlanets}>{swData2}</Text>
        <Text style={styles.textPlanets}>{swData3}</Text>
        <Text style={styles.textPlanets}>{swData4}</Text>
        <Text style={styles.textPlanets}>{swData5}</Text>
        <Text style={styles.textPlanets}>{swData6}</Text>
        <Text style={styles.textPlanets}>{swData7}</Text>
        <Text style={styles.textPlanets}>{swData8}</Text>
        <Text style={styles.textPlanets}>{swData9}</Text>
        <StarWarsImage number = {number}/>
    </View>
  );
};

export const CardStarships = ({swData1, swData2, swData3, swData4, number}) => {
  return (
      <View style={styles.CardStarships}>
        <Text style={styles.textShip}>{swData1}</Text>
        <Text style={styles.textShip}>{swData2}</Text>
        <Text style={styles.textShip}>{swData3}</Text>
        <Text style={styles.textShip}>{swData4}</Text>
        <StarWarsImage number = {number}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:"center",
    alignItems:"center",
   

  },
      CardCharacters:{
        
        flex:1,
        margin:10,
        padding:10,
        justifyContent:"center",
        alignContent:"center",
        alignItems:"center",
        backgroundColor: theme.colors.opacityblack,
        borderRadius: 25,
        borderWidth: 5,
        borderColor: theme.colors.red,
        shadowColor: theme.colors.red,
        shadowOffset: { width: 3, height: 3},        
        shadowOpacity: 0.77,
        shadowRadius: 5,
     
      },

      
    
      CardMovies:{
        flex:1,
        margin:10,
        padding:10,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor: theme.colors.opacityblack,
        borderRadius: 25,
        borderWidth: 5,
        borderColor: theme.colors.lightBlue,
        shadowColor: theme.colors.blue,
        shadowOffset: { width: 3, height: 3},        
        elevation: 15,
        shadowOpacity: 0.77,
        shadowRadius: 5,
        marginTop: 20,
      },
    
      CardPlanets:{
        flex:1,
        margin:10,
        padding:10,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor: theme.colors.opacity,
        borderRadius: 25,
        borderWidth: 5,
        borderColor: theme.colors.lightYellow,
        shadowColor: theme.colors.lightYellow,
        shadowOffset: { width: 3, height: 3},        
        elevation: 15,
        shadowOpacity: 0.77,
        shadowRadius: 5,
        marginTop: 20,
      },

      CardStarships:{
        flex:1,
        width: 300,
        height: 300,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor: theme.colors.opacityblack,
        borderRadius: 25,
        borderWidth: 5,
        borderColor: theme.colors.blue,
        shadowColor: theme.colors.lightBlue,
        shadowOffset: { width: 3, height: 3},        
        elevation: 15,
        shadowOpacity: 0.77,
        shadowRadius: 5,
        marginTop: 20,
      },
    textCharacters: {
         fontSize:20,
         fontWeight:"bold",    
         textAlign:"center",    
         color:  theme.colors.red,
          },

    textMovies: {
      fontSize:13,
      fontWeight:"bold",    
      textAlign:"center",    
      color:  theme.colors.lightBlue,
    },

    textPlanets: {
      fontSize:20,
      fontWeight:"bold",    
      textAlign:"center",    
      color:  theme.colors.lightYellow,
      
    },

    textShip: {
      fontSize:15,
      fontWeight:"bold",    
      textAlign:"center",    
      color:  theme.colors.blue,
    },

    text: {
      fontSize:20,
      fontWeight:"bold",    
      textAlign:"center",    
      color: "#ff1500",
    },
    
    image:{
     
      minHeight:"100%",
      minWidth:"100%",
      width:300,
      height: 300,
    },
    resize:{
      resizeMode:"contain",
     
    },
  
});