import React from "react";
import { StyleSheet, Text, View, Image,Dimensions,ScrollView} from "react-native";
import StarWarsImage from "./StarWarsImage"
import theme from "../theme";
import { Badge, Card, Title } from "react-native-paper";

const {width, height} = Dimensions.get("screen");
export const CardCharacters = ({swData1, swData2, swData3, swData4, swData5, swData6, swData7, swData8, swData9, number}) => {
  return (
    
<ScrollView>
    <View style={styles.CardCharacters}>
      <Text style={styles.textCharacters}>{swData1}</Text> 
       <StarWarsImage number = {number}  width={width * 0.35} height={width * 0.35}/>
               
  
   </View>
   </ScrollView>
        
  );
};

export const CardMovies = ({swData1, swData2, swData3, swData4, swData5, number}) => {
  return (
    <View style={styles.container}> 
      <View style={styles.CardMovies}>
        <Text style={styles.textMovies}>{swData1}</Text>
       
        <StarWarsImage number = {number}/>
  
    </View>
    </View>
  );
};

export const CardPlanets = ({swData1, swData2, swData3, swData4, swData5, swData6, swData7, swData8, swData9, number}) => {
  return (
      <View style={styles.CardPlanets}>
        <Text style={styles.textPlanets}>{swData1}</Text>
     
        <StarWarsImage number = {number}/>
    </View>
  );
};

export const CardStarships = ({swData1, swData2, swData3, swData4, number}) => {
  return (
      <View style={styles.CardStarships}>
        <Text style={styles.textShip}>{swData1}</Text>

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
        marginTop:20,
     
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
        shadowOpacity: 0.77,
        shadowRadius: 5,
        marginTop: 20,
        backgroundColor:theme.colors.bgColor
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
        shadowOpacity: 0.77,
        shadowRadius: 5,
        marginTop: 25,
      },

      CardStarships:{
        flex:1,
        margin:10,
        padding:10,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor: theme.colors.opacityblack,
        borderRadius: 25,
        borderWidth: 5,
        borderColor: theme.colors.blue,
        shadowColor: theme.colors.lightBlue,
        shadowOffset: { width: 3, height: 3},        
        shadowOpacity: 0.77,
        shadowRadius: 5,
        marginTop: 30,
        
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