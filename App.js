import { useState, createContext } from "react";
import { StatusBar } from "expo-status-bar";
import { BottomNavigation, Text, Provider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Contribute from "./src/routes/Contribute";
import Home from "./src/routes/Home";
import Analyse from "./src/routes/Analyse";
import ProductDetail from "./src/routes/ProductDetail";
import LoginScreen from "./src/routes/LoginScreen";
import RegisterScreen from "./src/routes/RegisterScreen";
import Profile from "./src/routes/Profile";

const Context = createContext();
const AuthStack = createStackNavigator();

export default function App() {
  const [index, setIndex] = useState(0);
  const [barcode, setBarcode] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userDetails, setUserDetails] = useState(null);
  const [products, setProducts] = useState([]);

  const contextValue = {
    barcode,
    searchQuery,
    isLoggedIn,
    userDetails,
    products,

    setProducts,
    setBarcode,
    setSearchQuery,
    setIsLoggedIn,
    setUserDetails,
  };

  const [routes] = useState([
    {
      key: "home",
      title: "Home",
      focusedIcon: "home",
      unfocusedIcon: "home-outline",
    },
    { key: "contribute", title: "Contribute", focusedIcon: "plus" },
    {
      key: "analyse",
      title: "Analyse",
      focusedIcon: "food",
      unfocusedIcon: "food-outline",
    },
    {
      key: "profile",
      title: "Profile",
      focusedIcon: "account",
      unfocusedIcon: "account",
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: Home,
    contribute: Contribute,
    analyse: Analyse,
    productDetail: ProductDetail,
    profile: Profile,
  });

  return (
    <Context.Provider value={contextValue}>
      {isLoggedIn ? (
        <SafeAreaProvider>
        <Provider>
          <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
          />
        </Provider>
      </SafeAreaProvider>
      ) : (
        <NavigationContainer>
        <AuthStack.Navigator screenOptions={{ headerShown: false }}>
          <AuthStack.Screen name="Login" component={LoginScreen} />
          <AuthStack.Screen name="Register" component={RegisterScreen} />
        </AuthStack.Navigator>
      </NavigationContainer>
      )}
    </Context.Provider>
  );
}

export { Context };
