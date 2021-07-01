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
<<<<<<< HEAD
        <ScrollView>
=======
        <ScrollView style={styles.container}>
>>>>>>> 828fa4923183ca509b577b8ee0cd87889dbee52f
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