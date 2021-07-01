import React from 'react';
import { SafeAreaView, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/components/screens/Home';
import Planets from './src/components/screens/Planets';
import Starships from './src/components/screens/Starships';
import Characters from './src/components/screens/Characters';
import Movies from './src/components/screens/Movies';
import { SwInfoCharacter } from './src/components/screens/swInfo';
import { SwInfoPlanet } from './src/components/screens/swInfo';
import { SwInfoMovie } from './src/components/screens/swInfo';
import { SwInfoStarship } from './src/components/screens/swInfo';

const Stack = createStackNavigator ();

export default function App() {
  return (
        <SafeAreaView style={styles.container}>
            <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name = "Home" component={Home}/>
            <Stack.Screen name = "Characters" component={Characters}/>
            <Stack.Screen name = "Movies" component={Movies}/>
            <Stack.Screen name = "Planets" component={Planets}/>
            <Stack.Screen name = "Starships" component={Starships}/>
            <Stack.Screen name = "SwInfoCharacter" component={SwInfoCharacter}/>
            <Stack.Screen name = "SwInfoPlanet" component={SwInfoPlanet}/>
            <Stack.Screen name = "SwInfoMovie" component={SwInfoMovie}/>
            <Stack.Screen name = "SwInfoStarship" component={SwInfoStarship}/>
          </Stack.Navigator>
        </NavigationContainer>
        </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});