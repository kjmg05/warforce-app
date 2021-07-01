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
<<<<<<< HEAD
        <ScrollView>
=======
        <ScrollView  style={styles.container}>
>>>>>>> 828fa4923183ca509b577b8ee0cd87889dbee52f
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