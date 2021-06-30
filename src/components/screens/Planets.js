import React, {useEffect, useState} from "react";
import { StyleSheet, ScrollView } from "react-native";
import { linkedInfo, fetchStarWars } from "../../api";
import { PlanetsCardList } from "../CardList";

const Planets = () => {
    const [planets, setPlanets] = useState({});

    const getPlanets = async () => {
        const response = await fetchStarWars('planets/');
        
        setPlanets(response);
    };

    useEffect(() => {
        getPlanets();
      }, []);

    return (
        <ScrollView>
            <PlanetsCardList planets = {planets}/>
        </ScrollView>
    );  
};

const styles = StyleSheet.create({});

export default Planets;