import { useState,useRef,useContext } from "react";
import { Text, Button, TextInput,  } from "react-native-paper";
import { View,StyleSheet,Animated,Alert,ScrollView } from "react-native";
import { grey200, red400,white } from 'react-native-paper/lib/commonjs/styles/themes/v2/colors';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Context } from "../../App";
import { databases } from "../appwrite/appwriteConfig";
import { v4 as uuid4 } from "uuid";



export default function Contribute(){
    const [name, setName] = useState("");
    const [ingredients, setIngredients] = useState("");
    const {barcode, setBarcode} = useContext(Context);
    const [image, setImage] = useState("");
    const [energy, setEnergy] = useState("");
    const [protein, setProtien] = useState("");
    const [fat, setFat] = useState("");
    const [carbs, setCarbs] = useState("");
    const [level, setLevel] = useState(1);


    const submit = async ()=>{

        const cleanIngredients = ingredients.split(",").map((text)=>{
        
            let newText = text.trim();
            if (newText!=="") {
                return newText
            }
        })

        try{
            const resp = await databases.createDocument("63b716cf01cb58dce0fb","63b7170360ba29961166",uuid4(),
                {
                    name,
                    barcode,
                    image,
                    energy,
                    protein,
                    carbs,
                    fat,
                    level,
                    ingredients:cleanIngredients
                }
            )
            setName("")
            setIngredients("")
            setBarcode("")
            setImage("")
            setEnergy("")
            setProtien("")
            setFat("")
            setCarbs("")
            setLevel("")

            Alert.alert("Success", "Thanks for your contribution!")
        } catch (error){
            console.log(error)
            Alert.alert("Faliure", "Something went wrong")
        }
    }   


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
            <View style={{height:400}}>
                <ScrollView style={styles.form}>
                    <TextInput style={styles.txtinput} 
                        value={name}
                        onChangeText = {newText => setName(newText)}
                        placeholder="Name Of Product"
                        placeholderTextColor="#D3D3D3">
                    </TextInput>

                    <TextInput style={styles.txtinput} 
                        value={ingredients}
                        onChangeText = {newText => setIngredients(newText)}
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
                        value={image}
                        onChangeText = {newText => setImage(newText)}
                        placeholder="Image Url"
                        placeholderTextColor="#D3D3D3">
                    </TextInput>

                    <TextInput style={styles.txtinput} 
                        value={energy}
                        onChangeText = {newText => setEnergy(newText)}
                        placeholder="Energy"
                        placeholderTextColor="#D3D3D3">
                    </TextInput>

                    <TextInput style={styles.txtinput} 
                        value={protein}
                        onChangeText = {newText => setProtien(newText)}
                        placeholder="Protien"
                        placeholderTextColor="#D3D3D3">
                    </TextInput>

                    <TextInput style={styles.txtinput} 
                        value={fat}
                        onChangeText = {newText => setFat(newText)}
                        placeholder="Fat"
                        placeholderTextColor="#D3D3D3">
                    </TextInput>

                    <TextInput style={styles.txtinput} 
                        value={carbs}
                        onChangeText = {newText => setCarbs(newText)}
                        placeholder="Carbs"
                        placeholderTextColor="#D3D3D3">
                    </TextInput>

                    <TextInput style={styles.txtinput} 
                        value={level}
                        onChangeText = {newText => setLevel(newText)}
                        placeholder="Level"
                        placeholderTextColor="#D3D3D3">
                    </TextInput>

                </ScrollView>   
            </View>
            <Button 
                style={styles.btn} 
                onPress={submit}
            >
                <Text style={styles.btnText}>
                    Submit
                </Text>
            </Button>

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
        marginTop:60,
        backgroundColor:red400,
        alignSelf: "center",
        alignItems:"center",
        justifyContent:"center"
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