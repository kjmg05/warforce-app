import React from "react";
import { Image, StyleSheet, Text, View} from "react-native";
import getEnvVars from "../../environment";

const { imageUrl } = getEnvVars();

const Card = ({swData1, swData2, swData3, swData4, number}) => {
  return (
      <View style={styles.container}>
        <Text style={styles.text}>{swData1}</Text>
        <Text style={styles.text}>{swData2}</Text>
        <Text style={styles.text}>{swData3}</Text>
        <Text style={styles.text}>{swData4}</Text>
        <Image style={styles.image} source = {{uri : `${imageUrl}${number}.jpg`}}/>
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