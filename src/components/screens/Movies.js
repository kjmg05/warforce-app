import React, {useEffect, useState} from "react";
import { SafeAreaView, StyleSheet ,ImageBackground,Dimensions } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { fetchStarWars } from "../../api";
import { MoviesCardList } from "../CardList";


const {width, height} = Dimensions.get("screen");
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
        <ImageBackground
          source={require("../../../assets/image/luke.jpg")}
          resizeMode="contain"
          style={styles.bgImage}
        >
        <SafeAreaView style={styles.container}>
            {movies.count ?
            (<MoviesCardList movies = {movies} navigation={navigation}/>)
            : (<ActivityIndicator animating={true}/>)}
        </SafeAreaView>
        </ImageBackground>
    );  
};

const styles = StyleSheet.create({
     container: {
    flex: 1,
  },
  bgImage: {

    resizeMode:"contain",
    justifyContent:"center",
    alignItems:"center",
    width: width,
    height: height,
    position:"absolute",
  },
});

export default Movies;