import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaPrincipal from './src/pages/TelaPrincipal';
import SolicitacaoInsumo from './src/pages/SolicitacaoInsumo';
import Details from './src/pages/Details';
import NewSolicitacao from './src/pages/NewSolicitacao';
import Login from './src/pages/Login';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen
          name='Login'
          component={Login}
          options={{
            headerTintColor: "#2196f3",
            headerShown: false
          }}
        />
        <Stack.Screen
          name='TelaPrincipal'
          component={TelaPrincipal}
          options={{
            headerTintColor: "#2196f3",
            headerShown: false
          }}
        />
        <Stack.Screen
          name='Solicitacao insumo'
          component={SolicitacaoInsumo}
          options={{
            headerTintColor: "#2196f3",
            headerShown: false
          }}
        />
        <Stack.Screen
          name='Details'
          component={Details}
          options={{
            headerTintColor: "#2196f3"
          }}
        />
        <Stack.Screen
          name='New Solicitacao'
          component={NewSolicitacao}
          options={{
            headerTintColor: "#2196f3"
          }}
        />
      </Stack.Navigator>
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
