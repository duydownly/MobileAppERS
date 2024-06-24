// App.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/Views/Login.js';
import Home from './src/Views/Home/Home.js';
import AddEmployee from './src/Views/AddEmployee';
import PayrollCalculationMethod from './src/Views/PayrollCalculationMethod'; 

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="ERS" component={Login} />
          <Stack.Screen 
            name="Home" 
            component={Home} 
            options={{ headerTitle: '' }}  // This line removes the header title for the Home screen
          />
          <Stack.Screen name="AddEmployee" component={AddEmployee} />
          
          <Stack.Screen name="PayrollCalculationMethod" component={PayrollCalculationMethod}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}
