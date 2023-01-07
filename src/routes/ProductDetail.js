import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, Alert, ScrollView } from 'react-native'
import { grey200,green400,orange400,red400 } from 'react-native-paper/lib/commonjs/styles/themes/v2/colors'



export default function ProductDetail({navigation,route}){
    const productDetail = route.params
    const level = productDetail.safteyLevel
    const getColourLevel = (level)=>{
      switch(level){
        case 1:
            return green400
        
        case 2:
            return orange400
        
        case 3:
            return red400
      }
    }
    // console.log(productDetail.safteyLevel)
    
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ alignItems: 'center', marginHorizontal: 30 }}>
          <Image
            style={styles.productImg}
            source={{
              uri: productDetail.image,
            }}
          />
          <Text style={styles.name}>{productDetail.title}</Text>
          <Text style={styles.price}>{productDetail.level}</Text>
          <Text style={styles.description}>
            Contains: {productDetail.subTitle}
          </Text>
          <View style={{width:"80%", height:20, backgroundColor:"white", margin:20, borderRadius:100}}>
            <View style={{width:"100%",
              height:20,
              backgroundColor: getColourLevel(productDetail.safteyLevel)}}/>
          </View>
        </View>
        
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  productImg: {
    width: 200,
    height: 200,
  },
  name: {
    fontSize: 28,
    color: '#696969',
    fontWeight: 'bold',
    marginTop:10
  },
  price: {
    marginTop: 10,
    fontSize: 18,
    color: 'green',
    fontWeight: 'bold',
  },
  description: {
    textAlign: 'center',
    marginTop: 10,
    color: '#696969',
    fontSize:20
  },
  star: {
    width: 40,
    height: 40,
  },
  btnColor: {
    height: 30,
    width: 30,
    borderRadius: 30,
    marginHorizontal: 3,
  },
  btnSize: {
    height: 40,
    width: 40,
    borderRadius: 40,
    borderColor: '#778899',
    borderWidth: 1,
    marginHorizontal: 3,
    backgroundColor: 'white',

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  starContainer: {
    justifyContent: 'center',
    marginHorizontal: 30,
    flexDirection: 'row',
    marginTop: 20,
  },
  contentColors: {
    justifyContent: 'center',
    marginHorizontal: 30,
    flexDirection: 'row',
    marginTop: 20,
  },
  contentSize: {
    justifyContent: 'center',
    marginHorizontal: 30,
    flexDirection: 'row',
    marginTop: 20,
  },
  separator: {
    height: 2,
    backgroundColor: '#eeeeee',
    marginTop: 20,
    marginHorizontal: 30,
  },
  shareButton: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: '#00BFFF',
  },
  shareButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
  },
  addToCarContainer: {
    marginHorizontal: 30,
  },
})
