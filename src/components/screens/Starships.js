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
        <ScrollView  style={styles.container}>
            <StarshipsCardList starships = {starships} navigation={navigation}/>
        </ScrollView>
    );  
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(15,15, 15,1)",
      },
});

export default Starships;