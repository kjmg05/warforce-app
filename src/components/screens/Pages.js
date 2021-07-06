import React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ImageBackground,
  Dimensions,
  ScrollView,
  SafeAreaView,
} from "react-native";
import theme from "../../theme";

//#region Characters Pages
const { width, height } = Dimensions.get("screen");
export const PagesCharacters = ({ navigation }) => {
  const page = "people/";
  const charNumber = 0;

  return (
    <SafeAreaView style={styles.safeAreaC}>
      <ScrollView>
        <ImageBackground
          source={require("../../../assets/image/darth.jpg")}
          resizeMode="contain"
          style={styles.bgImage}
          backgroundColor={theme.colors.darth}
        />
        <View style={styles.bodyC}>
          <Text style={styles.TextTitle}>Select a page to show Characters</Text>
          <TouchableOpacity
            style={styles.buttonC}
            onPress={() => {
              navigation.navigate("Characters", {
                page: page,
                charNumber: 0,
              });
            }}
          >
            <Text style={styles.TextC}>Characters Page One </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonC}
            onPress={() => {
              navigation.navigate("Characters", {
                page: `${page}?page=2`,
                charNumber: 10,
              });
            }}
          >
            <Text style={styles.TextC}>Characters Page Two</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonC}
            onPress={() => {
              navigation.navigate("Characters", {
                page: `${page}?page=3`,
                charNumber: charNumber + 20,
              });
            }}
          >
            <Text style={styles.TextC}>Characters Page Three</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonC}
            onPress={() => {
              navigation.navigate("Characters", {
                page: `${page}?page=4`,
                charNumber: charNumber + 30,
              });
            }}
          >
            <Text style={styles.TextC}>Characters Page Four</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonC}
            onPress={() => {
              navigation.navigate("Characters", {
                page: `${page}?page=5`,
                charNumber: charNumber + 40,
              });
            }}
          >
            <Text style={styles.TextC}>Characters Page Five</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonC}
            onPress={() => {
              navigation.navigate("Characters", {
                page: `${page}?page=6`,
                charNumber: charNumber + 50,
              });
            }}
          >
            <Text style={styles.TextC}>Characters Page Six</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonC}
            onPress={() => {
              navigation.navigate("Characters", {
                page: `${page}?page=7`,
                charNumber: charNumber + 60,
              });
            }}
          >
            <Text style={styles.TextC}>Characters Page Seven</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonC}
            onPress={() => {
              navigation.navigate("Characters", {
                page: `${page}?page=8`,
                charNumber: charNumber + 70,
              });
            }}
          >
            <Text style={styles.TextC}>Characters Page Eight</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonC}
            onPress={() => {
              navigation.navigate("Characters", {
                page: `${page}?page=9`,
                charNumber: charNumber + 80,
              });
            }}
          >
            <Text style={styles.TextC}>Characters Page Nine</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
//#endregion

//#region Planets Pages
export const PagesPlanets = ({ navigation }) => {
  const page = "planets/";
  const planetNumber = 0;

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <ImageBackground
          source={require("../../../assets/image/leia.jpg")}
          resizeMode="contain"
          style={styles.bgImage}
          backgroundColor={theme.colors.orange}
        />
        <View style={styles.bodyP}>
          <Text style={styles.TextTitleP}>Select a page to show Planets</Text>
          <TouchableOpacity
            style={styles.buttonP}
            onPress={() => {
              navigation.navigate("Planets", { page: page, planetNumber: 0 });
            }}
          >
            <Text style={styles.TextP}>Planets Page One </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonP}
            onPress={() => {
              navigation.navigate("Planets", {
                page: `${page}?page=2`,
                planetNumber: planetNumber + 10,
              });
            }}
          >
            <Text style={styles.TextP}>Planets Page Two</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonP}
            onPress={() => {
              navigation.navigate("Planets", {
                page: `${page}?page=3`,
                planetNumber: planetNumber + 20,
              });
            }}
          >
            <Text style={styles.TextP}>Planets Page Three</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonP}
            onPress={() => {
              navigation.navigate("Planets", {
                page: `${page}?page=4`,
                planetNumber: planetNumber + 30,
              });
            }}
          >
            <Text style={styles.TextP}>Planets Page Four</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonP}
            onPress={() => {
              navigation.navigate("Planets", {
                page: `${page}?page=5`,
                planetNumber: planetNumber + 40,
              });
            }}
          >
            <Text style={styles.TextP}>Planets Page Five</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonP}
            onPress={() => {
              navigation.navigate("Planets", {
                page: `${page}?page=6`,
                planetNumber: planetNumber + 50,
              });
            }}
          >
            <Text style={styles.TextP}>Planets Page Six</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
//#endregion

//#region Starships Pages
export const PagesStarships = ({ navigation }) => {
  const page = "starships/";
  const starshipNumber = 0;

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <ImageBackground
          source={require("../../../assets/image/r2d2.jpg")}
          resizeMode="contain"
          style={styles.bgImage}
          backgroundColor={theme.colors.gray}
        />
        <View style={styles.bodyS}>
          <Text style={styles.TextTitleS}>Select a page to show Starships</Text>
          <TouchableOpacity
            style={styles.buttonS}
            onPress={() => {
              navigation.navigate("Starships", {
                page: page,
                starshipNumber: 0,
              });
            }}
          >
            <Text style={styles.TextS}>Starships Page One </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonS}
            onPress={() => {
              navigation.navigate("Starships", {
                page: `${page}?page=2`,
                starshipNumber: starshipNumber + 10,
              });
            }}
          >
            <Text style={styles.TextS}>Starships Page Two</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonS}
            onPress={() => {
              navigation.navigate("Starships", {
                page: `${page}?page=3`,
                starshipNumber: starshipNumber + 20,
              });
            }}
          >
            <Text style={styles.TextS}>Starships Page Three</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonS}
            onPress={() => {
              navigation.navigate("Starships", {
                page: `${page}?page=4`,
                starshipNumber: starshipNumber + 30,
              });
            }}
          >
            <Text style={styles.TextS}>Starships Page Four</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
//#endregion

const styles = StyleSheet.create({
  safeAreaC: {
    flex: 1,
    backgroundColor: theme.colors.darth,
  },
  safeArea: {
    flex: 1,
  },
  bodyC: {
    marginTop: 10,
    marginBottom: 50,
    justifyContent: "center",
    alignItems: "center",
    height: height,
  },
  bodyP: {
    marginTop: -100,
    justifyContent: "center",
    alignItems: "center",
    height: height,
  },
  bodyS: {
    marginTop: -100,
    justifyContent: "center",
    alignItems: "center",
    height: height,
  },
  TextC: {
    textAlign: "center",
    color: theme.colors.textDarth,
    fontSize: 20,
  },
  TextP: {
    textAlign: "center",
    color: theme.colors.lightYellow,
    fontSize: 20,
  },
  TextS: {
    textAlign: "center",
    color: theme.colors.gray,
    fontSize: 20,
  },
  TextTitle: {
    textAlign: "center",
    color: theme.colors.bgColor,
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 40,
  },
  TextTitleP: {
    textAlign: "center",
    color: theme.colors.lightYellow,
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 20,
  },
  TextTitleS: {
    textAlign: "center",
    color: theme.colors.blue,
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 20,
  },
  bgImage: {
    marginTop: -20,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    width: width,
    height: height,
    position: "absolute",
  },
  buttonC: {
    width: 250,
    height: 80,
    backgroundColor: theme.colors.opacityblack,
    borderRadius: 25,
    borderWidth: 5,
    borderColor: theme.colors.red,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.77,
    shadowRadius: 5,
    marginTop: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonP: {
    width: 250,
    height: 80,
    backgroundColor: theme.colors.opacity,
    borderRadius: 25,
    borderWidth: 5,
    borderColor: theme.colors.lightYellow,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.77,
    shadowRadius: 5,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonS: {
    width: 250,
    height: 80,
    backgroundColor: theme.colors.opacityblack,
    borderRadius: 25,
    borderWidth: 5,
    borderColor: theme.colors.r2d2,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.77,
    shadowRadius: 5,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
