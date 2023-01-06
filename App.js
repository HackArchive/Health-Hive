import { useState, createContext} from 'react';
import { StatusBar } from 'expo-status-bar';
import { BottomNavigation, Text, Provider} from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Contribute from './src/routes/Contribute';
import Home from './src/routes/Home';
import Analyse from './src/routes/Analyse';
import ProductDetail from './src/routes/ProductDetail';

const Context = createContext();

export default function App() {
  
  
  const [index, setIndex] = useState(0);
  const [barcode,setBarcode] = useState('');
  const [searchQuery,setSearchQuery] = useState('');

  const contextValue = {
    barcode,
    searchQuery,

    setBarcode,
    setSearchQuery
  }

  const [routes] = useState([
    { key: 'home', title: 'Home', focusedIcon: 'home', unfocusedIcon: 'home-outline'},
    { key: 'contribute', title: 'Contribute', focusedIcon: 'plus' },
    { key: 'analyse', title: 'Analyse', focusedIcon: 'food', unfocusedIcon: 'food-outline' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: Home,
    contribute: Contribute,
    analyse: Analyse,
    productDetail:ProductDetail
  });

  return (

    <Context.Provider value={contextValue}>
      <SafeAreaProvider>
        <Provider>
          <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
          />
        </Provider>
      </SafeAreaProvider>
    </Context.Provider>

  );
};

export {Context};