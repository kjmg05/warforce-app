import React, {useEffect, useState} from "react";
import { StyleSheet, View,ImageBackground,Dimensions} from "react-native";
import { LinkedInfo } from "../../api";
import { CardCharacters } from "../Card";
import { CardPlanets } from "../Card";
import { CardMovies } from "../Card";
import { CardStarships } from "../Card";

<<<<<<< HEAD
export const SwInfoCharacter = ({ route }) => {
  const {characters, index}  = route.params;

  const [info, setInfo] = useState({});

  const getInfo = async () => {
    const infoResponse = await LinkedInfo(characters.homeworld);
    
    setInfo(infoResponse);
  };

  useEffect(() => {
    getInfo();
  }, []);

  return(
=======
const {width, height} = Dimensions.get("screen");

export const SwInfoCharacter = ({ route }) => {
  const {characters, index}  = route.params;

  const [info, setInfo] = useState({});

  const getInfo = async () => {
    const infoResponse = await LinkedInfo(characters.homeworld);
    
    setInfo(infoResponse);
  };

  useEffect(() => {
    getInfo();
  }, []);

  return(
 
    <View style={styles.container}>
         <ImageBackground
    source={require("../../../assets/image/darth.jpg")}
    resizeMode="contain"
    style={styles.bgImage}
    >
>>>>>>> 89ec3165b7f2a864cc46bae2b9c53d0c9881af31
    <CardCharacters
      swData1 = {`Name: ${characters.name}`}  
      swData2 = {`Height: ${characters.height}`} 
      swData3 = {`Mass: ${characters.mass}`} 
      swData4 = {`Hair Color: ${characters.hair_color}`}
      swData5 = {`Skin Color: ${characters.skin_color}` }
      swData6 = {`Eye Color: ${characters.eye_color}`}  
      swData7 = {`Birth Year: ${characters.birth_year}`} 
      swData8 = {`Gender: ${characters.gender}`} 
      swData9 = {`HomeWorld: ${info.name}`}
      number = {`characters/${index}`}
    />
<<<<<<< HEAD
=======
    </ImageBackground>
    </View>
>>>>>>> 89ec3165b7f2a864cc46bae2b9c53d0c9881af31
  );
};

export const SwInfoMovie = ({ route }) => {
  const {movies, index} = route.params;

  return(
    
    <View style={styles.container}>
         <ImageBackground
    source={require("../../../assets/image/luke.jpg")}
    resizeMode="contain"
    style={styles.bgImage}
    >
    <CardMovies
      swData1 = {`Episode ${movies.episode_id}: ${movies.title}`}  
      swData2= {`Director: ${movies.director}`} 
      swData3 = {`Producer(s): ${movies.producer}`} 
      swData4 = {`Date Created: ${movies.release_date}`}
      swData5 = {`Opening Crawl: ${movies.opening_crawl}`}
      number = {`films/${index+1}`}
<<<<<<< HEAD
    />
  );
};

export const SwInfoPlanet = ({ route }) => {
  const {planets, index}  = route.params;

  return (
    <CardPlanets
      swData1 = {`Planet: ${planets.name}`} 
      swData2 = {`Rotation Period: ${planets.rotation_period}`} 
      swData3 = {`Orbital Period: ${planets.orbital_period}`} 
      swData4 = {`Diameter: ${planets.diameter}`}
      swData5 = {`Climate: ${planets.climate}`}
      swData6 = {`Gravity: ${planets.gravity}`}  
      swData7 = {`Terrain: ${planets.terrain}`} 
      swData8 = {`Surface Water: ${planets.surface_water}`} 
      swData9 = {`Population: ${planets.population}`}
      number = {`planets/${index+1}`}
=======
>>>>>>> 89ec3165b7f2a864cc46bae2b9c53d0c9881af31
    />
    </ImageBackground>
    </View>
  );
};

export const SwInfoPlanet = ({ route }) => {
  const {planets, index}  = route.params;

  return (
    <View style={styles.container}>
         <ImageBackground
    source={require("../../../assets/image/leia.jpg")}
    resizeMode="contain"
    style={styles.bgImage}
    >
    <CardPlanets
      swData1 = {`Planet: ${planets.name}`} 
      swData2 = {`Rotation Period: ${planets.rotation_period}`} 
      swData3 = {`Orbital Period: ${planets.orbital_period}`} 
      swData4 = {`Diameter: ${planets.diameter}`}
      swData5 = {`Climate: ${planets.climate}`}
      swData6 = {`Gravity: ${planets.gravity}`}  
      swData7 = {`Terrain: ${planets.terrain}`} 
      swData8 = {`Surface Water: ${planets.surface_water}`} 
      swData9 = {`Population: ${planets.population}`}
      number = {`planets/${index+1}`}
    />
     </ImageBackground>
    </View>
  );
};

export const SwInfoStarship = ({ route }) => {
const {starships, index} = route.params;
  return(
<<<<<<< HEAD
=======
    <View style={styles.container}>
         <ImageBackground
    source={require("../../../assets/image/r2d2.jpg")}
    resizeMode="contain"
    style={styles.bgImage}
    >
>>>>>>> 89ec3165b7f2a864cc46bae2b9c53d0c9881af31
    <CardStarships
      swData1 = {`Starships: ${starships.name}`}  
      swData2= {`Model: ${starships.model}`} 
      swData3 = {`Manufacturer: ${starships.manufacturer}`} 
      swData4 = {`Class: ${starships.starship_class}`}
      number = {`starships/${index+1}`}
    />
<<<<<<< HEAD
=======
      </ImageBackground>
    </View>
>>>>>>> 89ec3165b7f2a864cc46bae2b9c53d0c9881af31
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
<<<<<<< HEAD
=======
    backgroundColor: "rgba(15,15, 15,1)",
  },
  bgImage: {
    flex:1,
resizeMode: "cover",
justifyContent:"center",
alignItems:"center",
width: width,
height: height,
position:"absolute",
>>>>>>> 89ec3165b7f2a864cc46bae2b9c53d0c9881af31
  },
});