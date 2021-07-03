import React, {useEffect, useState} from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { ActivityIndicator } from "react-native-paper";
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
        <SafeAreaView  style={styles.container}>
            {starships.count ? 
            (<StarshipsCardList starships = {starships} navigation={navigation} starshipNumber={starshipNumber} />)
            : (<ActivityIndicator animating={true}/>)}
        </SafeAreaView>
    );  
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0F0F0F",
      },
});

export default Starships;