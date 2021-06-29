import React from "react";
import { StyleSheet, Text, Image, ImageBackground, View, TouchableOpacity, ScrollView } from "react-native";
import Theme from "../../theme";

const Home = ({navigation}) => {
    return (
        //funcion anonima () => {}
    <ScrollView style={styles.container}>
        <ImageBackground
          source={require("../../../assets/image/estrellasFondojpg.jpg")}
          resizeMode="contain"
          style={styles.image2}
          imageStyle={styles.image2_imageStyle}
        >
          <Image
            source={require("../../../assets/image/WARfORCE.png")}
            resizeMode="contain"
            style={styles.image3}
          ></Image>
        <View>
        <TouchableOpacity onPress={() => {navigation.navigate("Characters")}} style={styles.button1}> 
                <Text style={styles.Text}>Characters</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {navigation.navigate("Movies")}} style={styles.button2}> 
                <Text style={styles.Text}>Movies</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {navigation.navigate("Planets")}} style={styles.button3}> 
                <Text style={styles.Text}>Planets</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {navigation.navigate("Starships")}} style={styles.button4}> 
                <Text style={styles.Text}>Starships</Text>
        </TouchableOpacity>
        </View>
        </ImageBackground>
    </ScrollView>
    );  
};


const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: "rgba(15,15, 15,1)",
        },

        Text: {
        marginTop:30,   
        textAlign:"center",    
        color: "rgba(248,221,43,1)",
        fontSize: 38
         },

        image2: {
          width: 573,
          height: 841,
          backgroundColor: "rgba(0,0,0,1)",
          marginTop: -13,
          marginLeft: -85
        },
        image2_imageStyle: {},
        image3: {
          width: 237,
          height: 166,
          marginTop: 40,
          marginLeft: 154
        },
        button1: {
          width: 300,
          height: 126,
          backgroundColor: "rgba(164,164,164,0.5)",
          borderRadius: 35,
          borderWidth: 5,
          borderColor: "rgba(248,221,43,1)",
          shadowColor: "rgba(218,224,12,1)",
          shadowOffset: {
            width: 3,
            height: 3
          },
          elevation: 15,
          shadowOpacity: 0.77,
          shadowRadius: 5,
          marginTop: 10,
          marginLeft: 123
        },
        button2: {
          width: 300,
          height: 126,
          backgroundColor: "rgba(164,164,164,0.5)",
          borderRadius: 35,
          borderWidth: 5,
          borderColor: "rgba(248,221,43,1)",
          shadowColor: "rgba(218,224,12,1)",
          shadowOffset: {
            width: 3,
            height: 3
          },
          elevation: 15,
          shadowOpacity: 0.77,
          shadowRadius: 5,
          marginTop: 16,
          marginLeft: 123
        },
        button3: {
          width: 300,
          height: 126,
          backgroundColor: "rgba(164,164,164,0.5)",
          borderRadius: 35,
          borderWidth: 5,
          borderColor: "rgba(248,221,43,1)",
          shadowColor: "rgba(218,224,12,1)",
          shadowOffset: {
            width: 3,
            height: 3
          },
          elevation: 15,
          shadowOpacity: 0.77,
          shadowRadius: 5,
          marginTop: 18,
          marginLeft: 123
        },
        button4: {
          width: 300,
          height: 126,
          backgroundColor: "rgba(164,164,164,0.5)",
          borderRadius: 35,
          borderWidth: 5,
          borderColor: "rgba(248,221,43,1)",
          shadowColor: "rgba(218,224,12,1)",
          shadowOffset: {
            width: 3,
            height: 3
          },
          elevation: 15,
          shadowOpacity: 0.77,
          shadowRadius: 5,
          marginTop: 21,
          marginLeft: 123
        }
      });
      
      
export default Home;