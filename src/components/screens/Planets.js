import React, {useEffect, useState} from "react";
<<<<<<< HEAD
import { ScrollView,StyleSheet } from "react-native";
=======
import { ScrollView,StyleSheet,ImageBackground,Dimensions } from "react-native";
>>>>>>> 89ec3165b7f2a864cc46bae2b9c53d0c9881af31
import { ActivityIndicator } from "react-native-paper";
import { fetchStarWars } from "../../api";
import { PlanetsCardList } from "../CardList";

<<<<<<< HEAD
=======
const {width, height} = Dimensions.get("screen");
>>>>>>> 89ec3165b7f2a864cc46bae2b9c53d0c9881af31
const Planets = ({navigation, route}) => {
    const [planets, setPlanets] = useState({});
    const {page, planetNumber} = route.params;

    const getPlanets = async () => {
        const response = await fetchStarWars(page);
        
        setPlanets(response);
    };

    useEffect(() => {
        getPlanets();
      }, []);

    return (
        <ImageBackground
          source={require("../../../assets/image/leia.jpg")}
          resizeMode="contain"
          style={styles.bgImage}
        >
        <ScrollView style={styles.container}>
            {planets.count ?
            (<PlanetsCardList planets = {planets} navigation={navigation} planetNumber={planetNumber}/>)
            : (<ActivityIndicator animating={true}/>)}
        </ScrollView>
        </ImageBackground>
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

export default Planets;