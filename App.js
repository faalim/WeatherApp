import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import SearchComponent from './Components/SearchComponent';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WeatherForCity from './Components/WeatherForCity';

export default function App() {
  const Stack = createNativeStackNavigator();
  
  return (
    <NavigationContainer> 
      <Stack.Navigator initialRouteName = 'Search'> 
      <Stack.Screen
      name = 'Search'
      component = {SearchComponent}
    >      
      </Stack.Screen>
    
      <Stack.Screen name= "Weather" component={WeatherForCity}/>
      </Stack.Navigator> 
    </NavigationContainer>
    


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
});
