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
            {/* <TouchableOpacity onPress={() => {fetchStarWars(characters.next)}} style={styles.button1}> 
                <Text style={styles.Text}>Next</Text>
            </TouchableOpacity> */}
        </SafeAreaView>
        
    );  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(15,15, 15,1)",
  },
  button1: {
    

    width: 150,
     height: 50,
     backgroundColor: "rgba(164,164,164,0.5)",
     borderRadius: 25,
     borderWidth: 5,
     borderColor: "rgba(248,221,43,1)",
     shadowColor: "rgba(218,224,12,1)",
     shadowOffset: {
         width: 3,
         height: 3},        
     elevation: 15,
     shadowOpacity: 0.77,
     shadowRadius: 5,
     marginTop: 20,
  justifyContent:"center",
  alignContent:"center"
     
   },
   Text: {
    textAlign:"center",    
    color: "rgba(248,221,43,1)",
    fontSize: 38
  },

});

export default Characters;