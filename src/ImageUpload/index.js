import React, { Component } from "react";
import storage from "../Firebase/index";
import "../App.css";
import {
  Container,
  Row,
  Col,
  Alert,
  Button,
  Accordion,
  Card,
  CardDeck,
  Image,
  Table,
} from "react-bootstrap";
class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      url: "",
      progress: 0,
      note: "",
    };
    this.handleChangeText = this.handleChangeText.bind(this);
  }

  handleChange = (e) => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({ image }));
    }
  };
  handleChangeText(event) {
    this.setState({ note: event.target.value });
  }

  handleUpload = () => {
    const { image } = this.state;
    try {
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      //const fileRef = storage.ref().child("test.txt");
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // progress function ...
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          this.setState({ progress });
        },
        (error) => {
          // Error function ...
          console.log(error);
        },
        () => {
          // complete function ...
          storage
            .ref("images")
            .child(image.name)
            .getDownloadURL()
            .then((url) => {
              this.setState({ url });
              // fileRef
              //   .putString(url)
              //   .then((snap) => console.log("upload successful", snap))
              //   .catch((err) => console.error("error uploading file", err));
            });
        }
      );
    } catch (err) {
      console.log(err);
    }
  };
  handleGetURL = () => {
    storage
      .ref("test.txt")
      .getDownloadURL()
      .then((url) => {
        console.log(url);
      });
  };
  render() {
    return (
      <Container className="container shadow">
        <div className="header">
          <br />
          <h2 className="header-text">React Firebase Image Uploader</h2>
          <br />
        </div>
        <Row className="chooseFile">
          <Col sm={2}>
            <div className="btn">
              <label htmlFor="myInput">
                <span>Chọn Ảnh</span>
              </label>
              <input
                id="myInput"
                style={{ display: "none" }}
                className="chooseFileBt"
                type="file"
                onChange={this.handleChange}
              />
            </div>
          </Col>
          <Col sm={2}>
            <div className="file-path-wrapper">
              <input
                className="file-path validate"
                type="text"
                placeholder="Ghi chú"
                onChange={this.handleChangeText}
              />
            </div>
          </Col>
          <Col sm={2}>
            <button
              onClick={this.handleUpload}
              className="waves-effect waves-light btn"
            >
              Upload
            </button>
          </Col>

          <Col sm={6}>
            <img
              className="image"
              src={this.state.url || "https://via.placeholder.com/300x300"}
              alt="Uploaded Images"
              height="300"
              //width="200"
            />
          </Col>
        </Row>
        <button
          onClick={this.handleGetURL}
          className="waves-effect waves-light btn"
        >
          get url
        </button>
      </Container>
    );
  }
}

export default ImageUpload;
