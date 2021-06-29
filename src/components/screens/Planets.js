import React, {useEffect, useState} from "react";
import { StyleSheet, ScrollView } from "react-native";
import getEnvVars from "../../../environment";
import Card from "../Card";


//Para obtener los datos de la API
const { apiUrl } = getEnvVars();

const fetchStarWars = async () => {
    const endpoint = `${apiUrl}planets/`;

    const response = await fetch(endpoint);
    const data = await response.json();

    return data;
};

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
        <ScrollView>
            {starWars.count && starWars.results.map((starWars, index) => {  
                return(
                    <Card 
                        key = {index}
                        swData1 = {`Planet: ${starWars.name}`}  
                        swData2= {`Climate: ${starWars.climate}`} 
                        swData3 = {`Gravity: ${starWars.gravity}`} 
                        swData4 = {`Population: ${starWars.population}`}
                        number = {`planets/${index+1}`}
                    />
                )
                ;})}
        </ScrollView>
    );  
};

const styles = StyleSheet.create({});

export default Planets;