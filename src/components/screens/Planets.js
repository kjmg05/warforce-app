import React, {useEffect, useState} from "react";
import { ScrollView,StyleSheet,ImageBackground,Dimensions } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { fetchStarWars } from "../../api";
import { PlanetsCardList } from "../CardList";

const {width, height} = Dimensions.get("screen");
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
       
      },
      bgImage: {
        flex:1,
        resizeMode: "cover",
        justifyContent:"center",
        alignItems:"center",
        width: width,
        height: height,
        position:"absolute",
        marginTop:-15,
      },
});

export default Planets;