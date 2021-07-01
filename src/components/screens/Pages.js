import React from "react";
import { StyleSheet, View, TouchableOpacity, Text} from "react-native";

//#region Characters Pages
export const PagesCharacters = ({ navigation }) => {
    const page = 'people/';
    const charNumber = 0;
    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={() => {navigation.navigate("Characters", {page: page, charNumber: 0})}}>
                <Text style={styles.Text}>Page 1</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {navigation.navigate("Characters", {page: `${page}?page=2`, charNumber: charNumber+10})}}>
                <Text style={styles.Text}>Page 2</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {navigation.navigate("Characters", {page: `${page}?page=3`, charNumber: charNumber+20})}}>
                <Text style={styles.Text}>Page 3</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {navigation.navigate("Characters", {page: `${page}?page=4`, charNumber: charNumber+30})}}>
                <Text style={styles.Text}>Page 4</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {navigation.navigate("Characters", {page: `${page}?page=5`, charNumber: charNumber+40})}}>
                <Text style={styles.Text}>Page 5</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {navigation.navigate("Characters", {page: `${page}?page=6`, charNumber: charNumber+50})}}>
                <Text style={styles.Text}>Page 6</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {navigation.navigate("Characters", {page: `${page}?page=7`, charNumber: charNumber+60})}}>
                <Text style={styles.Text}>Page 7</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {navigation.navigate("Characters", {page: `${page}?page=8`, charNumber: charNumber+70})}}>
                <Text style={styles.Text}>Page 8</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {navigation.navigate("Characters", {page: `${page}?page=9`, charNumber: charNumber+80})}}>
                <Text style={styles.Text}>Page 9</Text>
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