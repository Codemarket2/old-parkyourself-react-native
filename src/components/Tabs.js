import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DashboardDrawer from './DashboardDrawer';
import MyBookingsDrawer from './MyBookingsDrawer';
import FindParkingDrawer from './FindParkingDrawer';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import MyListingsStack from './SpaceOwner/MyListingsStack';
import ParkingOrdersStack from './SpaceOwner/ParkingOrdersStack';
import SpaceOwnerDrawer from './SpaceOwner/SpaceOwnerDrawer';

const Tab = createBottomTabNavigator();

function Tabs({isSpaceOwner}) {
  return isSpaceOwner ? (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'My Listings') {
            iconName = 'calendar-clock';
          } else if (route.name === 'Parking Orders') {
            iconName = 'car-hatchback';
          } else if (route.name === 'Dashboard') {
            iconName = 'view-dashboard-outline';
          }
          // You can return any component that you like here!
          return <Icon name={iconName} size={30} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#0b4094',
        inactiveTintColor: '#27aae1',
        showLabel: true,
        inactiveBackgroundColor: '#fff',
        activeBackgroundColor: '#fff',
        labelStyle: {
          marginBottom: 10,
          fontSize: 12,
        },
        style: {
          paddingTop: 10,
          height: 70,
          justifyContent: 'center',
          alignItems: 'center',
          elevation: 10,
        },
      }}
      swipeEnabled={true}
      animationEnabled={true}>
      <Tab.Screen name="My Listings" component={MyListingsStack} />
      <Tab.Screen name="Parking Orders" component={ParkingOrdersStack} />
      <Tab.Screen name="Dashboard" component={SpaceOwnerDrawer} />
    </Tab.Navigator>
  ) : (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'My Bookings') {
            iconName = 'calendar-clock';
          } else if (route.name === 'Find Parking') {
            iconName = 'car-hatchback';
          } else if (route.name === 'Dashboard') {
            iconName = 'view-dashboard-outline';
          }
          // You can return any component that you like here!
          return <Icon name={iconName} size={30} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#0b4094',
        inactiveTintColor: '#27aae1',
        showLabel: true,
        inactiveBackgroundColor: '#fff',
        activeBackgroundColor: '#fff',
        labelStyle: {
          marginBottom: 10,
          fontSize: 12,
        },
        style: {
          paddingTop: 10,
          height: 70,
          justifyContent: 'center',
          alignItems: 'center',
          elevation: 10,
        },
      }}
      swipeEnabled={true}
      animationEnabled={true}>
      <Tab.Screen name="My Bookings" component={MyBookingsDrawer} />
      <Tab.Screen name="Find Parking" component={FindParkingDrawer} />
      <Tab.Screen name="Dashboard" component={DashboardDrawer} />
    </Tab.Navigator>
  );
}

Tabs.propTypes = {
  isSpaceOwner: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isSpaceOwner: state.user.isSpaceOwner,
});

export default connect(mapStateToProps, null)(Tabs);
