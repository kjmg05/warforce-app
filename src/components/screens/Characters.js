import React, {useEffect, useState} from "react";
import { StyleSheet, ScrollView } from "react-native";
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
        <ScrollView>
            {starWars.count && starWars.results.map((starWars, index) =>
            {
                return(
                    <Card 
                        key = {index}
                        swData1 = {`Name: ${starWars.name}`}  
                        swData2= {`Birth Year: ${starWars.birth_year}`} 
                        swData3 = {`Gender: ${starWars.gender}`} 
                        swData4 = {`HomeWorld: ${starWars.homeworld}`}
                        number = {`characters/${index+1}`}
                    />   
                )
                ;})}
        </ScrollView>
            
    );  
};

const styles = StyleSheet.create({});

export default Characters;