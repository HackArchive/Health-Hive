import { useContext } from "react";
import { Text, Button } from "react-native-paper";
import { View,StyleSheet,Animated,Alert,Image,ScrollView } from "react-native";
import { red400 } from "react-native-paper/lib/commonjs/styles/themes/v2/colors";
import pfp from "../assets/pfp.png"
import {Context} from "../../App"

export default function Profile(props) {
    
    const {userDetails} = useContext(Context);

    return (
    <View style={styles.container}>

        <View style={styles.topgraphic}>
            <Image style={styles.img} source={pfp}/>
        </View>
        <ScrollView style={styles.form}>
        <View style={[styles.detailscard,styles.shadowProp]}>
        <Text style={styles.txtdetails}>
            Name: {userDetails.name}
        </Text>
        </View>

        <View style={[styles.detailscard,styles.shadowProp]}>
        <Text style={styles.txtdetails}>
            Email: {userDetails.email}
        </Text>
        </View>

        <View style={[styles.detailscard,styles.shadowProp]}>
        <Text style={styles.txtdetails}>
            Contributions: 1
        </Text>
        </View>
        <Button 
                style={styles.btn} 
            >
                <Text style={styles.btnText}>
                    Logout
                </Text>
        </Button>
    </ScrollView>
    </View>
    )

}

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    topgraphic:{
        backgroundColor:red400,
        height:230,
        width:"100%",
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30,
        justifyContent:"center",
        marginBottom:20
    },
    img:{
        width:150,
        height:150,
        alignSelf:"center",
        borderRadius:100
    },
    detailscard:{
        width:"90%",
        height:120,
        alignSelf:"center",
        justifyContent:"center",
        marginVertical: 10,
        borderRadius:10,
        backgroundColor: 'white',
        paddingVertical: 45,
        paddingHorizontal: 25,
    },
    shadowProp: {
        shadowColor: 'black',
        shadowOffset:  { width: 10, height: 10 },
        shadowOpacity: 0.1 ,
        shadowRadius: 100,
        elevation: 10,
    },
    txtdetails:{
        fontWeight:"bold",
        fontSize:20
    },
    btn:{
        width:100,
        height:40,
        marginTop:40,
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
        
    }
})