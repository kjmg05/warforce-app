import React from "react";
import { StyleSheet, View, TouchableOpacity, Text,ImageBackground,Dimensions,ScrollView} from "react-native";
import theme from "../../theme";
//#region Characters Pages

const {width, height} = Dimensions.get("screen");
export const PagesCharacters = ({ navigation }) => {
    const page = 'people/';
    const charNumber = 0;
    
    return(
        <ImageBackground
          source={require("../../../assets/image/darth.jpg")}
          resizeMode="contain"
          style={styles.bgImage}
        ><ScrollView>
        <View style={styles.container}>
            <Text style={styles.TextTitle} >Select a page to show Characters</Text>
            <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate("Characters", {page: page, charNumber: 0})}}>
                <Text style={styles.Text}>Characters Page One </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate("Characters", {page: `${page}?page=2`, charNumber: 10})}}>
                <Text style={styles.Text}>Characters Page Two</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate("Characters", {page: `${page}?page=3`, charNumber: charNumber+20})}}>
                <Text style={styles.Text}>Characters Page Three</Text>
            </TouchableOpacity>
            <TouchableOpacity  style={styles.button}onPress={() => {navigation.navigate("Characters", {page: `${page}?page=4`, charNumber: charNumber+30})}}>
                <Text style={styles.Text}>Characters Page Four</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate("Characters", {page: `${page}?page=5`, charNumber: charNumber+40})}}>
                <Text style={styles.Text}>Characters Page Five</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}onPress={() => {navigation.navigate("Characters", {page: `${page}?page=6`, charNumber: charNumber+50})}}>
                <Text style={styles.Text}>Characters Page Six</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}onPress={() => {navigation.navigate("Characters", {page: `${page}?page=7`, charNumber: charNumber+60})}}>
                <Text style={styles.Text}>Characters Page Seven</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}onPress={() => {navigation.navigate("Characters", {page: `${page}?page=8`, charNumber: charNumber+70})}}>
                <Text style={styles.Text}>Characters Page Eight</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}onPress={() => {navigation.navigate("Characters", {page: `${page}?page=9`, charNumber: charNumber+80})}}>
                <Text style={styles.Text}>Characters Page Nine</Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
        </ImageBackground>
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
            <TouchableOpacity  style={styles.button} onPress={() => {navigation.navigate("Planets", {page: page, planetNumber: 0})}}>
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
        justifyContent:"center",
        alignItems:"center",
   
        
    },
    Text: {
        textAlign:"center",    
        color: theme.colors.red,
        fontSize: 20
        
    },
    TextTitle: {
        textAlign:"center",    
        color: theme.colors.bgColor,
        fontSize: 20,
        fontWeight:"bold",    
        marginTop:20
    },
    bgImage: {
        flex:1,
        resizeMode: "cover",
        justifyContent:"center",
        alignItems:"center",
        width: width,
        height: height,
        position:"absolute",
        marginTop:-12,
      },
      button: {
        width: 250,
        height: 80,
        backgroundColor: theme.colors.opacityblack,
        borderRadius: 25,
        borderWidth: 5,
        borderColor: theme.colors.red,
        shadowColor: theme.colors.shadow,
        shadowOffset: {
            width: 3,
            height: 3},        

        shadowOpacity: 0.77,
        shadowRadius: 5,
        marginTop: 20,
        justifyContent:"center",
        alignItems:"center",
      },
    });
          