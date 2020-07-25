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

class App extends Component {
  constructor() {
    super();
    this.state = {
      dataku: [],
    };
  }

  klikPost() {
    var url = "http://46.101.240.30:3210/data2";
    axios
      .post(url, {
        FpH2: this.state.input1,
        FX: this.state.input2,
        HX: this.state.input3,
        KX: this.state.input4,
        MX: this.state.input5,
        Flume: this.state.input6,
        OX: this.state.input7,
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
  }

  klikGet() {
    var url = "http://46.101.240.30:3210/data2";
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
            PH AFTER CARBONATION BAYS - TARGET: 7.6 – 10.0
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
            <TextInput
              placeholder="Capture FX pH Here..."
              style={{ height: 55, width: 350, fontSize: 15 }}
              onChangeText={(input1) => this.setState({ input1 })}
              value={this.state.input1}
            />

            <TextInput
              placeholder="Capture HX PP here..."
              style={{ height: 55, width: 350, fontSize: 15 }}
              onChangeText={(input2) => this.setState({ input2 })}
              value={this.state.input2}
            />
            <TextInput
              placeholder="Capture KX pH here..."
              style={{ height: 55, width: 350, fontSize: 15 }}
              onChangeText={(input3) => this.setState({ input3 })}
              value={this.state.input3}
            />
            <TextInput
              placeholder="Capture MX PP here..."
              style={{ height: 55, width: 350, fontSize: 15 }}
              onChangeText={(input4) => this.setState({ input4 })}
              value={this.state.input4}
            />
            <TextInput
              placeholder="Capture Flume pH here..."
              style={{ height: 55, width: 350, fontSize: 15 }}
              onChangeText={(input5) => this.setState({ input5 })}
              value={this.state.input5}
            />
            <TextInput
              placeholder="Capture OX PP here..."
              style={{ height: 55, width: 350, fontSize: 15 }}
              onChangeText={(input6) => this.setState({ input6 })}
              value={this.state.input6}
            />
            <TextInput
              placeholder="Capture QX pH here..."
              style={{ height: 55, width: 350, fontSize: 15 }}
              onChangeText={(input7) => this.setState({ input7 })}
              value={this.state.input7}
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
