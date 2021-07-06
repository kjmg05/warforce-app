import React, { useState } from "react";
import { Dimensions, StyleSheet, SafeAreaView, ScrollView, ImageBackground, View, Image, Modal, TouchableOpacity, Text } from "react-native";
import {MaterialIcons} from "@expo/vector-icons"
import theme from "../../theme";

const {width, height} = Dimensions.get("screen");

const Home = ({navigation}) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView >
        <ImageBackground
          source={require("../../../assets/image/background.jpg")}
          resizeMode="contain"
          style={styles.bgImage}
        />

        <MaterialIcons
          style={styles.infoIcon}
          name='info'
          size={24}
          onPress={() => setModalOpen(true)}
          color="#fff"
        />

        <View style={styles.body}>
          <Image
            source={require("../../../assets/image/wf_logo.png")}
            resizeMode="contain"
            style={styles.wfImage}
          />

          <Modal visible={modalOpen}>
          
            <SafeAreaView style={styles.modal}>
            <MaterialIcons
                style={styles.closeIcon}
                name='close'
                size={24}
                onPress={() => setModalOpen(false)}
              />
              <View>
                <Text style={styles.modalTitle}>What is this?</Text>
                <Text style={styles.modalText}>Do you have trouble remembering names, but are great at remembering faces? Us too. 
                  That is why we created this mobile app. Everything is click based, so if you are interested in seeing all the characters from the Star Wars films, 
                  click the characters category. After that, simply click on any picture to learn more about that character's characteristics.</Text>
                <Text style={styles.modalTitle}>Why is there unknown info?</Text>
                <Text style={styles.modalText}>This app utilizes the Star Wars API, so the information displayed in this app will be updated as the API is updated.</Text>
                <Image
                  source={require("../../../assets/image/wf_logo.png")}
                  style={styles.wfImageModal}
                />
                <Text style={styles.modalFooter}>DESING AND DEVELOP BY</Text>
                <Text style={styles.modalFooterText}>DANIEL ARIAS AND KENIA MARTINEZ ⓒ 2021</Text>
              </View>
            </SafeAreaView>
          </Modal>

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
    </SafeAreaView>
  );  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.bgColor,
<<<<<<< HEAD
    marginTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
=======
   
    //marginTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
>>>>>>> 89ec3165b7f2a864cc46bae2b9c53d0c9881af31
  },

  body: {
    justifyContent:"center",
    alignItems:"center",
    marginBottom: 50,
  },

  text: {
    textAlign:"center",    
    color: theme.colors.lightYellow, 
    fontSize: 38,
  },

  infoIcon: {
    marginLeft: 350,
    marginTop: 20, 
    color: theme.colors.lightYellow, 
    fontSize: 38,
  },

  closeIcon: {
    marginLeft: 350,
    marginTop: 20,   
    color: theme.colors.red, 
    fontSize: 38,
  },

  modal: {
    flex: 1,
    backgroundColor: theme.colors.bgColor,
  },

  modalTitle: {
    margin: 10,
    textAlign:"center",    
    color: theme.colors.lightYellow, 
    fontSize: 38,
  },

  modalText: {
    paddingLeft: 20,
    paddingRight: 20,
    textAlign:"justify",    
    color: theme.colors.orange, 
    fontSize: 18,
  },

  modalFooter: {
    paddingLeft: 20,
    paddingRight: 20,
    textAlign:"center",  
    color: theme.colors.lightYellow, 
    fontSize: 18,
  },

  modalFooterText: {
    paddingLeft: 20,
    paddingRight: 20,
    textAlign:"center",    
    color: theme.colors.lightYellow, 
    fontSize: 18,
  },

  wfImageModal: {
    width: 200,
    height: 130,
    marginTop: 250,
    marginLeft: 105,
    position:"relative",
  },

  bgImage: {
    flex:1,
    resizeMode: "cover",
    justifyContent:"center",
    alignItems:"center",
    width: width,
    height: height,
    position:"absolute",
  },

  wfImage: {
    width: 240,
    height: 170,
    resizeMode: "contain",
  },

  button: {
    width: 300,
    height: 126,
    backgroundColor: theme.colors.opacity,
    borderRadius: 25,
    borderWidth: 5,
    borderColor: theme.colors.lightYellow,
    shadowColor: theme.colors.shadow,
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