import React, {useEffect, useState} from "react";
import { StyleSheet, SafeAreaView} from "react-native";
import { fetchStarWars } from "../../api";
import { CharactersCardList } from "../CardList";

const Characters = ({navigation, route}) => {
    const [characters, setCharacters] = useState({});
    const {page, charNumber} = route.params;

    const getCharacters = async () => {
        const response = await fetchStarWars(page);
        
        setCharacters(response);
    };

    useEffect(() => {
        getCharacters();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <CharactersCardList characters = {characters} navigation={navigation} charNumber = {charNumber}/>
        </SafeAreaView>
        
    );  
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0F0F0F",
      },
});

export default Characters;