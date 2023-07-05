import { StatusBar } from "expo-status-bar";
import { StyleSheet, Button, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./src/Screens/HomeScreen";
import { DetailScreen } from "./src/Screens/DetailScreen";

const Stack = createStackNavigator();
const Main = createStackNavigator();
const Detail = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />

      <Stack.Navigator
        screenOptions={{
          // animationEnabled: false,
          // gestureEnabled: true,
          headerShown: false,
          animation: "none",
        }}
      >
        <Main.Screen
          name="Main"
          component={HomeScreen}
          options={{
            animationEnabled: false,
          }}
        />
        <Detail.Screen
          name="Detail"
          component={DetailScreen}
          options={{
            animationEnabled: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
