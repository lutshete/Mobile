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

class WaterT extends Component {
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
            WATER TREATMENT SAMPLES WP1
          </Text>
        </View>
        <ScrollView>
          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <View style={{ flexDirection: "column", marginTop: 20 }}>
              <View style={{ flexDirection: "row" }}>
                <CheckBox
                  value={this.state.checked}
                  onValueChange={() =>
                    this.setState({ checked: !this.state.checked })
                  }
                />
                <Text style={{ marginTop: 5 }}>
                  Treatment Regime: High Lime
                </Text>
                <CheckBox
                  value={this.state.checked}
                  onValueChange={() => this.setState({ checked: !this.state })}
                />
                <Text style={{ marginTop: 5 }}> Low Lime </Text>
              </View>
            </View>

            <View
              style={{
                height: 30,
                width: "100%",
                marginTop: 20,
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
                PRIMARY TANKS OUTLET TURBIDITY 10NTU
              </Text>
            </View>

            <TextInput
              placeholder="Capture F Here..."
              style={{ height: 55, width: 350, fontSize: 15 }}
              onChangeText={(input1) => this.setState({ input1 })}
              value={this.state.input1}
            />

            <TextInput
              placeholder="Capture H here..."
              style={{ height: 55, width: 350, fontSize: 15 }}
              onChangeText={(input2) => this.setState({ input2 })}
              value={this.state.input2}
            />
            <TextInput
              placeholder="Capture K here..."
              style={{ height: 55, width: 350, fontSize: 15 }}
              onChangeText={(input3) => this.setState({ input3 })}
              value={this.state.input3}
            />
            <TextInput
              placeholder="Capture M here..."
              style={{ height: 55, width: 350, fontSize: 15 }}
              onChangeText={(input4) => this.setState({ input4 })}
              value={this.state.input4}
            />
            <TextInput
              placeholder="Capture O here..."
              style={{ height: 55, width: 350, fontSize: 15 }}
              onChangeText={(input5) => this.setState({ input5 })}
              value={this.state.input5}
            />
            <TextInput
              placeholder="Capture Q here..."
              style={{ height: 55, width: 350, fontSize: 15 }}
              onChangeText={(input6) => this.setState({ input6 })}
              value={this.state.input6}
            />

            <View
              style={{
                width: 500,
                height: 30,
                marginTop: 20,
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
                SECONDARY TANKS OUTLET TURBIDITY 5NTU
              </Text>
            </View>
            <TextInput
              placeholder="Capture G pH here..."
              style={{ height: 55, width: 350, fontSize: 15 }}
              onChangeText={(input7) => this.setState({ input7 })}
              value={this.state.input7}
            />
            <TextInput
              placeholder="Capture J here..."
              style={{ height: 55, width: 350, fontSize: 15 }}
              onChangeText={(input8) => this.setState({ input8 })}
              value={this.state.input8}
            />

            <TextInput
              placeholder="Capture L here..."
              style={{ height: 55, width: 350, fontSize: 15 }}
              onChangeText={(input9) => this.setState({ input9 })}
              value={this.state.input9}
            />
            <TextInput
              placeholder="Capture N here..."
              style={{ height: 55, width: 350, fontSize: 15 }}
              onChangeText={(input10) => this.setState({ input10 })}
              value={this.state.input10}
            />

            <TextInput
              placeholder="Capture P here..."
              style={{ height: 55, width: 350, fontSize: 15 }}
              onChangeText={(input11) => this.setState({ input11 })}
              value={this.state.input11}
            />
            <TextInput
              placeholder="Capture R here..."
              style={{ height: 55, width: 350, fontSize: 15 }}
              onChangeText={(input12) => this.setState({ input12 })}
              value={this.state.input12}
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
                margin: 20,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={this.klikPost.bind(this)}
            >
              <Text
                style={{ fontSize: 20, color: "white", fontWeight: "bold" }}
              >
                SUBMIT
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default WaterT;
