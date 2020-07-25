import React, { Component } from "react";
import {
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  CheckBox,
} from "react-native";
import axios from "axios";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      dataku: [],
    };
  }

  klikPost() {
    var url = "http://192.168.1.55:3210/data3";
    axios
      .post(url, {
        F: this.state.input1,
        H: this.state.input2,
        K: this.state.input3,
        M: this.state.input4,
        O: this.state.input5,
        Q: this.state.input6,
        G: this.state.input7,
        J: this.state.input8,
        L: this.state.input9,
        N: this.state.input10,
        P: this.state.input11,
        R: this.state.input12,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    this.state.input1 = "";
    this.state.input2 = "";
    this.state.input3 = "";
    this.state.input4 = "";
    this.state.input5 = "";
    this.state.input6 = "";
    this.state.input7 = "";
    this.state.input8 = "";
    this.state.input9 = "";
    this.state.input10 = "";
    this.state.input11 = "";
    this.state.input12 = "";
  }

  klikGet() {
    var url = "http://46.101.240.30:3210/data3";
    axios.get(url).then((ambilData) => {
      console.log(ambilData.data);
      this.setState({
        dataku: ambilData.data,
      });
    });
  }

  render() {
    const dataMongo = this.state.dataku.map((item, index) => {
      var arrayku = ["Nama: ", item.nama, ", Usia: ", item.usia, " th."].join(
        " "
      );

      return (
        <Text style={{ fontSize: 20, fontWeight: "bold" }} key={index}>
          {arrayku}
        </Text>
      );
    });

    return (
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
            LOGIN TEST
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
              title="Logged In"
              onPress={() => navigate("SystemList")}
            >
              <Text
                style={{ fontSize: 20, color: "white", fontWeight: "bold" }}
              >
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
                onPress={() => Linking.openURL("http://google.com")}
              >
                Forgort your Password?
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Login;
