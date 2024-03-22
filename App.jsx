import React from 'react';
import HomePage from './src/homepage/HomePage'; 
import Qr from './src/qr/Qr'; 
import Menu from './src/menu/Menu'; 
import Subscription from './src/subscription/Subscription'; 
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HamburgerSvg from './assets/Hamburger.svg'
import QRSvg from './assets/QR.svg'
import HomeSvg from './assets/Home.svg'
import SubscriptionSvg from './assets/subscription.svg'

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator  screenOptions={{
       activeTintColor: '#66B600',
       inactiveTintColor: 'lightgray'
    }}>
        <Tab.Screen
          name="Home"
          component={HomePage}
          options={{
            tabBarIcon: ({ size }) => (
              <HomeSvg width={size} height={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Subscription"
          component={Subscription}
          options={{
            tabBarIcon: ({ size }) => (
              <SubscriptionSvg width={size} height={size}/>
            ),
          }}
        />
        <Tab.Screen
          name="Qr"
          component={Qr}
          options={{
            tabBarIcon: ({ size }) => (
              <QRSvg width={size} height={size}/>
            ),
          }}
        />
        <Tab.Screen
          name="Menu"
          component={Menu}
          options={{
            tabBarIcon: ({ size }) => (
              <HamburgerSvg width={size} height={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
    )
}
export default App