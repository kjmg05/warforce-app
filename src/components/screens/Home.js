import React from "react";
import { StyleSheet, Text, Image, ImageBackground, View, TouchableOpacity, ScrollView } from "react-native";
import Theme from "../../theme";

const Home = ({navigation}) => {
    return (
        //funcion anonima () => {}
    <ScrollView style={styles.container}>
        <ImageBackground
<<<<<<< HEAD
          source={require("../../../assets/image/estrellasFondojpg.jpg")}
=======
          source={require("../../../assets/image/4.jpg")}
>>>>>>> 828fa4923183ca509b577b8ee0cd87889dbee52f
          resizeMode="contain"
          style={styles.image2}
          imageStyle={styles.image2_imageStyle}
        >
<<<<<<< HEAD
          <Image
=======
        </ImageBackground>


        <View style={styles.body}>
        <Image
>>>>>>> 828fa4923183ca509b577b8ee0cd87889dbee52f
            source={require("../../../assets/image/WARfORCE.png")}
            resizeMode="contain"
            style={styles.image3}
          ></Image>
        
        <TouchableOpacity onPress={() => {navigation.navigate("Characters")}} style={styles.button1}> 
                <Text style={styles.Text}>Characters</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {navigation.navigate("Movies")}} style={styles.button1}> 
                <Text style={styles.Text}>Movies</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {navigation.navigate("Planets")}} style={styles.button1}> 
                <Text style={styles.Text}>Planets</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {navigation.navigate("Starships")}} style={styles.button1}> 
                <Text style={styles.Text}>Starships</Text>
        </TouchableOpacity>
        </View>
<<<<<<< HEAD
        </ImageBackground>
=======
>>>>>>> 828fa4923183ca509b577b8ee0cd87889dbee52f
    </ScrollView>
    );  
};


const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: "rgba(15,15, 15,1)",
<<<<<<< HEAD
=======
        },

        body: {
          
          justifyContent:"center",
          alignItems:"center",
>>>>>>> 828fa4923183ca509b577b8ee0cd87889dbee52f
        },

     
        Text: {
          textAlign:"center",    
          color: "rgba(248,221,43,1)",
          fontSize: 38
        },

        image2: {
          flex:1,
          minHeight:"100%",
          minWidth:"100%", 
          position:"absolute",
          
    
        
        },
        image2_imageStyle: {},

        image3: {
          width: 240,
          height: 170,
          resizeMode: "contain",
      
        },

        button1: {
          
         width: 300,
          height: 126,
          backgroundColor: "rgba(164,164,164,0.5)",
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
          marginTop: 20,
          justifyContent:"center",
          alignItems:"center",
          
        },
      });
      
      
export default Home;