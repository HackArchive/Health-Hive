import {useState,useEffect} from 'react';
import { StyleSheet, Text, View, Image, Alert, ScrollView, TouchableOpacity } from 'react-native';
import { green800,green400,orange400,red400,red600 } from 'react-native-paper/lib/commonjs/styles/themes/v2/colors';
import { databases,HAZARD_COLLECTION_ID,DB_ID } from '../appwrite/appwriteConfig';

export default function ProductDetail({navigation,route}){
    
    const productDetail = route.params
    const [hazards,setHazards] = useState([]); 

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

    const getHazards = async ()=>{

      try{
        const resp = await databases.listDocuments(DB_ID,HAZARD_COLLECTION_ID);
        const hazardsData = resp.documents.filter((item)=>{
          if(productDetail.subTitle.includes(item.name)){
            return {name:item.name,description:item.description}
          }
        })
        setHazards(hazardsData);
      }
      catch(error){
        console.log("hazards not fetched",error)
      }

    }
  
    const getIngredients = ()=>{
      let ingredientsString = "";
      productDetail.subTitle.map((text)=>{ingredientsString+=text+" , "})
      Alert.alert("Ingredients",ingredientsString)
    }
  
  useEffect(()=>{
    getHazards();
  },[])
  
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ alignItems: 'center', marginHorizontal: 30 ,marginTop:20}}>
          <Image
            style={styles.productImg}
            source={{
              uri: productDetail.image,
            }}
          />
          <Text style={styles.name}>{productDetail.title}</Text>
          <Text 
            style={{marginTop: 10,
              fontSize: 18,
              color: getColourLevel(productDetail.level),
              fontWeight: 'bold',}}
          >
            Safety Level {productDetail.level}
          </Text>

          <TouchableOpacity onPress={getIngredients}>
            <View style={{width:170,height:50,backgroundColor:green800,alignItems:"center",justifyContent:"center",borderRadius:30,marginTop:20}}>
              <Text style={{color:"white",fontSize:20}}>
                Ingredients
              </Text>
            </View>
          </TouchableOpacity>
          
          {hazards.length > 0 && (
            <>
            <Text
              style={{
                fontSize: 28,
                fontWeight: "500",
                color: "#333",
                marginTop: 35,
              }}
            >
              Harmful Contents
            </Text>
              <View style={{width:"99%",marginTop:-10 ,flexDirection:"row",flexWrap:"wrap",justifyContent:"space-evenly"}}>
                {
                  hazards.map((hazard)=>{
                    return (<TouchableOpacity onPress={()=>Alert.alert(hazard.name,hazard.description)}>
                      <View style={{width:140,height:40,backgroundColor:red600,alignItems:"center",justifyContent:"center",borderRadius:30,marginTop:20}}>
                        <Text style={{color:"white",fontSize:18}}>
                          {hazard.name}
                        </Text>
                      </View>
                    </TouchableOpacity>)
                  })
                }
              </View>
           </>
          )}

        </View>
        <View style={{ alignItems: 'center', marginHorizontal: 30 ,marginTop:40, marginBottom:20}}>
          <Text
            style={{
              fontSize: 28,
              fontWeight: "500",
              color: "#333",
              
            }}
          >
            Nutritional Info
          </Text>
          <Text>* Amount per serving 100 g/100 ml (approx)</Text>
          <View style={{width:"99%",marginTop:0 ,flexDirection:"row",flexWrap:"wrap",justifyContent:"space-evenly"}}>
            <View style={{width:140,height:40,backgroundColor:"#69b550",alignItems:"center",justifyContent:"center",borderRadius:30,marginTop:20}}>
                {
                  productDetail.level > 1 ? (
                    <Text style={{color:"white",fontSize:18}}>
                      Energy - 389kcal
                    </Text>
                  ) : (
                    <Text style={{color:"white",fontSize:18}}>
                      Energy - 56kcal
                    </Text>
                  )
                }
            </View>
            <View style={{width:140,height:40,backgroundColor:"#69b550",alignItems:"center",justifyContent:"center",borderRadius:30,marginTop:20}}>
              {
                productDetail.level > 1 ? (
                  <Text style={{color:"white",fontSize:18}}>
                    Total Fat - 13.5 g
                  </Text>
                ) : (
                  <Text style={{color:"white",fontSize:18}}>
                    Fruit sugars - 6g
                  </Text>
                )
              }
            </View>
            {
              productDetail.level == 1 && (
                <>  
                  <View style={{width:140,height:40,backgroundColor:"#69b550",alignItems:"center",justifyContent:"center",borderRadius:30,marginTop:20}}>
                    <Text style={{color:"white",fontSize:18}}>
                    Vit. C - 42mg
                    </Text>
                  </View>
                  <View style={{width:140,height:40,backgroundColor:"#69b550",alignItems:"center",justifyContent:"center",borderRadius:30,marginTop:20}}>
                    <Text style={{color:"white",fontSize:18}}>
                    Vit. A - 115mcg
                    </Text>
                  </View>
                  <View style={{width:140,height:40,backgroundColor:"#69b550",alignItems:"center",justifyContent:"center",borderRadius:30,marginTop:20}}>
                    <Text style={{color:"white",fontSize:18}}>
                    Vit. E - 1.88mg
                      </Text>
                  </View>
                </>
              )
            }
            {
                productDetail.level > 1 && (
                <View style={{width:140,height:40,backgroundColor:"#69b550",alignItems:"center",justifyContent:"center",borderRadius:30,marginTop:20}}>
                  <Text style={{color:"white",fontSize:18}}>
                    Protein - 8.2 g
                  </Text>
                </View>
            )}
            <View style={{width:140,height:40,backgroundColor:"#69b550",alignItems:"center",justifyContent:"center",borderRadius:30,marginTop:20}}>
              {
                productDetail.level > 1 ? (
                  <Text style={{color:"white",fontSize:18}}>
                  Carbs - 59.6 g
                </Text>
                ) : (
                  <Text style={{color:"white",fontSize:18}}>
                    Carbs - 14  g
                  </Text>
                ) 
              }
            </View>
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
