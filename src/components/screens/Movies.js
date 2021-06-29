import React, {useEffect, useState} from "react";
import { StyleSheet, ScrollView } from "react-native";
import getEnvVars from "../../../environment";
import Card from "../Card";


//Para obtener los datos de la API
const { apiUrl } = getEnvVars();

const fetchStarWars = async () => {
    const endpoint = `${apiUrl}/films/`;

    const response = await fetch(endpoint);
    const data = await response.json();

    return data;
};

const Movies = () => {
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
                        swData1 = {`Episode ${starWars.episode_id}: ${starWars.title}`}  
                        // swData2= {starWars.opening_crawl}
                        swData2= {`Date Created: ${starWars.release_date}`} 
                        swData3 = {`Director: ${starWars.director}`} 
                        swData4 = {`Producer(s): ${starWars.producer}`}
                        number = {`films/${index+1}`}
                    />
                )
                ;})}
        </ScrollView>
    );  
};

const styles = StyleSheet.create({});

export default Movies;