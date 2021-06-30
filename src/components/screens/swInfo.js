import React, {useEffect, useState} from "react";
import { StyleSheet, Text, View, TouchableOpacity} from "react-native";
import { Title } from "react-native-paper";
import Card from "../Card";

const SwInfo = ({ route }) => {
    const {characters}  = route.params;
    return(
        <View style={styles.container}>
            <Title>{characters.name}</Title>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });

export default SwInfo;