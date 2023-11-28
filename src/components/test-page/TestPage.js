import * as React from "react";
import Grid from "@mui/material/Grid";
import deleteicon from "../../assets/images/delete-logo.png";
import "./TestPage.css";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";

// const [modalVisible, setModalVisible] = false;

class TestPage extends React.Component {
  formgroup = { name: "", fruit: "mango" };
  modalVisible = false;
  fruits = [
    {
      id: "1",
      name: "Grapefruit",
    },
    {
      id: "2",
      name: "lime",
    },
    {
      id: "3",
      name: "coconut",
    },
    {
      id: "4",
      name: "mango",
    },
  ];

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangefruit = this.handleChangefruit.bind(this);
    this._handleKeyDown = this._handleKeyDown.bind(this);
  }

  handleChange(event) {
    this.formgroup.name = event.target.value;
    this.setState({});
  }

  handleChangefruit(event) {
    this.formgroup.name = event.target.value;
    this.setState({});
  }

  setModalVisible(modalVisible) {
    this.modalVisible = modalVisible;
    this.setState({});
  }

  onSave() {
    if (this.validator()) {
      this.fruits = [
        ...this.fruits,
        { id: this.fruits.length + 1, name: this.formgroup.name },
      ];
      this.formgroup.name = "";
      this.setState({});
    } else {
      alert("Can not save list because not have data insert !!!!");
    }
  }

  validator() {
    console.log("onDeleteList => ", this.formgroup.name);
    if (this.formgroup.name) {
      return true;
    } else {
      return false;
    }
  }

  _handleKeyDown(e) {
    if (e.key === "Enter") {
      this.onSave();
    }
  }

  onDeleteList(id) {
    this.fruits = [...this.fruits.filter((item) => item.id !== id)];
    this.fruits.forEach((item, index) => {
      item.id = index;
    });
    this.setState({});
  }

  render() {
    return (
      <div className="container">
        <div id="header">
          <Text>Test Program Page</Text>
        </div>

        <div id="body">
          <Grid container spacing={1}>
            <Grid item xs={2} className="text-center">
              <Text>Name:</Text>
            </Grid>
            <Grid item xs={5} className="text-center">
              <input
                id="insertName"
                type="text"
                maxLength={10}
                value={this.formgroup.name}
                onChange={this.handleChange}
                onKeyDown={this._handleKeyDown}
              />
            </Grid>
            <Grid item xs={5} className="text-center">
              <select
                value={this.formgroup.fruit}
                onChange={this.handleChangefruit}
                id="selectFruit"
              >
                {this.fruits.map((option, index) => (
                  <option id={option.id} key={option.id} value={option.id}>
                    {option.name}
                  </option>
                ))}
              </select>
            </Grid>
            <Grid item xs={2} className="text-center">
              <Text>List Name:</Text>
            </Grid>
            <Grid item xs={5} className="text-center">
              {this.fruits.map((option, index) => (
                <Grid container spacing={1}>
                  <Grid item xs={2} className="text-center">
                    <img
                      id={option.id}
                      className="img-size"
                      src={deleteicon}
                      alt="Logo"
                      onClick={(event) => this.onDeleteList(option.id)}
                    />
                  </Grid>
                  <Grid item xs={8} className="text-center">
                    <label id={option.id}>{option.name}</label>
                  </Grid>
                </Grid>
              ))}
            </Grid>
            <Grid item xs={5} className="text-center">
              <View style={styles.centeredView}>
                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={this.modalVisible}
                  onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    this.setModalVisible(!this.modalVisible);
                  }}
                >
                  <View style={styles.centeredView}>
                    <View style={styles.modalView} className="size-contain">
                      <Text style={styles.modalText}>Hello World!</Text>
                      <Grid container spacing={1}>
                        <Grid item xs={2} className="text-center">
                          <label>List Name:</label>
                        </Grid>
                        <Grid item xs={5} className="text-center">
                          {this.fruits.map((option, index) => (
                            <Grid container spacing={1}>
                              <Grid item xs={2} className="text-center">
                                <img
                                  id={option.id}
                                  className="img-size"
                                  src={deleteicon}
                                  alt="Logo"
                                  onClick={(event) =>
                                    this.onDeleteList(option.id)
                                  }
                                />
                              </Grid>
                              <Grid item xs={8} className="text-center">
                                <label id={option.id}>{option.name}</label>
                              </Grid>
                            </Grid>
                          ))}
                        </Grid>
                      </Grid>
                      <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => this.setModalVisible(!this.modalVisible)}
                      >
                        <Text id="hideModal" style={styles.textStyle}>Hide Modal</Text>
                      </Pressable>
                    </View>
                  </View>
                </Modal>
                <Pressable
                  style={[styles.button, styles.buttonOpen]}
                  onPress={() => this.setModalVisible(true)}
                >
                  <Text id="openModal"  style={styles.textStyle}>Show Modal</Text>
                </Pressable>
              </View>
            </Grid>
          </Grid>
        </div>

        <div id="footer" className="row mt-4">
          <Grid container spacing={1}>
            <Grid item xs={4} className="text-center">
              <button id="btnSave" type="button" onClick={() => this.onSave()}>
                Save
              </button>
            </Grid>
            <Grid item xs={4} className="text-center">
              <a className="App-link color-red" href="/">
                <button type="button">Click Me backPage</button>
              </a>
            </Grid>
            <Grid item xs={4} className="text-center">
              <a className="App-link color-red" href="/home">
                <button type="button">Click Me Home Page</button>
              </a>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default TestPage;
