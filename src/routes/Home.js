import { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import ProductInfo from "./ProductInfo";
import ProductDetail from "./ProductDetail";
// import Scanner from "./ScanBarcode";
import Contribute from "./Contribute";

const Stack = createStackNavigator();

export default function Home({ navigation }) {
  console.log(navigation);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={ProductInfo}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
        {/* <Stack.Screen name="Scanner" component={Scanner}/> */}
        <Stack.Screen
          name="Contribute"
          component={Contribute}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
