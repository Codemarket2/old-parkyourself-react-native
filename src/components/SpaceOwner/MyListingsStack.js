import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const MyListingsStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: () => <HeaderLogo />,
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0,
        },
      }}>
      <Stack.Screen
        name="MyListingsScreen"
        component={MyListings}
        options={({navigation}) => ({
          headerTitle: () => <HeaderLogo />,
        })}
      />
    </Stack.Navigator>
  );
};

export default MyListingsStack;
