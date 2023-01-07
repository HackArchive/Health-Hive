import {useContext,useEffect} from 'react';
import { StyleSheet,View,FlatList, Image} from 'react-native';
import { Searchbar,Text,IconButton } from 'react-native-paper';
import { red400,white } from 'react-native-paper/lib/commonjs/styles/themes/v2/colors';
import Product from '../components/Product';
import { Context } from '../../App';
import { account,databases } from "../appwrite/appwriteConfig"






export default function ProductInfo({navigation}) {

    const {searchQuery,setSearchQuery,setUserDetails,products,setProducts} = useContext(Context);
  
    const onChangeSearch = (query) => setSearchQuery(query);

    const renderProduct = ({item})=>(
            <Product 
                id={item["$id"]}
                title={item["name"]}
                subTitle={item["ingredients"]}
                image={item["image"]}
                level={item["level"]}
                navigation={navigation}
            />
    )
    
    const getData = async ()=>{
        try{
            const resp = await account.get();
            setUserDetails(resp);
    
        } catch(error){
            console.log(error);
        }
    
        try{
            const resp = await databases.listDocuments("63b716cf01cb58dce0fb","63b7170360ba29961166");
            setProducts(resp.documents);
        } catch(error){
            console.log("error in db",error);
        }
    }

    useEffect(()=>{
        
        getData();
     
    },[])

    return(
    <>
        <View style={styles.staticDesign}>
            {/* <Text style={styles.Title}>
                CAN EAT
            </Text>
            <Text style={{fontSize:14,color:"#FFFF00",marginTop:10}}>
                know before you eat
            </Text> */}
            <Image style={{width:250,height:250}} source={require("../../assets/icon.png")} />
        </View>
        <View style={styles.searchBarRoot}>
            <Searchbar
            placeholder="Search"
            style={styles.searchBar}
            onChangeText={onChangeSearch}
            value={searchQuery}
            />
            <View style={styles.ScanButton}>
                <IconButton 
                    icon="barcode-scan"
                    iconColor={white}
                    size={25}
                    onPress={()=>navigation.navigate("Scanner")}
                    />
            </View>
        </View>
        <FlatList
            style={{marginTop:20}}
            data={products}
            renderItem={renderProduct}
            keyExtractor={(product)=>product.id}
        />
        
    </>
    )

}



const styles = StyleSheet.create({
    staticDesign:{
        backgroundColor:red400,
        width:"100%",
        height:200,
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30,
        justifyContent:"center",
        alignItems:"center"
    },
    Title: {
        fontSize:50,
        color:white,
        fontWeight:"bold"
    },  
    searchBarRoot:{
        width:'100%',
        alignItems:'center',
        marginTop:50,
        flexDirection:'row',
        justifyContent:'space-evenly'
    },
    searchBar: {
        width:'75%',
        borderRadius:50

    },
    ScanButton:{
        backgroundColor:red400,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:50,

    }
})