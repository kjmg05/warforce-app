import React, {useEffect, useState} from "react";
<<<<<<< HEAD
import { SafeAreaView, StyleSheet } from "react-native";
=======
import { SafeAreaView, StyleSheet ,ImageBackground,Dimensions } from "react-native";
>>>>>>> 89ec3165b7f2a864cc46bae2b9c53d0c9881af31
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
<<<<<<< HEAD
=======
        <ImageBackground
          source={require("../../../assets/image/luke.jpg")}
          resizeMode="contain"
          style={styles.bgImage}
        >
>>>>>>> 89ec3165b7f2a864cc46bae2b9c53d0c9881af31
        <SafeAreaView style={styles.container}>
            {movies.count ?
            (<MoviesCardList movies = {movies} navigation={navigation}/>)
            : (<ActivityIndicator animating={true}/>)}
        </SafeAreaView>
<<<<<<< HEAD
=======
        </ImageBackground>
>>>>>>> 89ec3165b7f2a864cc46bae2b9c53d0c9881af31
    );  
};

const styles = StyleSheet.create({
     container: {
    flex: 1,
<<<<<<< HEAD
    backgroundColor: "#0F0F0F",
=======
  },
  bgImage: {

    resizeMode:"contain",
    justifyContent:"center",
    alignItems:"center",
    width: width,
    height: height,
    position:"absolute",
>>>>>>> 89ec3165b7f2a864cc46bae2b9c53d0c9881af31
  },
});

export default Movies;