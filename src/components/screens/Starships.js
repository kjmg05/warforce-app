import React, {useEffect, useState} from "react";
<<<<<<< HEAD
import { SafeAreaView, StyleSheet } from "react-native";
=======
import { SafeAreaView, StyleSheet,ImageBackground,Dimensions } from "react-native";
>>>>>>> 89ec3165b7f2a864cc46bae2b9c53d0c9881af31
import { ActivityIndicator } from "react-native-paper";
import { fetchStarWars } from "../../api";
import { StarshipsCardList } from "../CardList";

<<<<<<< HEAD
const Starships = ({navigation, route}) => {
    const [starships, setStarships] = useState({});
    const {page, starshipNumber} = route.params;
=======

 
const {width, height} = Dimensions.get("screen");

const Starships = ({navigation, route}) => {
    const [starships, setStarships] = useState({});
    const {page, starshipNumber} = route.params;
   
>>>>>>> 89ec3165b7f2a864cc46bae2b9c53d0c9881af31

    const getStarships = async () => {
        const response = await fetchStarWars(page);
        
        setStarships(response);
    };

    useEffect(() => {
        getStarships();
      }, []);

    return (
<<<<<<< HEAD
=======
        <ImageBackground
        source={require("../../../assets/image/r2d2.jpg")}
        resizeMode="contain"
        style={styles.bgImage}>
>>>>>>> 89ec3165b7f2a864cc46bae2b9c53d0c9881af31
        <SafeAreaView  style={styles.container}>
            {starships.count ? 
            (<StarshipsCardList starships = {starships} navigation={navigation} starshipNumber={starshipNumber} />)
            : (<ActivityIndicator animating={true}/>)}
        </SafeAreaView>
<<<<<<< HEAD
=======
        </ImageBackground>
>>>>>>> 89ec3165b7f2a864cc46bae2b9c53d0c9881af31
    );  
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
<<<<<<< HEAD
        backgroundColor: "#0F0F0F",
=======
       
      },
      bgImage: {
        flex:1,
        resizeMode: "cover",
        justifyContent:"center",
        alignItems:"center",
        width: width,
        height: height,
        position:"absolute",
>>>>>>> 89ec3165b7f2a864cc46bae2b9c53d0c9881af31
      },
});

export default Starships;