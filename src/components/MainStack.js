import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignInStack from './SignInStack';
import SignUpStack from './SignUpStack';
import Tabs from './Tabs';

const Stack = createStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0,
        },
      }}
    >
      <Stack.Screen
        name='SignInStack'
        component={SignInStack}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='SignUpStack'
        component={SignUpStack}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Tabs'
        component={Tabs}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
