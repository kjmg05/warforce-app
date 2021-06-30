import React, {useEffect, useState} from "react";
import { StyleSheet, ScrollView } from "react-native";
import { fetchStarWars } from "../../api";
import { CharactersCardList } from "../CardList";
import { LinkedInfo } from "../../api";

const Characters = () => {
    //Characters
    const [characters, setCharacters] = useState({});

    const getCharacters = async () => {
        const response = await fetchStarWars('people/');
        
        setCharacters(response);
    };

    useEffect(() => {
        getCharacters();
    }, []);

    //HomeWorld
    const [info, setInfo] = useState({});

    const getInfo = async () => {
        const infoResponse = await LinkedInfo(`https://swapi.dev/api/planets/1/`);
        
        setInfo(infoResponse);
    };

    useEffect(() => {
        getInfo();
    }, []);

    return (
        <ScrollView>
            <CharactersCardList characters = {characters} info = {info}/>
        </ScrollView>
    );  
};

const styles = StyleSheet.create({});

export default Characters;