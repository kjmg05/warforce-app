import React, {useEffect, useState} from "react";
import { StyleSheet, Text, View} from "react-native";
import getEnvVars from "../../../environment";
import Card from "../Card";

//Para obtener los datos de la API
const { apiUrl } = getEnvVars();

const fetchStarWars = async () => {
    const endpoint = `${apiUrl}/people/`;

    const response = await fetch(endpoint);
    const data = await response.json();

    return data;
};

const Characters = () => {
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
            {starWars.count && starWars.results.map((starWars, index) => {
                return(
                    <Card name = {starWars.name} population = {starWars.homeworld} climate = {starWars.gender} number = {`characters/${index+1}`}/>
                )
                ;})}
        </View>
    );  
};

const styles = StyleSheet.create({});

export default Characters;