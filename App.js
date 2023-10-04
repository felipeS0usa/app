import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useColorScheme } from 'react-native';
import { ThemeProvider } from '@rneui/themed';
import theme from './src/styles/theme';

import Alert from './src/pages/alert';
import Home from './src/pages/home';
import Apiary from './src/pages/apiary';
import Beehive from './src/pages/beehive';
import Management from './src/pages/management';
import NewUserForm from './src/pages/user/NewUserForm';

const Tab = createBottomTabNavigator();

const App = () => {
    const deviceTheme = useColorScheme();
    const themeSchema = theme.light;

    return (
        <ThemeProvider theme={{ themeSchema }}>
            <NavigationContainer>
                <Tab.Navigator
                    initialRouteName="Home"
                    screenOptions={{
                        tabBarActiveTintColor: '#e91e63',
                    }}
                >
                    <Tab.Screen
                        name="Apiary"
                        component={Apiary}
                        options={{
                            tabBarLabel: 'Apiary',
                            tabBarIcon: ({ color, size }) => (
                                <MaterialCommunityIcons name="beehive-outline" color={color} size={size} />
                            ),
                        }}
                    />
                    <Tab.Screen
                        name="Beehive"
                        component={Beehive}
                        options={{
                            tabBarLabel: 'Beehive',
                            tabBarIcon: ({ color, size }) => (
                                <MaterialCommunityIcons name="bee-flower" color={color} size={size} />
                            ),
                        }}
                    />

                    <Tab.Screen
                        name="Home"
                        component={Home}
                        options={{
                            tabBarLabel: 'Home',
                            tabBarIcon: ({ color, size }) => (
                                <MaterialCommunityIcons name="home" color={color} size={size} />
                            ),
                        }}
                    />

                    <Tab.Screen
                        name="Management"
                        component={Management}
                        options={{
                            tabBarLabel: 'Management',
                            tabBarIcon: ({ color, size }) => (
                                <MaterialCommunityIcons name="receipt" color={color} size={size} />
                            ),
                        }}
                    />

                    <Tab.Screen
                        name="Alert"
                        component={Alert}
                        options={{
                            tabBarLabel: 'Alert',
                            tabBarIcon: ({ color, size }) => (
                                <MaterialCommunityIcons name="alert-circle-outline" color={color} size={size} />
                            ),
                        }}
                    />


                    <Tab.Screen
                        name="Testes"
                        component={NewUserForm}
                        options={{
                            tabBarLabel: 'Testes',
                            tabBarIcon: ({ color, size }) => (
                                <MaterialCommunityIcons name="alert-circle-outline" color={color} size={size} />
                            ),
                        }}
                    />
                </Tab.Navigator>
            </NavigationContainer>
        </ThemeProvider>
    );
}

export default App;