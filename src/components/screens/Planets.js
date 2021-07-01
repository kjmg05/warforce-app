import React, {useEffect, useState} from "react";
import { StyleSheet, ScrollView } from "react-native";
import { linkedInfo, fetchStarWars } from "../../api";
import { PlanetsCardList } from "../CardList";

const Planets = ({navigation}) => {
    const [planets, setPlanets] = useState({});

    const getPlanets = async () => {
        const response = await fetchStarWars('planets/');
        
        setPlanets(response);
    };

    useEffect(() => {
        getPlanets();
      }, []);

    return (
        <ScrollView style={styles.container}>
            <PlanetsCardList planets = {planets} navigation={navigation}/>
        </ScrollView>
    );  
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(15,15, 15,1)",
      },

});

export default Planets;