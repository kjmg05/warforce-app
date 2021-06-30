import React, {useEffect, useState} from "react";
import { StyleSheet, SafeAreaView, Text, TouchableOpacity, Modal} from "react-native";
import { fetchStarWars } from "../../api";
import { CharactersCardList } from "../CardList";
import { LinkedInfo } from "../../api";

const Characters = ({navigation}) => {
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
        <SafeAreaView>
            <CharactersCardList characters = {characters} info = {info} navigation={navigation}/>
        </SafeAreaView>
    );  
};

const styles = StyleSheet.create({});

export default Characters;