import React, {useEffect, useState} from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

const Home = ({navigation}) => {
    return (
        //funcion anonima () => {}
        <View>
        <TouchableOpacity onPress={() => {navigation.navigate("Characters")}} style={styles.container}> 
                <Text>Characters</Text>
                <Image style={styles.image}
        source = {require('../../../assets/image/films/image.png')}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {navigation.navigate("Movies")}} style={styles.container}> 
                <Text>Movies</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {navigation.navigate("Planets")}} style={styles.container}> 
                <Text>Planets</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {navigation.navigate("Starships")}} style={styles.container}> 
                <Text>Starships</Text>
        </TouchableOpacity>
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
      image:{
        padding: 10,
        margin: 10,
        width:300,
         height: 300,
     },
});

export default Home;