import React from "react";
import { View, ListView, StyleSheet, Text, Alert } from "react-native";

class SystemList extends React.Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });
    this.state = {
      dataSource: ds.cloneWithRows([
        "Primary Tanks Inlet",
        "pH after Carbonation Bays",
        "pH after Carbonation",
      ]),
    };
  }
  //handling onPress action
  getListViewItem = (rowData) => {
    Alert.alert(rowData);
  };
  render() {
    return (
      <View style={styles.container}>
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
            PLANT LIST
          </Text>
        </View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => (
            <Text
              style={styles.rowViewContainer}
              onPress={this.getListViewItem.bind(this, rowData)}
            >
              {rowData}
            </Text>
          )}
          renderSeparator={(sectionId, rowId) => (
            <View key={rowId} style={styles.separator} />
          )} //adding separation
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e5e5e5",
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
    borderColor: "#c9c9c9",
    flexDirection: "row",
    alignItems: "center",
    fontSize: 20,
    marginLeft: 10,
  },
});

export default SystemList;
