import { useEffect,useState,useContext } from "react";
import { BarCodeScanner } from 'expo-barcode-scanner';
import { View,Text,StyleSheet } from "react-native";
import { Button  } from "react-native-paper";
import { red400 } from "react-native-paper/lib/commonjs/styles/themes/v2/colors";
import { Context } from '../../App';

export default function Scanner({navigation,route}){

    const {setBarcode,setSearchQuery} = useContext(Context);

    const [hasPermission,setHasPermission] = useState(null);
    const [scanned,setScanned] = useState(false);
    const [text,setText] = useState("Not Yet Scanned");
    const askForCameraPermission = ()=>{
      (async ()=>{
        const {status} = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status=='granted');
      })()
    }
  
    useEffect(()=>{
      askForCameraPermission();
    },[]);
    
    const handleBarCodeScanned = ({type,data})=>{
        setScanned(true);
        setText(data);
    }
  
    if (hasPermission === null){
        return(
            <View style={{marginTop:100}}>
                <Text>
                    Requesting for camera permission
                </Text>
            </View>
        )
    }

    if (hasPermission === false){
        return(
            <View style={{marginTop:100}}>
                <Text>
                    Camera access denied
                </Text>
            </View>
        )
    }

    return(
        <View style={{marginTop:60,alignItems:"center"}}>
            <View style={styles.barcodeBox}>
                <BarCodeScanner
                    onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                    style={{height:400,width:400}}
                />
            </View>
            <Text style={styles.maintext}>
                {text}
            </Text>

            {
                scanned &&
                <>
                    <Button onPress={()=>setScanned(false)} mode="contained" style={styles.button}>Scan again</Button>
                    
                    <View style={{flexDirection:"row",justifyContent:"space-evenly",marginTop:25,width:"80%"}}>
                        <Button 
                            onPress={()=>{
                                setBarcode(text);
                                navigation.navigate("Contribute")
                            }} 
                            icon="plus"
                            mode="contained" 
                            style={styles.button}>
                                Contribute
                            </Button>

                        <Button 
                            onPress={()=>{
                                setSearchQuery(text);
                                navigation.navigate("Home")
                            }} 
                            icon="image-search"
                            mode="contained"
                            style={styles.button}>
                                Search
                            </Button>
                    </View>
                </>
            }
        </View>
    );

}

const styles = StyleSheet.create({
    barcodeBox:{
        backgroundColor:'#fff',
        alignItems:"center",
        justifyContent:"center",
        height:300,
        width:300,
        overflow:"hidden",
        borderRadius:30,
    },
    maintext: {
        fontSize: 16,
        margin: 20,
      },

    button:{
        backgroundColor:red400,
        height:45,
        alignItems:"center",
        justifyContent:"center",
    }
})