import React, { Component } from "react";
import { Button, Platform, StyleSheet, Text, View } from "react-native";
import axios from "axios";

export default class App extends Component {
  state = { data: [] };

  componentWillMount() {
    axios
      .get("https://devccc.assuredperformance.net/react_test.php")
      .then(response => this.setState({ data: response.data }));
  }

  // renderData() {
  //   return this.state.data.map(data => (
  //     <Button title={data[3]} />
  //   ));
  // }

  render() {
    console.log(this.state.data);
    return <View style={styles.container}>
        {/* {this.renderData()} */}
        <Button title="Button" color="#841584" />
        <Button title="Button" color="#841584" />
        <Button title="Button" color="#841584" />
        <Button title="Button" color="#841584" />
      </View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
