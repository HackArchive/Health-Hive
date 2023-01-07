import {} from "react";
import { green400,orange400,red400 } from "react-native-paper/lib/commonjs/styles/themes/v2/colors";
import {
    Text,
    View,
    Image,
    Dimensions,
    Platform,
    ImageBackground,
    TouchableOpacity,
    ScrollView,
    Alert
} from "react-native";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";

let screenWidth = Dimensions.get("window").width;
let screenHeight = Dimensions.get("window").height;

export default function Product(props) {
    

    const detail = {
        id:props.id,
        title:props.title,
        image:props.image,
        subTitle:props.subTitle,
        level:props.level,
    }
    
    const getLevelColor = (level)=>{

        switch (level){
            case 1:
                return green400
            
            case 2:
                return orange400
            
            case 3:
                return red400

        }

    }
      return (
        <View
          style={{
            margin: scale(10),
            alignSelf: "flex-end",
            width: screenWidth-100,
            height: verticalScale(186),
            borderRadius: 12,
            elevation: 3,
            shadowColor: "#000",
            shadowOpacity: 0.2,
            shadowRadius: 4,
            shadowOffset: {
              height: 1,
              width: 0
            },
            borderRadius: 6,
            backgroundColor: "#ffffff",
            justifyContent: "center",
            alignItems: "flex-start"
          }}
        >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems:"center",
            alignItems: "center"
          }}
            >
            <Image
                source={{uri:props.image}}
                borderRadius={10}
                style={{
                width: scale(150),
                height: verticalScale(150),
                marginLeft: scale(-75)
                }}
            />
            <View
              style={{
                justifyContent: "center",
                alignItems: "flex-start",
                padding: scale(10)
              }}
            >
              <Text
                style={{
                  height: verticalScale(20),
                  color: "#404852",
                  marginTop: scale(25),
                  fontSize: scale(15),
                  fontWeight: "700",
                  letterSpacing: -0.36,
                  lineHeight: scale(20)
                }}
              >
                {props.title}
              </Text>
                
              <Text
                  style={{
                    width: scale(150),
                    color: "#adb3bf",
                    textAlign: "justify",
                    fontSize: 12,
                    fontWeight: "400",
                    letterSpacing: -0.29,
                    lineHeight: scale(16),
                    marginTop: scale(10),
                    marginBottom: scale(10)
                  }}
                >
                {
                  props.subTitle.slice(0,3).map((text)=>text+" , ")
                }
                ...
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: scale(10)
                }}
              >
                <Text
                  style={{
                    height: scale(22),
                    color: getLevelColor(props.level),
                    fontSize: 12,
                    fontWeight: "900",
                    letterSpacing: -0.29,
                    lineHeight: scale(22)
                  }}
                >
                  Level : {props.level}
                </Text>
                <TouchableOpacity
                  onPress={() => props.navigation.navigate('ProductDetail',detail)}
                  style={[
                    {
                      justifyContent: "center",
                      zIndex: 3,
                      borderWidth: 1,
                      borderColor: "#eee",
                      alignItems: "center",
                      alignSelf: "flex-end",
                      width: scale(80),
                      height: scale(30),
                      margin: 30,
                      shadowRadius: 5,
                      borderRadius: scale(40),
                      backgroundColor: props.iconBackground2
                    }
                  ]}
                >
                  <Text
                    style={{
                      color: "#535bfe",
                      fontSize: 12,
                      fontWeight: "900"
                    }}
                  >
                    Know More
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      );

  }
  