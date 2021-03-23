/**
 * Root Stack Screen
 */
import React, { Props } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from '../Splash/SplashScreen';
import Home, { props } from '../Home/Home';
import COLOR_CONST from '../../../app/theme/ColorConstants';
import AsteroidListScreen from '../AsteroidList/AsteroidList';
import AsteroidDataListScreen from '../AsteroidDataList/AsteroidDataList';
import AsteroidDetailScreen from '../AsteroidDetail/AsteroidDetail';


const RootStack = createStackNavigator();
// const NewStack = createStackNavigator();



const RootStackScreen = (props: props) => {
    return (
        <RootStack.Navigator>
            <RootStack.Screen options={{ headerShown: false }} name="SplashScreen" component={SplashScreen} />
            <RootStack.Screen
                options={({ route, navigation }) => ({
                    title: 'Home',
                    headerTitleAlign: 'center',
                    headerShown: false,
                    headerStyle: { backgroundColor: '#ffffff' },
                    headerTitleStyle: { textAlign: 'center', alignSelf: 'center' },
                    route: { route },
                    navigation: { navigation }
                })
                }
                name="Home"
                component={Home}
            />
            <RootStack.Screen
                options={({ route, navigation }) => ({
                    title: 'Asteroid Information ',
                    headerTitleAlign: 'center',
                    headerTintColor: '#ffffff',
                    headerStyle: { backgroundColor: "#6a8ead" },
                    headerTitleStyle: { textAlign: 'center', alignSelf: 'center' },
                    route: { route },
                    navigation: { navigation }
                })
                }
                name="AsteroidListScreen"
                component={AsteroidListScreen}
            />
            <RootStack.Screen
                options={({ route, navigation }) => ({
                    title: 'Asteroid Name List',
                    headerTitleAlign: 'center',
                    headerTintColor: 'white',
                    headerStyle: { backgroundColor: "#6a8ead" },
                    headerTitleStyle: { textAlign: 'center', alignSelf: 'center' },
                    route: { route },
                    // navigation: { navigation }
                })
                }
                name="AsteroidDataListScreen"
                component={AsteroidDataListScreen}
            />
            <RootStack.Screen
                options={({ route, navigation }) => ({
                    title: 'Asteroid Detail',
                    
                    headerTitleAlign: 'center',
                    headerTintColor: '#ffffff',
                    headerStyle: { backgroundColor: "#6a8ead" },
                    headerTitleStyle: { textAlign: 'center', alignSelf: 'center' },
                    route: { route },
                    navigation: { navigation }
                })
                }
                name="AsteroidDetailScreen"
                component={AsteroidDetailScreen}
            />
        </RootStack.Navigator>
    );
};

export default RootStackScreen;