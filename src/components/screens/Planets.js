import React, {useEffect, useState} from "react";
import { StyleSheet, ScrollView } from "react-native";
import { linkedInfo, fetchStarWars } from "../../api";
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
            <PlanetsCardList planets = {planets} navigation={navigation} planetNumber={planetNumber}/>
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