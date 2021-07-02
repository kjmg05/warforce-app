import React, {useEffect, useState} from "react";
import { StyleSheet, ScrollView } from "react-native";
import { fetchStarWars } from "../../api";
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
        <ScrollView style={styles.container}>
            <MoviesCardList movies = {movies} navigation={navigation}/>
        </ScrollView>
    );  
};

const styles = StyleSheet.create({
     container: {
    flex: 1,
    backgroundColor: "#0F0F0F",
  },
});

export default Movies;