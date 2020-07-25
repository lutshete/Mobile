import React, { Component } from "react";
import {
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      dataku: [],
    };
  }

  klikPost() {
    var url = "http://192.168.1.55:3210/data";
    axios
      .post(url, {
        FpH2: this.state.input1,
        FPP2: this.state.input2,
        HpH2: this.state.input3,
        HPP2: this.state.input4,
        FpH2: this.state.input5,
        KpH3: this.state.input6,
        KPP3: this.state.input7,
        MpH3: this.state.input8,
        MPP3: this.state.input9,
        pH40: this.state.input10,
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
  }

  klikGet() {
    var url = "http://192.168.1.55:3210/data";
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
      <View>
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
            PH & ALKALINITY (PP) ANALYSIS WP1
          </Text>
        </View>
        <ScrollView>
          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <TextInput
              placeholder="Capture 2F pH Here..."
              style={{ height: 55, width: 350, fontSize: 15 }}
              onChangeText={(input1) => this.setState({ input1 })}
              value={this.state.input1}
            />

            <TextInput
              placeholder="Capture 2F PP here..."
              style={{ height: 55, width: 350, fontSize: 15 }}
              onChangeText={(input2) => this.setState({ input2 })}
              value={this.state.input2}
            />
            <TextInput
              placeholder="Capture 2H pH here..."
              style={{ height: 55, width: 350, fontSize: 15 }}
              onChangeText={(input3) => this.setState({ input3 })}
              value={this.state.input3}
            />
            <TextInput
              placeholder="Capture 2H PP here..."
              style={{ height: 55, width: 350, fontSize: 15 }}
              onChangeText={(input4) => this.setState({ input4 })}
              value={this.state.input4}
            />
            <TextInput
              placeholder="Capture 3K pH here..."
              style={{ height: 55, width: 350, fontSize: 15 }}
              onChangeText={(input5) => this.setState({ input5 })}
              value={this.state.input5}
            />
            <TextInput
              placeholder="Capture 3K PP here..."
              style={{ height: 55, width: 350, fontSize: 15 }}
              onChangeText={(input6) => this.setState({ input6 })}
              value={this.state.input6}
            />
            <TextInput
              placeholder="Capture 3M pH here..."
              style={{ height: 55, width: 350, fontSize: 15 }}
              onChangeText={(input7) => this.setState({ input7 })}
              value={this.state.input7}
            />
            <TextInput
              placeholder="Capture 3M PP here..."
              style={{ height: 55, width: 350, fontSize: 15 }}
              onChangeText={(input8) => this.setState({ input8 })}
              value={this.state.input8}
            />
            <TextInput
              placeholder="Capture 4O pH here..."
              style={{ height: 55, width: 350, fontSize: 15 }}
              onChangeText={(input9) => this.setState({ input9 })}
              value={this.state.input9}
            />
            <TextInput
              placeholder="Capture PP40 here..."
              style={{ height: 55, width: 350, fontSize: 15 }}
              onChangeText={(input10) => this.setState({ input10 })}
              value={this.state.input10}
            />
          </View>

          <View style={{ flexDirection: "row", justifyContent: "center" }}>
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

          <View style={{ flexDirection: "column", alignItems: "center" }}>
            {dataMongo}
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default App;
