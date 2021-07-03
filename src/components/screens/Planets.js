import React, {useEffect, useState} from "react";
import { ScrollView,StyleSheet } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { fetchStarWars } from "../../api";
import { PlanetsCardList } from "../CardList";

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
        <ScrollView style={styles.container}>
            {planets.count ?
            (<PlanetsCardList planets = {planets} navigation={navigation} planetNumber={planetNumber}/>)
            : (<ActivityIndicator animating={true}/>)}
        </ScrollView>
    );  
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0F0F0F",
      },
});

export default Planets;