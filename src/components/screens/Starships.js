import React, {useEffect, useState} from "react";
import { StyleSheet, ScrollView } from "react-native";
import { linkedInfo, fetchStarWars } from "../../api";
import { StarshipsCardList } from "../CardList";

const Starships = ({navigation}) => {
    const [starships, setStarships] = useState({});

    const getStarships = async () => {
        const response = await fetchStarWars('starships/');
        
        setStarships(response);
    };

    useEffect(() => {
        getStarships();
      }, []);

    return (
        <ScrollView>
            <StarshipsCardList starships = {starships} navigation={navigation}/>
        </ScrollView>
    );  
};

const styles = StyleSheet.create({});

export default Starships;