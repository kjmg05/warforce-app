import React, {useEffect, useState} from "react";
import { StyleSheet, ScrollView } from "react-native";
import { linkedInfo, fetchStarWars } from "../../api";
import { MoviesCardList } from "../CardList";

const Movies = ({navigation}) => {
    const [movies, setMovies] = useState({});

    const getMovies = async () => {
        const response = await fetchStarWars('films/');
        
        setMovies(response);
    };

    useEffect(() => {
        getMovies();
      }, []);

    return (
        <ScrollView>
            <MoviesCardList movies = {movies} navigation={navigation}/>
        </ScrollView>
    );  
};

const styles = StyleSheet.create({});

export default Movies;