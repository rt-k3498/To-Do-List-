import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet} from 'react-native';
import List from './app/screens/list';
import Calender from './app/screens/calender';
import SignUp from './app/screens/signup';
import Login from './app/screens/login';


export default function App() {
  const drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <drawer.Navigator initialRouteName='Login' screenOptions={{
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
        <drawer.Screen name="Sign Up" component={SignUp} options={{
          drawerItemStyle: {display: 'none'},
          headerLeft: () => null,
          swipeEnabled: false 
        }} />
        <drawer.Screen name="Login" component={Login}  options={{
          drawerItemStyle: {display: 'none'},
          headerLeft: () => null,
          swipeEnabled: false,
        }} />
        <drawer.Screen name="To Do List" component={List} /> 
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

});
