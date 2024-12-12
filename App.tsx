import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
import List from './app/screens/list';
import Calender from './app/screens/calender';


export default function App() {
  const [editState, setEditState] = useState(false)
  const drawer = createDrawerNavigator();

  function handleEdit(){
    setEditState(!editState)
  }

  return (
    <NavigationContainer>
      <drawer.Navigator initialRouteName='To Do List' screenOptions={{
      drawerActiveTintColor: 'white',
      drawerActiveBackgroundColor: '#003CB3',
      drawerInactiveBackgroundColor: 'lightgrey',
      drawerItemStyle:{
        marginVertical: 10,
      },
      drawerLabelStyle: {
        color: 'white',
      },
        }}>
        <drawer.Screen options={{
          headerRight: () => (
            <TouchableOpacity style={styles.editButton} onPress={()=>(handleEdit())}>
              <Text>Edit</Text>
            </TouchableOpacity>
          )
        }} name="To Do List" component={List} /> 
        <drawer.Screen name="Calender" component={Calender} /> 
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
  editButton:{
    marginRight: 20,

  },
});
