import React from "react";
import { Dimensions, StyleSheet, Text, Image, ImageBackground, View, TouchableOpacity, ScrollView } from "react-native";

const {width, height} = Dimensions.get("screen");

const Home = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
        <ImageBackground
          source={require("../../../assets/image/background.jpg")}
          resizeMode="contain"
          style={styles.bgImage}
        >
        </ImageBackground>

        <View style={styles.body}>
          <Image
            source={require("../../../assets/image/wf_logo.png")}
            resizeMode="contain"
            style={styles.wfImage}
          >
          </Image>
          
          <TouchableOpacity onPress={() => {navigation.navigate("PagesCharacters")}} style={styles.button}> 
            <Text style={styles.text}>Characters</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {navigation.navigate("Movies")}} style={styles.button}> 
            <Text style={styles.text}>Movies</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {navigation.navigate("PagesPlanets")}} style={styles.button}> 
            <Text style={styles.text}>Planets</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {navigation.navigate("PagesStarships")}} style={styles.button}> 
            <Text style={styles.text}>Starships</Text>
          </TouchableOpacity>
        </View>
    </ScrollView>
  );  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F0F01",
  },

  body: {
    justifyContent:"center",
    alignItems:"center",
  },

  text: {
    textAlign:"center",    
    color: "#F8DD2B", 
    fontSize: 38,
  },

  bgImage: {
    flex:1,
    resizeMode: "cover",
    justifyContent:"center",
    alignItems:"center",
    width: width,
    height: height,
  },

  wfImage: {
    width: 240,
    height: 170,
    resizeMode: "contain",
  },

  button: {
    width: 300,
    height: 126,
    backgroundColor: "rgba(164,164,164,0.5)",
    borderRadius: 25,
    borderWidth: 5,
    borderColor: "#F8DD2B",
    shadowColor: "#DAE00C",
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