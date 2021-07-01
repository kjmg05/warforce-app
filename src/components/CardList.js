import React from "react";
import { StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { CardCharacters } from "./Card";
import { CardMovies } from "./Card";
import { CardPlanets } from "./Card";
import { CardStarships } from "./Card";

export const CharactersCardList = ({ characters, navigation }) => {
    return (
        <ScrollView>
            {characters.count && characters.results.map((characters, index) =>{
                return (
                    <TouchableOpacity onPress={() => {navigation.navigate("SwInfoCharacter", {characters: characters, index: index})}}>
                        <CardCharacters 
                            key = {index}
                            swData1 = {`Name: ${characters.name}`}  
                            // swData2 = {`Birth Year: ${characters.birth_year}`} 
                            // swData3 = {`Gender: ${characters.gender}`} 
                            // swData4 = {`HomeWorld: ${info.name}`}
                            number = {`characters/${index}`}
                        />
                    </TouchableOpacity>
                )
                ;})}
        </ScrollView>
        
    );
};

export const MoviesCardList = ({ movies, navigation }) => {
    return (
        <ScrollView>
            {movies.count && movies.results.map((movies, index) => {
                return(
                    <TouchableOpacity onPress={() => {navigation.navigate("SwInfoMovie", {movies: movies, index: index})}}>
                        <CardMovies
                            key = {index}
                            swData1 = {`Episode ${movies.episode_id}: ${movies.title}`}  
                            // swData2= {starWars.opening_crawl}
                            // swData2= {`Date Created: ${movies.release_date}`} 
                            // swData3 = {`Director: ${movies.director}`} 
                            // swData4 = {`Producer(s): ${movies.producer}`}
                            number = {`films/${index+1}`}
                        />
                    </TouchableOpacity>
                )
                ;})}
        </ScrollView>
    );
};

export const PlanetsCardList = ({ planets, navigation }) => {
    return(
        <ScrollView>
            {planets.count && planets.results.map((planets, index) => {  
                return(
                    <TouchableOpacity onPress={() => {navigation.navigate("SwInfoPlanet", {planets: planets, index: index})}}>
                    <CardPlanets
                        key = {index}
                        swData1 = {`Planet: ${planets.name}`} 
                        // swData2 = {`Climate: ${planets.climate}`} 
                        // swData3 = {`Gravity: ${planets.gravity}`} 
                        // swData4 = {`Population: ${planets.population}`}
                        number = {`planets/${index+1}`}
                    />
                    </TouchableOpacity>
                )
                ;})}
        </ScrollView>
    );
};

export const StarshipsCardList = ({ starships, navigation }) => {
    return(
        <ScrollView>
            {starships.count && starships.results.map((starships, index) => {
                return(
                    <TouchableOpacity onPress={() => {navigation.navigate("SwInfoStarship", {starships: starships, index: index})}}>
                        <CardStarships
                        key = {index}
                        swData1 = {`Starships: ${starships.name}`}  
                        // swData2= {`Model: ${starships.model}`} 
                        // swData3 = {`Manufacturer: ${starships.manufacturer}`} 
                        // swData4 = {`Class: ${starships.starship_class}`}
                        number = {`starships/${index+1}`}
                    />
                    </TouchableOpacity>
                    
                )
                ;})}
        </ScrollView>
    );
};

const styles = StyleSheet.create({});
