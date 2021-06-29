import React, {useEffect, useState} from "react";
import { StyleSheet, ScrollView } from "react-native";
import getEnvVars from "../../../environment";
import Card from "../Card";


//Para obtener los datos de la API
const { apiUrl } = getEnvVars();

const fetchStarWars = async () => {
    const endpoint = `${apiUrl}/starships/`;

    const response = await fetch(endpoint);
    const data = await response.json();

    return data;
};

const Starships = () => {
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
                        swData1 = {`Starships: ${starWars.name}`}  
                        swData2= {`Model: ${starWars.model}`} 
                        swData3 = {`Manufacturer: ${starWars.manufacturer}`} 
                        swData4 = {`Class: ${starWars.starship_class}`}
                        number = {`starships/${index+1}`}
                    />
                )
                ;})}
        </ScrollView>
    );  
};

const styles = StyleSheet.create({});

export default Starships;