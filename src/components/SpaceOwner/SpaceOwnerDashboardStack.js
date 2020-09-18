import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SpaceOwnerDashboard from '../../screens/SpaceOwner/SpaceOwnerDashboard';
import CreateSpaceOwnerProfile from '../../screens/SpaceOwner/CreateSpaceOwnerProfile';
import MyListings from '../../screens/SpaceOwner/MyListings';
import ParkingOrders from '../../screens/SpaceOwner/ParkingOrders';
import AddListingLocation from '../../screens/SpaceOwner/AddListingLocation';
import AddListingSpaceDetails from '../../screens/SpaceOwner/AddListingSpaceDetails';
import SpaceAvailable from '../../screens/SpaceOwner/SpaceAvailable';
import SetPricingType from '../../screens/SpaceOwner/SetPricingType';
import FlatBillingType from '../../screens/SpaceOwner/FlatBillingType';
import VariableBillingType from '../../screens/SpaceOwner/VariableBillingType';
import SaveSpaceDetails from '../../screens/SpaceOwner/SaveSpaceDetails';
import CustomSchedule from '../../screens/SpaceOwner/CustomSchedule';
import HeaderLogo from '../HeaderLogo';
import MenuButton from '../MenuButton';
import AddListing from '../../screens/SpaceOwner/AddListing';

const Stack = createStackNavigator();

const SpaceOwnerDashboardStack = () => {
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
        name="SpaceOwnerDashboard"
        component={SpaceOwnerDashboard}
        options={({navigation}) => ({
          headerTitle: () => <HeaderLogo />,
          headerLeft: () => <MenuButton navigation={navigation} />,
          headerTitleAlign: 'center',
        })}
      />
      <Stack.Screen
        name="CreateSpaceOwnerProfile"
        component={CreateSpaceOwnerProfile}
        options={({navigation}) => ({
          headerTitle: () => <HeaderLogo />,
        })}
      />
      <Stack.Screen
        name="MyListings"
        component={MyListings}
        options={({navigation}) => ({
          headerTitle: () => <HeaderLogo />,
        })}
      />
      <Stack.Screen
        name="ParkingOrders"
        component={ParkingOrders}
        options={({navigation}) => ({
          headerTitle: () => <HeaderLogo />,
        })}
      />
      <Stack.Screen
        name="AddListing"
        component={AddListing}
        // options={({navigation}) => ({
        //   headerTitle: () => <HeaderLogo />,
        // })}
      />
      {/* <Stack.Screen
        name="AddListingLocation"
        component={AddListingLocation}
        options={({navigation}) => ({
          headerTitle: () => <HeaderLogo />,
        })}
      />
      <Stack.Screen
        name="AddListingSpaceDetails"
        component={AddListingSpaceDetails}
        options={({navigation}) => ({
          headerTitle: () => <HeaderLogo />,
        })}
      />
      <Stack.Screen
        name="SpaceAvailable"
        component={SpaceAvailable}
        options={({navigation}) => ({
          headerTitle: () => <HeaderLogo />,
        })}
      />
      <Stack.Screen
        name="CustomSchedule"
        component={CustomSchedule}
        options={({navigation}) => ({
          headerTitle: () => <HeaderLogo />,
        })}
      />
      <Stack.Screen
        name="SetPricingType"
        component={SetPricingType}
        options={({navigation}) => ({
          headerTitle: () => <HeaderLogo />,
        })}
      />
      <Stack.Screen
        name="FlatBillingType"
        component={FlatBillingType}
        options={({navigation}) => ({
          headerTitle: () => <HeaderLogo />,
        })}
      />
      <Stack.Screen
        name="VariableBillingType"
        component={VariableBillingType}
        options={({navigation}) => ({
          headerTitle: () => <HeaderLogo />,
        })}
      />
      <Stack.Screen
        name="SaveSpaceDetails"
        component={SaveSpaceDetails}
        options={({navigation}) => ({
          headerTitle: () => <HeaderLogo />,
        })}
      /> */}
    </Stack.Navigator>
  );
};

export default SpaceOwnerDashboardStack;
