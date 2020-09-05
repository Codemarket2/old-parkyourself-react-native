import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MenuButton from './MenuButton';
import Filter from './Filter';
import HeaderLogo from './HeaderLogo';
import Dashboard from '../screens/Dashboard';

const Stack = createStackNavigator();

export default function DashboardStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: () => <HeaderLogo />,
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0,
        },
      }}
    >
      <Stack.Screen
        name='Dashboard Screen'
        component={Dashboard}
        options={({ navigation }) => ({
          //   headerStyle: {
          //     // paddingHorizontal: 10,
          //   },
          headerLeft: () => <MenuButton navigation={navigation} />,
          headerTitle: () => <HeaderLogo />,
          headerRight: () => <Filter />,
          headerTitleAlign: 'center',
        })}
      />
    </Stack.Navigator>
  );
}
