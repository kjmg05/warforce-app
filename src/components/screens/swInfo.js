import React, {useEffect, useState} from "react";
import { StyleSheet, View} from "react-native";
import { LinkedInfo } from "../../api";
import { CardCharacters } from "../Card";
import { CardPlanets } from "../Card";
import { CardMovies } from "../Card";
import { CardStarships } from "../Card";

export const SwInfoCharacter = ({ route }) => {
    const {characters, index}  = route.params;
    //HomeWorld
    const [info, setInfo] = useState({});

    const getInfo = async () => {
      const infoResponse = await LinkedInfo(characters.homeworld);
      
      setInfo(infoResponse);
    };

    useEffect(() => {
      getInfo();
    }, []);

    return(
          <CardCharacters
            swData1 = {`Name: ${characters.name}`}  
            swData2 = {`Birth Year: ${characters.birth_year}`} 
            swData3 = {`Gender: ${characters.gender}`} 
            swData4 = {`HomeWorld: ${info.name}`}
            number = {`characters/${index}`}
          />
    );
};

export const SwInfoPlanet = ({ route }) => {
    const {planets, index}  = route.params;
    // //HomeWorld
    // const [info, setInfo] = useState({});

    // const getInfo = async () => {
    //   const infoResponse = await LinkedInfo(planets.residents);
      
    //   setInfo(infoResponse);
    // };

    // useEffect(() => {
    //   getInfo();
    // }, []);

    return (
      <CardPlanets
      swData1 = {`Planet: ${planets.name}`} 
      swData2 = {`Climate: ${planets.climate}`} 
      swData3 = {`Gravity: ${planets.gravity}`} 
      swData4 = {`Population: ${planets.population}`}
      number = {`planets/${index+1}`}
      />
    );
};

export const SwInfoMovie = ({ route }) => {
  const {movies, index} = route.params;

  return(
    <CardMovies
    swData1 = {`Episode ${movies.episode_id}: ${movies.title}`}  
    swData2= {`Date Created: ${movies.release_date}`} 
    swData3 = {`Director: ${movies.director}`} 
    swData4 = {`Producer(s): ${movies.producer}`}
    number = {`films/${index+1}`}
    />
  );
};

export const SwInfoStarship = ({ route }) => {
const {starships, index} = route.params;

return(
  <CardStarships
  swData1 = {`Starships: ${starships.name}`}  
  swData2= {`Model: ${starships.model}`} 
  swData3 = {`Manufacturer: ${starships.manufacturer}`} 
  swData4 = {`Class: ${starships.starship_class}`}
  number = {`starships/${index+1}`}
  />
);
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });