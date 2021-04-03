import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
const Tab = createBottomTabNavigator();
//  Stacks
import HomeNavigator from './HomeNavigator';
function Main() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                keyboardHidesTabBar: true,
                showLabel: false,
                activeTintColor: '#45dae0'
            }}
        >   
            <Tab.Screen
                name="Home"
                component={HomeNavigator }
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon
                            name="home"
                            style={{ position : 'relative' }}
                            color={color}
                            size={30}    
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Cart"
                component={ HomeNavigator }
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon
                            name="shopping-cart"
                            style={{ position : 'relative' }}
                            color={color}
                            size={30}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Admin"
                component={ HomeNavigator }
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon
                            name="cog"
                            style={{ position :  'relative' }}
                            color={color}
                            size={30}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="User"
                component={ HomeNavigator }
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon
                            name="user"
                            style={{ position :  'relative' }}
                            color={color}
                            size={30}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default Main;
