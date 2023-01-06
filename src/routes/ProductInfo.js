import * as React from 'react';
import { StyleSheet,View,FlatList} from 'react-native';
import { Searchbar,Text,IconButton } from 'react-native-paper';
import { red400,white } from 'react-native-paper/lib/commonjs/styles/themes/v2/colors';
import Product from '../components/Product';




const product_data = [
    {
        id:1,
        title:"Kurkure",
        image:"https://imgs.search.brave.com/WJbLPD78B-TRMnQ6pQKxrErNoG1STfEMJ1oVDxzoA5o/rs:fit:900:900:1/g:ce/aHR0cHM6Ly9pNS53/YWxtYXJ0aW1hZ2Vz/LmNhL2ltYWdlcy9F/bmxhcmdlLzExOC84/NjMvNjAwMDIwMDEx/ODg2My5qcGc",
        subTitle:"Meth1",
        safteyLevel:1,
    },
    {
        id:2,
        title:"Masala Oats",
        image:"https://imgs.search.brave.com/jxsot4CnHQrapMThrTVt4K0Ivy6ueEnaBiSghxZogo0/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzcxUUpyUEdEY0RM/Ll9TTDE1MDBfLmpw/Zw",
        subTitle:"Meth",
        safteyLevel:2,
    },
    {
        id:3,
        title:"Maggi",
        image:"https://imgs.search.brave.com/ymgcJXqAAG9jkeH971524DXufXUtw6eEOYj2pIS1R5U/rs:fit:640:640:1/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc2FpbnNidXJ5/cy1ncm9jZXJpZXMu/Y28udWsvZ29sLzc5/NTI5MTAvMS82NDB4/NjQwLmpwZw",
        subTitle:"Meth",
        safteyLevel:3,
    }
]


export default function ProductInfo({navigation}) {

    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = (query) => setSearchQuery(query);

    const renderProduct = ({item})=>(
            <Product 
                id={item.id}
                title={item.title}
                subTitle={item.subTitle}
                image={item.image}
                level={item.safteyLevel}
                navigation={navigation}
            />
    )
    

    return(
    <>
        <View style={styles.staticDesign}>
            <Text style={styles.Title}>
                CAN EAT
            </Text>
            <Text style={{fontSize:14,color:"#FFFF00",marginTop:10}}>
                know before you eat
            </Text>
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
                    icon="camera"
                    iconColor={white}
                    size={25}
                    onPress={()=>navigation.navigate("Scanner")}
                    />
            </View>
        </View>
        <FlatList
            style={{marginTop:20}}
            data={product_data}
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