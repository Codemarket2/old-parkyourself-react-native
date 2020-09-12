import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ParkingOrders from '../../screens/SpaceOwner/ParkingOrders';

const Stack = createStackNavigator();

const ParkingOrdersStack = () => {
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
        name="ParkingOrders"
        component={ParkingOrders}
        options={({navigation}) => ({
          headerTitle: () => <HeaderLogo />,
        })}
      />
    </Stack.Navigator>
  );
};

export default ParkingOrdersStack;
