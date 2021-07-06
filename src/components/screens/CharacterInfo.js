import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import theme from "../../theme";
import StarWarsImage from "../StarWarsImage";

const CharacterInfo = ({
  swData1,
  swData2,
  swData3,
  swData4,
  swData5,
  swData6,
  swData7,
  swData8,
  swData9,
  number,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textCharacters}>{swData1}</Text>
      <Text style={styles.textCharacters}>{swData2}</Text>
      <Text style={styles.textCharacters}>{swData3}</Text>
      <Text style={styles.textCharacters}>{swData4}</Text>
      <Text style={styles.textCharacters}>{swData5}</Text>
      <Text style={styles.textCharacters}>{swData6}</Text>
      <Text style={styles.textCharacters}>{swData7}</Text>
      <Text style={styles.textCharacters}>{swData8}</Text>
      <Text style={styles.textCharacters}>{swData9}</Text>
      <StarWarsImage
        number={number}
        width={width * 0.35}
        height={width * 0.35}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textCharacters: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: theme.colors.red,
  },
});

export default CharacterInfo;
