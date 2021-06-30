import React from "react";
import { StyleSheet, View } from "react-native";
import Card from "./Card";

export const CharactersCardList = ({ characters, info }) => {
    return (
        <View>
            {characters.count && characters.results.map((characters, index) =>{
                return (
                    <Card 
                        key = {index}
                        swData1 = {`Name: ${characters.name}`}  
                        swData2 = {`Birth Year: ${characters.birth_year}`} 
                        swData3 = {`Gender: ${characters.gender}`} 
                        swData4 = {`HomeWorld: ${info.name}`}
                        number = {`characters/${index}`}
                    />
                )
                ;})}
        </View>
        
    );
};

export const MoviesCardList = ({ movies }) => {
    return (
        <View>
            {movies.count && movies.results.map((movies, index) => {
                return(
                    <Card 
                        key = {index}
                        swData1 = {`Episode ${movies.episode_id}: ${movies.title}`}  
                        // swData2= {starWars.opening_crawl}
                        swData2= {`Date Created: ${movies.release_date}`} 
                        swData3 = {`Director: ${movies.director}`} 
                        swData4 = {`Producer(s): ${movies.producer}`}
                        number = {`films/${index+1}`}
                    />
                )
                ;})}
        </View>
    );
};

export const PlanetsCardList = ({ planets }) => {
    return(
        <View>
            {planets.count && planets.results.map((planets, index) => {  
                return(
                    <Card
                        key = {index}
                        swData1 = {`Planet: ${planets.name}`} 
                        swData2 = {`Climate: ${planets.climate}`} 
                        swData3 = {`Gravity: ${planets.gravity}`} 
                        swData4 = {`Population: ${planets.population}`}
                        number = {`planets/${index+1}`}
                    />
                )
                ;})}
        </View>
    );
};

export const StarshipsCardList = ({ starships }) => {
    return(
        <View>
            {starships.count && starships.results.map((starships, index) => {
                return(
                    <Card
                        key = {index}
                        swData1 = {`Starships: ${starships.name}`}  
                        swData2= {`Model: ${starships.model}`} 
                        swData3 = {`Manufacturer: ${starships.manufacturer}`} 
                        swData4 = {`Class: ${starships.starship_class}`}
                        number = {`starships/${index+1}`}
                    />
                )
                ;})}
        </View>
    );
};

const styles = StyleSheet.create({});
