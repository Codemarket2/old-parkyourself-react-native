import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AppDrawer from './AppDrawer';
import DashboardStack from './DashboardStack';
const drawer = createDrawerNavigator();

export default function DashboardDrawer() {
  return (
    <drawer.Navigator drawerContent={() => <AppDrawer />}>
      <drawer.Screen name='DashboardStack' component={DashboardStack} />
    </drawer.Navigator>
  );
}
