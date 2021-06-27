import React, {useEffect, useState} from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const Home = ({navigation}) => {
    return (
        //funcion anonima () => {}
        <TouchableOpacity onPress={() => {navigation.navigate("Planets")}}> 
            <View style={styles.container}>
                <Text>Esta es la pantalla de inicio</Text>
            </View>
        </TouchableOpacity>
        
    );  
};

const styles = StyleSheet.create({
    container:{
        padding: 10,
        margin: 10,
        borderColor:"#000",
        borderWidth: 1,
      },
});

export default Home;