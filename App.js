// import { SafeAreaView, StyleSheet, Text, TextInput, TouchableNativeFeedback, View } from 'react-native';
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { NavigationContainer } from "@react-navigation/native";
// import LittleLemonHeader from './src/components/LittleLemonHeader';
// import LittleLemonFooter from './src/components/LittleLemonFooter';
// import LoginScreen from './src/components/LoginScreen';
// import WelcomeScreen from './src/components/WelcomeScreen';
// import MenuItems from './src/components/MenuItems';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Entypo } from '@expo/vector-icons'; //Home icon

// export default function App() {
//   const Stack = createNativeStackNavigator();
//   const Tab = createBottomTabNavigator();
//   return (
//     <NavigationContainer>
//       {/* <Stack.Navigator
//         initialRouteName='Welcome'
//         screenOptions={{
//           headerTintColor: 'black',
//           headerStyle: { backgroundColor: 'yellow' },
//           headerTitleAlign: 'center',
//         }}
//       >
//         <Stack.Screen name='Welcome' component={WelcomeScreen} />
//         <Stack.Screen name='Menu' component={MenuItems} />
//       </Stack.Navigator> */}
//       <Tab.Navigator
//         screenOptions={{
//           headerTintColor: 'black',
//           headerStyle: { backgroundColor: 'yellow' },
//           headerTitleStyle: { fontSize: 30 },
//           headerTitleAlign: 'center',
//           tabBarStyle: { backgroundColor: 'yellow' },
//           tabBarActiveTintColor: 'red',
//           tabBarInactiveTintColor: 'green',
//           tabBarLabelStyle: { fontSize: 15 },
//           tabBarHideOnKeyboard: true
//         }}
//       >
//         <Tab.Screen
//           name="Welcome"
//           component={WelcomeScreen}
//           options={{
//             tabBarLabel: 'Home',
//             tabBarIcon: ({ color, size }) => (
//               <Entypo name="home" size={30} color={color} />
//             ),
//             // tabBarBadge: 3,
//           }}
//         />
//         <Tab.Screen
//           name="Menu"
//           component={MenuItems}
//           options={{
//             tabBarLabel: 'Menu',
//             tabBarIcon: ({ color, size }) => (
//               <Entypo name="menu" size={30} color={color} />
//             ),
//             // tabBarBadge: 3,
//           }}
//         />
//       </Tab.Navigator>
//       {/* <SafeAreaView
//       style={{
//         flex: 1,
//         backgroundColor: '#495E57',
//       }}>
//       <LittleLemonHeader />

//       <LoginScreen />

//     </SafeAreaView>
//     <View style={{ backgroundColor: '#495E57' }}>
//       <LittleLemonFooter />
//     </View> */}
//     </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';
import WelcomeScreen from './src/components/WelcomeScreen';
import MenuItems from './src/components/MenuItems';
import LoginScreen from './src/components/LoginScreen'; // Import the screen you want to hide
import TestList from './src/components/TestList';

export default function App() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const MainTabNavigator = () => (
    <Tab.Navigator
      screenOptions={{
        headerTintColor: 'black',
        headerStyle: { backgroundColor: 'yellow' },
        headerTitleStyle: { fontSize: 30 },
        headerTitleAlign: 'center',
        tabBarStyle: { backgroundColor: 'yellow' },
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'green',
        tabBarLabelStyle: { fontSize: 15 },
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen
        name="Welcome"
        component={TestTabNavigator}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Menu"
        component={MenuItems}
        options={{
          tabBarLabel: 'Menu',
          tabBarIcon: ({ color, size }) => (
            <Entypo name="menu" size={30} color={color} />
          ),
          tabBarV: false,
        }}
      />
    </Tab.Navigator>
  );

  // const TestTabNavigator = () => (
  //   <Stack.Navigator
  //     screenOptions={{
  //       headerShown: false, // Hide header for nested screens
  //     }}
  //   >
  //     <Stack.Screen name="ABC" component={WelcomeScreen} />
  //     <Stack.Screen name="XYZ" component={LoginScreen} />
  //   </Stack.Navigator>
  // );
  const TestTabNavigator = () => {
    const navigation = useNavigation();

    useEffect(() => {
      const unsubscribe = navigation.addListener('focus', () => {
        // Reset the screen when it is focused
        // You can add your reset logic here
        navigation.navigate('ABC');
      });

      return unsubscribe;
    }, [navigation]);

    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="ABC" component={WelcomeScreen} />
        <Stack.Screen name="XYZ" component={LoginScreen} />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false, // Hide header for nested screens
        }}
      >
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="Main" component={MainTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
