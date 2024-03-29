import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HeaderLogo from '../HeaderLogo';
import MyListings from '../../screens/SpaceOwner/MyListings';
import MoreDetails from '../../screens/MoreDetails';

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
          title:"",
          headerTitle: () => <HeaderLogo />,
          headerTitleAlign: 'center',
        })}
      />
      <Stack.Screen
        name="DetailsScreen"
        component={MoreDetails}
        options={({navigation}) => ({
          headerTitle: () => <HeaderLogo />,
          headerTitleAlign: 'center',
        })}
      />
    </Stack.Navigator>
  );
};

export default MyListingsStack;
