import { Text } from "react-native-paper";
import { View,StyleSheet,Animated,Alert,Image } from "react-native";
import { red400 } from "react-native-paper/lib/commonjs/styles/themes/v2/colors";
import pfp from "../assets/pfp.png"

export default function Profile(props) {
    const details = props

    return (
    <View style={styles.container}>
        <View style={styles.topgraphic}>
            <Image style={styles.img} source={pfp}/>
        </View>

        <View style={[styles.detailscard,styles.shadowProp]}>
        <Text style={styles.txtdetails}>
            User Name: {details.username}
        </Text>
        </View>

        <View style={[styles.detailscard,styles.shadowProp]}>
        <Text style={styles.txtdetails}>
            Email: {details.email}
        </Text>
        </View>

        <View style={[styles.detailscard,styles.shadowProp]}>
        <Text style={styles.txtdetails}>
            Contributions: {details.contribution}
        </Text>
        </View>
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
    }
})