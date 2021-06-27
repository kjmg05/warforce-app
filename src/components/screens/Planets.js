import React, {useEffect, useState} from "react";
import { StyleSheet, Text, View } from "react-native";
import fetchStarWars from "../../api";
import Card from "../Card";

const Planets = () => {
    const [starWars, setStarwars] = useState({});

    const getStarWars = async () => {
        const response = await fetchStarWars();
        
        setStarwars(response);
    };

    useEffect(() => {
        getStarWars();
      }, []);

    return (
        <View>
            <Text>WarForce App</Text>
            {starWars.count && starWars.results.map((starWars) => {
                return(
                    <Card name = {starWars.name} population = {starWars.population} climate = {starWars.climate}/>
                )
                ;})}
        </View>
    );  
};

const styles = StyleSheet.create({});

export default Planets;