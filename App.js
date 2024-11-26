import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NativeBaseProvider } from 'native-base'; // Agregar el provider de NativeBase

import Inicio from './src/screens/Inicio';
import Eventos from './src/screens/Eventos';
import Ganadores from './src/screens/Ganadores';
import Perfil from './src/screens/Perfil';
import Login from './src/screens/Login'; // Importar Login
import ProfileScreen from './src/screens/ProfileScreen';
import ConfigScreen from './src/screens/ConfigScreen';
import Competencias from './src/screens/Competencias';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Componente de las pestañas
function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Inicio') iconName = focused ? 'home' : 'home-outline';
          else if (route.name === 'Eventos') iconName = focused ? 'calendar' : 'calendar-outline';
          else if (route.name === 'Ganadores') iconName = focused ? 'trophy' : 'trophy-outline';
          else if (route.name === 'Competencias') iconName = focused ? 'person' : 'person-outline';
          else if (route.name === 'profile') iconName = focused ? 'ProfileScreen' : 'person-outline';
          else if (route.name === 'Config') iconName = focused ? 'ConfigScreen' : 'config-outline';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Inicio" component={Inicio} />
      <Tab.Screen name="Eventos" component={Eventos} />
      <Tab.Screen name="Ganadores" component={Ganadores} />
      <Tab.Screen name="Competencias" component={Competencias} />
      <Tab.Screen name="profile" component={ProfileScreen} />
      <Tab.Screen name="Config" component={ConfigScreen} />
    </Tab.Navigator>
  );
}

// Componente principal de la app
export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Tabs" component={Tabs} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
