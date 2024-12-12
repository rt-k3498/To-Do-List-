import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import List from './app/screens/list';

export default function App() {

 const drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <drawer.Navigator initialRouteName='To Do List' screenOptions={{
      drawerActiveTintColor: 'white',
      drawerActiveBackgroundColor: '#003CB3',
      drawerLabelStyle: {
        color: 'white',
      },
    }}>
        <drawer.Screen name="To Do List" component={List} /> 
      </drawer.Navigator>
    </NavigationContainer>    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
