import { useState,useRef,useContext } from "react";
import { Text, Button, TextInput,  } from "react-native-paper";
import { View,StyleSheet,Animated,Alert } from "react-native";
import { grey200, red400,white } from 'react-native-paper/lib/commonjs/styles/themes/v2/colors';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Context } from "../../App";

// handleSubmit = () => {
//     const value = this.; // use that ref to get the form value
//     console.log('value: ', value);
//   }

export default function Contribute(){
    const [name, setName] = useState("");
    const [contains, setContainsame] = useState("");
    const {barcode, setBarcode} = useContext(Context);
    const [price, setPrice] = useState("");


    const offset = useRef(new Animated.Value(0)).current;

    return(
        <SafeAreaProvider>

            <View style={styles.topgraphic}>
                    <Text style={styles.txtheader}>
                        Contribute
                    </Text>
                    <Text style={styles.txtsubheader}>
                        Win awesome NFTs and rewards!
                    </Text>
            </View>
                <View style={styles.form}>
                    <TextInput style={styles.txtinput} 
                        onChangeText = {newText => setName(newText)}
                        placeholder="Name Of Product"
                        placeholderTextColor="#D3D3D3">
                    </TextInput>

                    <TextInput style={styles.txtinput} 
                        onChangeText = {newText => setContainsame(newText)}
                        placeholder="Ingredient1, Ingredient2, Ingredient3"
                        placeholderTextColor="#D3D3D3">
                    </TextInput>

                    <TextInput style={styles.txtinput} 
                        onChangeText = {newText => setBarcode(newText)}
                        placeholder="Barcode"
                        value={barcode}
                        placeholderTextColor="#D3D3D3">
                    </TextInput>
                    
                    <TextInput style={styles.txtinput} 
                        onChangeText = {newText => setPrice(newText)}
                        placeholder="Price(optional)"
                        placeholderTextColor="#D3D3D3">
                    </TextInput>

                    <TextInput style={styles.txtinput} 
                        onChangeText = {newText => setPrice(newText)}
                        placeholder="Image Url"
                        placeholderTextColor="#D3D3D3">
                    </TextInput>


                    <Button 
                        style={styles.btn} 
                        onPress={()=>Alert.alert("Success", "Thanks for your contribution!")}
                    >
                        <Text style={styles.btnText}>
                            Submit
                        </Text>
                    </Button>
                </View>   
        
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    topgraphic:{
        backgroundColor:red400,
        height:180,
        width:"100%",
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30,
        justifyContent:"center"
    },
    txtheader:{
        fontWeight:"bold",
        color:"white",
        fontSize:40,
        textAlign:"center",
    },
    txtsubheader:{
        fontWeight:"bold",
        color:"white",
        fontSize:20,
        textAlign:"center",

    },
    btn:{
        width:100,
        height:40,
        marginTop:20,
        backgroundColor:red400,
        alignSelf: "flex-end"
    },
    btnText:{

        color:"white",
        fontSize:20,
        fontWeight:"bold",
        textAlign:"left"
        
    },
    txtinput:{
        marginVertical: 10,
        backgroundColor: grey200,
        borderRadius:5,

    },
    form:{
        top:20,
        marginHorizontal:40
    }
})