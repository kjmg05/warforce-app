import React from 'react';
import { SafeAreaView, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import Home from './src/components/screens/Home';
import Planets from './src/components/screens/Planets';
import Starships from './src/components/screens/Starships';
import Characters from './src/components/screens/Characters';
import Movies from './src/components/screens/Movies';
import { SwInfoCharacter } from './src/components/screens/swInfo';
import { SwInfoPlanet } from './src/components/screens/swInfo';
import { SwInfoMovie } from './src/components/screens/swInfo';
import { SwInfoStarship } from './src/components/screens/swInfo';
import { PagesCharacters, PagesPlanets, PagesStarships } from './src/components/screens/Pages';
import theme from "./src/theme";
const Stack = createStackNavigator ();

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style={styles.nav}></StatusBar>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name = "Home" component={Home} style={styles.text} options={{headerShown: false}}/>
          <Stack.Screen name = "Characters" component={Characters}options={{ headerStyle: {backgroundColor:theme.colors.bgColor, }, headerTintColor: theme.colors.red ,headerTitleStyle: { fontWeight: 'bold',},}}/>
          <Stack.Screen name = "Movies" component={Movies}options={{ headerStyle: {backgroundColor:theme.colors.white, }, headerTintColor: theme.colors.blue ,headerTitleStyle: { fontWeight: 'bold',},}}/>
          <Stack.Screen name = "Planets" component={Planets}options={{ headerStyle: {backgroundColor: theme.colors.white, }, headerTintColor: theme.colors.orange,headerTitleStyle: {fontWeight: 'bold',  },  }}/>
          <Stack.Screen name = "Starships" component={Starships} options={{title: "Starships", headerStyle: {backgroundColor: theme.colors.blue, }, headerTintColor: theme.colors.white,headerTitleStyle: {fontWeight: 'bold',  },  }}/>
          <Stack.Screen name = "SwInfoCharacter" component={SwInfoCharacter} options={{title: 'Character Information', headerStyle: {backgroundColor: theme.colors.bgColor, }, headerTintColor: theme.colors.red,headerTitleStyle: {fontWeight: 'bold',  },  }}/>

          <Stack.Screen name = "SwInfoPlanet" component={SwInfoPlanet} options={{title: "Planet Information", headerStyle: {backgroundColor: theme.colors.white, }, headerTintColor: theme.colors.orange,headerTitleStyle: {fontWeight: 'bold',  },  }}/>
          <Stack.Screen name = "SwInfoMovie" component={SwInfoMovie} options={{title: "Movie Information",headerStyle: {backgroundColor:theme.colors.white, }, headerTintColor: theme.colors.blue ,headerTitleStyle: { fontWeight: 'bold',},}}/>
          <Stack.Screen name = "SwInfoStarship" component={SwInfoStarship} options={{title: "Starship Information", headerStyle: {backgroundColor: theme.colors.blue, }, headerTintColor: theme.colors.white,headerTitleStyle: {fontWeight: 'bold',  }, }}/>
          <Stack.Screen name = "PagesCharacters" component={PagesCharacters} options={{title: 'Character Pages', headerStyle: {backgroundColor: theme.colors.bgColor, }, headerTintColor: theme.colors.red,headerTitleStyle: {fontWeight: 'bold',  },  }}/>

          <Stack.Screen name = "PagesPlanets" component={PagesPlanets} options={{title: "Planets", headerStyle: {backgroundColor: theme.colors.white, }, headerTintColor: theme.colors.orange,headerTitleStyle: {fontWeight: 'bold',  },  }}/>
          <Stack.Screen name = "PagesStarships" component={PagesStarships} options={{title: "Starships", headerStyle: {backgroundColor: theme.colors.blue, }, headerTintColor: theme.colors.white,headerTitleStyle: {fontWeight: 'bold',  },  }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  nav: {
   backgroundColor:theme.colors.bgColor,
  },
  text: {
    textAlign:"center",    
    color: theme.colors.lightYellow, 
    fontSize: 20,
  },
});