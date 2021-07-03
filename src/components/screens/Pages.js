import React from "react";
import { StyleSheet, View, TouchableOpacity, Text} from "react-native";

//#region Characters Pages
export const PagesCharacters = ({ navigation }) => {
    const page = 'people/';
    const charNumber = 0;
    
    return(
        <View style={styles.container}>
            <Text>Select a page to show Characters</Text>
            <TouchableOpacity onPress={() => {navigation.navigate("Characters", {page: page, charNumber: 0})}}>
                <Text style={styles.Text}>Characters Page One </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {navigation.navigate("Characters", {page: `${page}?page=2`, charNumber: 10})}}>
                <Text style={styles.Text}>Characters Page Two</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {navigation.navigate("Characters", {page: `${page}?page=3`, charNumber: charNumber+20})}}>
                <Text style={styles.Text}>Characters Page Three</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {navigation.navigate("Characters", {page: `${page}?page=4`, charNumber: charNumber+30})}}>
                <Text style={styles.Text}>Characters Page Four</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {navigation.navigate("Characters", {page: `${page}?page=5`, charNumber: charNumber+40})}}>
                <Text style={styles.Text}>Characters Page Five</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {navigation.navigate("Characters", {page: `${page}?page=6`, charNumber: charNumber+50})}}>
                <Text style={styles.Text}>Characters Page Six</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {navigation.navigate("Characters", {page: `${page}?page=7`, charNumber: charNumber+60})}}>
                <Text style={styles.Text}>Characters Page Seven</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {navigation.navigate("Characters", {page: `${page}?page=8`, charNumber: charNumber+70})}}>
                <Text style={styles.Text}>Characters Page Eight</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {navigation.navigate("Characters", {page: `${page}?page=9`, charNumber: charNumber+80})}}>
                <Text style={styles.Text}>Characters Page Nine</Text>
            </TouchableOpacity>
        </View>
    );
};
//#endregion

//#region Planets Pages
export const PagesPlanets = ({ navigation }) => {
    const page = 'planets/';
    const planetNumber = 0;
    
    return(
        <View style={styles.container}>
            <Text>Select a page to show Planets</Text>
            <TouchableOpacity onPress={() => {navigation.navigate("Planets", {page: page, planetNumber: 0})}}>
                <Text style={styles.Text}>Planets Page One </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {navigation.navigate("Planets", {page: `${page}?page=2`, planetNumber: planetNumber+10})}}>
                <Text style={styles.Text}>Planets Page Two</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {navigation.navigate("Planets", {page: `${page}?page=3`, planetNumber: planetNumber+20})}}>
                <Text style={styles.Text}>Planets Page Three</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {navigation.navigate("Planets", {page: `${page}?page=4`, planetNumber: planetNumber+30})}}>
                <Text style={styles.Text}>Planets Page Four</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {navigation.navigate("Planets", {page: `${page}?page=5`, planetNumber: planetNumber+40})}}>
                <Text style={styles.Text}>Planets Page Five</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {navigation.navigate("Planets", {page: `${page}?page=6`, planetNumber: planetNumber+50})}}>
                <Text style={styles.Text}>Planets Page Six</Text>
            </TouchableOpacity>
        </View>
    );
};
//#endregion

//#region Starships Pages
export const PagesStarships = ({ navigation }) => {
    const page = 'starships/';
    const starshipNumber = 0;
    
    return(
        <View style={styles.container}>
            <Text>Select a page to show Starships</Text>
            <TouchableOpacity onPress={() => {navigation.navigate("Starships", {page: page, starshipNumber: 0})}}>
                <Text style={styles.Text}>Starships Page One </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {navigation.navigate("Starships", {page: `${page}?page=2`, starshipNumber: starshipNumber+10})}}>
                <Text style={styles.Text}>Starships Page Two</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {navigation.navigate("Starships", {page: `${page}?page=3`, starshipNumber: starshipNumber+20})}}>
                <Text style={styles.Text}>Starships Page Three</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {navigation.navigate("Starships", {page: `${page}?page=4`, starshipNumber: starshipNumber+30})}}>
                <Text style={styles.Text}>Starships Page Four</Text>
            </TouchableOpacity>
        </View>
    );
};
//#endregion

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    Text: {
        textAlign:"center",    
        color: "rgba(248,221,43,1)",
        fontSize: 38
    },
});