import React from "react";
import "./style.css";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      poster: "",
      comment: ""
    };
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  submitForm(e) {
    e.preventDefault();
    this.fetchAPI();
  }

  render() {
    return (
      <div className="App">
        <h1>Your favorite movie</h1>
        <form onSubmit={this.submitForm}>
          <input
            type="text"
            id="name-movie"
            name="title"
            placeholder="Movie"
            onChange={this.onChange}
            value={this.state.name}
          />
          <br />
          <input
            type="text"
            id="poster"
            name="poster"
            placeholder="Post the link here"
            onChange={this.onChange}
            value={this.state.poster}
          />
          <br />
          <textarea
            name="comment"
            id="comment"
            cols="30"
            rows="10"
            placeholder="Why do you like this movie?"
            onChange={this.onChange}
            value={this.state.comment}
          ></textarea>
          <br />
          <input type="submit" value="Send" />
        </form>
      </div>
    );
  }

  fetchAPI = async () => {
    const url = "https://post-a-form.herokuapp.com/api/movies/";
    alert("The movie has been added");
  };
}

export default App;
