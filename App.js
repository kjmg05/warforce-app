import React from 'react';
import { SafeAreaView, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/components/screens/Home';
import Planets from './src/components/screens/Planets';
import Starships from './src/components/screens/Starships';
import Characters from './src/components/screens/Characters';
import Movies from './src/components/screens/Movies';

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