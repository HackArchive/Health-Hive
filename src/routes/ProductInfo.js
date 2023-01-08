import { useContext, useEffect, useState } from "react";
import { StyleSheet, View, FlatList, Image } from "react-native";
import { Searchbar, Text, IconButton,Button } from "react-native-paper";
import {
  red400,
  white,
} from "react-native-paper/lib/commonjs/styles/themes/v2/colors";
import Product from "../components/Product";
import { Context } from "../../App";
import { account, databases,DB_ID,PRODUCT_COLLECTION_ID } from "../appwrite/appwriteConfig";
import InAppLogo from "../assets/images/misc/inAppLogo.svg";

export default function ProductInfo({ navigation }) {
  const { searchQuery, setSearchQuery, setUserDetails, products, setProducts } =
    useContext(Context);

  const renderProduct = ({ item }) => (
    <Product
      id={item["$id"]}
      title={item["name"]}
      subTitle={item["ingredients"]}
      image={item["image"]}
      level={item["level"]}
      fat={item["fat"]}
      energy={item["energy"]}
      protein={item["protein"]}
      carbs={item["carbs"]}
      navigation={navigation}
    />
  );

  const getData = async () => {
    try {
      const resp = await account.get();
      setUserDetails(resp);
    } catch (error) {
      console.log(error);
    }

    try {
      const resp = await databases.listDocuments(
        DB_ID,
        PRODUCT_COLLECTION_ID
      );
      let searchedData = null;
      if (searchQuery.trim() !== "") {
        searchedData = resp.documents.filter((item) => {
          if (
            (item.barcode !== null && item.barcode.includes(searchQuery)) ||
            item.name.toLowerCase().includes(searchQuery.toLowerCase().trim())
          ) {
            return item;
          }
        });
      }
      if (searchedData === null) {
        setProducts(resp.documents);
      } else {
        setProducts(searchedData);
      }
    } catch (error) {
      console.log("error in db", error);
    }
  };

  useEffect(() => {
    getData();
  }, [searchQuery]);

  return (
    <>
      <View style={styles.staticDesign}>
        {/* <Text style={styles.Title}>
                CAN EAT
            </Text>
            <Text style={{fontSize:14,color:"#FFFF00",marginTop:10}}>
                know before you eat
            </Text> */}
        {/* <Image style={{width:250,height:250}} source={require("../../assets/icon.png")} /> */}
        <InAppLogo height={250} width={140} style={{ marginTop: 20 }} />
      </View>
      <View style={styles.searchBarRoot}>
        <Searchbar
          placeholder="Search"
          style={styles.searchBar}
          onChangeText={(query) => setSearchQuery(query)}
          value={searchQuery}
        />
        <View style={styles.ScanButton}>
          <IconButton
            icon="barcode-scan"
            iconColor={white}
            size={25}
            onPress={() => navigation.navigate("Scanner")}
          />
        </View>
      </View>
      {
        products.length==0
        ?
        <Button 
          onPress={()=>{
              navigation.navigate("Contribute")
          }} 
          icon="plus"
          mode="contained" 
          style={styles.button}>
              Contribute
        </Button>
      :
      <FlatList
        style={{ marginTop: 20 }}
        data={products}
        renderItem={renderProduct}
        keyExtractor={(product) => product.id}
      />
      }
    </>
  );
}

const styles = StyleSheet.create({
  staticDesign: {
    backgroundColor: red400,
    width: "100%",
    height: 200,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  Title: {
    fontSize: 50,
    color: white,
    fontWeight: "bold",
  },
  searchBarRoot: {
    width: "100%",
    alignItems: "center",
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  searchBar: {
    width: "75%",
    borderRadius: 50,
  },
  ScanButton: {
    backgroundColor: red400,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  button:{
    backgroundColor:red400,
    height:45,
    alignItems:"center",
    justifyContent:"center",
    marginTop:150,
    width:"60%",
    alignSelf:"center"
}
});
