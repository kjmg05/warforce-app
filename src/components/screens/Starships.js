import React, {useEffect, useState} from "react";
import { StyleSheet, ScrollView } from "react-native";
import { fetchStarWars } from "../../api";
import { StarshipsCardList } from "../CardList";

const Starships = ({navigation, route}) => {
    const [starships, setStarships] = useState({});
    const {page, starshipNumber} = route.params;

    const getStarships = async () => {
        const response = await fetchStarWars(page);
        
        setStarships(response);
    };

    useEffect(() => {
        getStarships();
      }, []);

    return (
        <ScrollView  style={styles.container}>
            <StarshipsCardList starships = {starships} navigation={navigation} starshipNumber={starshipNumber} />
        </ScrollView>
    );  
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0F0F0F",
      },
});

export default Starships;