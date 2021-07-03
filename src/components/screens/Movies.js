import React, {useEffect, useState} from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { ActivityIndicator } from "react-native-paper";
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
        <SafeAreaView style={styles.container}>
            {movies.count ?
            (<MoviesCardList movies = {movies} navigation={navigation}/>)
            : (<ActivityIndicator animating={true}/>)}
        </SafeAreaView>
    );  
};

const styles = StyleSheet.create({
     container: {
    flex: 1,
    backgroundColor: "#0F0F0F",
  },
});

export default Movies;