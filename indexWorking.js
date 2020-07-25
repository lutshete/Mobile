import { AppRegistry } from "react-native";
import { name } from "./app.json";
import Navigator from "react-native-easy-router";
import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  ListView,
  StyleSheet,
  Alert,
  CheckBox,
} from "react-native";
import axios from "axios";
import WaterT from "./WaterT";
import LoginTest from "./AppTest";

const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2,
});
this.state = {
  dataSource: ds.cloneWithRows([
    "PRIMARY TANKS INLET",
    "PH CARBONATION BAYS",
    "WATER TREATMENT TANKS OUTLET TURBIDITY",
    "WATER TREATMENT TANKS OUTLET",
    "SLAKER PLANT SCALE TEST SHEET",
  ]),
};

//handling onPress action
getListViewItem = (rowData) => {
  Alert.alert(rowData);
};

klikPost = () => {
  var url = "http://192.168.1.55:3210/signin";
  axios
    .post(url, {
      email: this.state.input1,
      password: this.state.input2,
    })
    .then((res) => res.json())
    .then(async (data) => {
      try {
        await AsyncStorage.setItem("token", data.token);
        navigator.push("Screen2", { name: "John" });
      } catch (e) {
        console.log("error hai", e);
        Alert(e);
      }
    });
  this.state.input1 = "";
  this.state.input2 = "";
};

const ScreenContainer = ({ children, color, title }) => (
  <SafeAreaView style={{ flex: 1 }}>
    <View
      style={{
        //alignItems: "center",
        backgroundColor: "#068783",
        flexDirection: "column",
        //justifyContent: "center",
        height: 50,
      }}
    >
      <Text
        style={{
          color: "white",
          textAlign: "left",
          fontWeight: "bold",
          fontSize: 20,
          marginLeft: 5,
        }}
      >
        {title}
      </Text>
    </View>
    <View
      style={{
        alignItems: "center",
        backgroundColor: color,
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-around",
      }}
    >
      {children}
    </View>
  </SafeAreaView>
);

const Screen1 = ({ navigator }) => (
  <ScreenContainer>
    <View style={{ height: "100%" }}>
      <View
        style={{
          height: 35,
          marginTop: 0,
          backgroundColor: "#068783",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            color: "white",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 15,
          }}
        >
          RAND WATER SITE INSPECTION
        </Text>
      </View>
      <View
        style={{
          height: 35,
          marginTop: 50,
          //backgroundColor: "#068783",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            color: "#068783",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 25,
            fontWeight: "bold",
          }}
        >
          LOGIN TEST 2
        </Text>
        {/*  <Image source={require("./img/logo.png")} /> */}
      </View>

      <ScrollView>
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            marginTop: 100,
          }}
        >
          <TextInput
            placeholder="Type username Here..."
            style={{ height: 55, width: 350, fontSize: 15 }}
            onChangeText={(input1) => this.setState({ input1 })}
            value={this.state.input1}
          />

          <TextInput
            secureTextEntry
            placeholder="Type password here..."
            style={{ height: 55, width: 350, fontSize: 15 }}
            onChangeText={(input2) => this.setState({ input2 })}
            value={this.state.input2}
          />
        </View>

        <View>
          <TouchableOpacity
            style={{
              backgroundColor: "#068783",
              borderRadius: 10,
              flex: 1,
              //width: 100,
              height: 35,
              margin: 10,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 40,
            }}
            onPress={this.klikPost.bind(this)}
          >
            <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>
              SUBMIT
            </Text>
          </TouchableOpacity>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              //justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                color: "#068783",
                marginLeft: 30,
                fontSize: 15,
                textDecorationLine: "underline",
              }}
              onPress={() => Linking.openURL("http://google.com")}
            >
              Register
            </Text>
            <Text
              style={{
                color: "#068783",
                marginLeft: 130,
                fontSize: 15,
                textDecorationLine: "underline",
              }}
            >
              Forgort your Password?
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  </ScreenContainer>
);

const Screen2 = ({ name, navigator }) => (
  <ScreenContainer title="System List">
    <View style={styles.container}>
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) => (
          <Text
            style={styles.rowViewContainer}
            onPress={() => navigator.push("WaterT", { name: "John" })}
          >
            {rowData}
          </Text>
        )}
        renderSeparator={(sectionId, rowId) => (
          <View key={rowId} style={styles.separator} />
        )} //adding separation
      />
    </View>
  </ScreenContainer>
);

const Screen3 = ({ name, navigator }) => (
  <ScreenContainer
    title="Primary Tanks Outlet Turbidity "
    children="SystemList"
  ></ScreenContainer>
);

const Application = () => (
  <Navigator initialStack="Screen1" screens={{ Screen1, Screen2, WaterT }} />
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "#e5e5e5",
    marginTop: 50,
    width: "100%",
  },
  separator: {
    height: 0.5,
    width: "100%",
    backgroundColor: "#068783",
  },
  rowViewContainer: {
    flex: 1,
    paddingRight: 15,
    paddingTop: 13,
    paddingBottom: 13,
    borderBottomWidth: 0.5,
    borderColor: "#068783",
    flexDirection: "row",
    alignItems: "center",
    fontSize: 15,
    marginLeft: 10,
  },
});

AppRegistry.registerComponent(name, () => Application);
