import React from "react";
import { StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { CardCharacters } from "./Card";
import { CardMovies } from "./Card";
import { CardPlanets } from "./Card";
import { CardStarships } from "./Card";

export const CharactersCardList = ({ characters, navigation, charNumber }) => {
    return (
        <ScrollView>
            {characters.count && characters.results.map((characters, index) =>{
                return (
                    <TouchableOpacity onPress={() => {navigation.navigate("SwInfoCharacter", {characters: characters, index: charNumber+index})}}>
                        <CardCharacters 
                            key = {index}
                            swData1 = {`${characters.name}`}
                            number = {`characters/${charNumber+index}`}
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
                            number = {`films/${index+1}`}
                        />
                    </TouchableOpacity>
                )
                ;})}
        </ScrollView>
    );
};

export const PlanetsCardList = ({ planets, navigation, planetNumber }) => {
    return(
        <ScrollView>
            {planets.count && planets.results.map((planets, index) => {  
                return(
                    <TouchableOpacity onPress={() => {navigation.navigate("SwInfoPlanet", {planets: planets, index: planetNumber+index})}}>
                    <CardPlanets
                        key = {index}
                        swData1 = {`${planets.name}`}
                        number = {`planets/${planetNumber+index}`}
                    />
                    </TouchableOpacity>
                )
                ;})}
        </ScrollView>
    );
};

export const StarshipsCardList = ({ starships, navigation, starshipNumber }) => {
    return(
        <ScrollView>
            {starships.count && starships.results.map((starships, index) => {
                return(
                    <TouchableOpacity onPress={() => {navigation.navigate("SwInfoStarship", {starships: starships, index: starshipNumber+index})}}>
                        <CardStarships
                        key = {index}
                        swData1 = {`${starships.name}`}  
                        number = {`starships/${starshipNumber+index}`}
                    />
                    </TouchableOpacity>
                )
                ;})}
        </ScrollView>
    );
};

const styles = StyleSheet.create({});
