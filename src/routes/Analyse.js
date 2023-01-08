import { useState, useEffect } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Text,
} from "react-native";
import {
  white,
  red400,
} from "react-native-paper/lib/commonjs/styles/themes/v2/colors";
import { Table, Rows, Row } from "react-native-table-component";
import { nutritionKey, nutritionAppId } from "../../config";


const extractIngr = (data) => {
  let cleanData = data["ingredients"];
  return cleanData.map(({ text, parsed }) => {

    let cal = parseInt(parsed[0]["nutrients"]["ENERC_KCAL"]["quantity"])
    let weight = parseInt(parsed[0]["weight"]) 

    return [
      parsed[0]["quantity"],
      parsed[0]["measure"],
      parsed[0]["food"],
      cal,
      weight,
    ];
  });
};

export default function Analyse() {
  const [errStatusCode, setErrStatusCode] = useState(0); // 0 -> api not called 500-> failed 200 -> succes
  const initMessage = `
            1 Carrot,
            3 Onion
        `;

  const [text, setText] = useState(initMessage);
  const [tableData, setTableData] = useState([]);


  const getTotal = (type) => {

    if (type===0){
      
      let cal = 0;
      tableData.map((data)=>{
        cal += data[3]
      })
      return cal;
    
    }
    else{
      let wei = 0;
      tableData.map((data)=>{
        wei += data[4]
      })
      return wei;
    }

  }


  const getNutritionAnalysis = async (data) => {

    const cleanData = data.split(",").map((item) => {
      return item.trim();
    });

    const resp = await fetch(
      "https://api.edamam.com/api/nutrition-details?app_id=" +
        nutritionAppId +
        "&app_key=" +
        nutritionKey,
      {
        method: "POST",
        headers: {
          Accept: "application.json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ingr: cleanData,
        }),
      }
    );

    if (resp.status == 200) {

      const outJson = await resp.json();
      setErrStatusCode(200);
      setTableData(extractIngr(outJson));

    } else {
      setErrStatusCode(500);
    }
  };

  const getTable = (statusCode) => {
    if (statusCode === 0) {
      return (
        <View style={{ marginTop: 10, width: "99%", alignItems: "center" }}>
          <Text style={{ color: "red" }}>No data</Text>
        </View>
      );
    } else if (statusCode === 200) {
      return (
        <View style={{ marginTop: 10, width: "99%" }}>
          <Table borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}>
            <Row
              style={{ height: 50 }}
              data={["Qty", "Unit", "Food", "Calories", "Weight"]}
            />
            <Rows style={{ height: 30 }} data={tableData} />
            <Row
              style={{ height: 50 }}
              data={[
                  "Total",
                  "",
                  "",
                  getTotal(0),
                  getTotal(1),
                ]}
            />
          </Table>
        </View>
      );
    } else {
      return (
        <View style={{ marginTop: 10, width: "99%", alignItems: "center" }}>
          <Text style={{ color: "red" }}>error occured</Text>
        </View>
      );
    }
  };

  return (
    <>
      <View style={styles.staticDesign}>
        <Text style={styles.Title}>NUTRITION</Text>
        <Text style={{ fontSize: 14, color: white }}>Analyze</Text>
      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <View style={styles.root}>
          <TextInput
            scrollEnabled={true}
            multiline={true}
            style={styles.RecipeInput}
            value={text}
            onChangeText={(text) => {
              setText(text);
            }}
          />

          <TouchableOpacity onPress={() => getNutritionAnalysis(text)}>
            <View style={styles.analyze}>
              <Text style={{ fontSize: 20, color: white }}>ANALYZE</Text>
            </View>
          </TouchableOpacity>
        </View>

        {getTable(errStatusCode)}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  staticDesign: {
    backgroundColor: red400,
    width: "100%",
    height: 110,
    justifyContent: "center",
    alignItems: "center",
  },
  Title: {
    fontSize: 30,
    color: white,
    fontWeight: "bold",
    marginTop: 30,
  },
  root: {
    width: "95%",
    height: 330,
    backgroundColor: "#F2F5F9",
    justifyContent: "center",
    alignItems: "center",
  },
  RecipeInput: {
    width: "90%",
    height: 200,
    padding: 50,
    backgroundColor: white,
    borderWidth: 1,
    borderColor: "#DCDDDC",
  },
  analyze: {
    backgroundColor: red400,
    marginTop: 20,
    width: 150,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
});
