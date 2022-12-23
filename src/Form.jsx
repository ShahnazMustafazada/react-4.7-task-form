import "./styles.css";
import React, { Component } from "react";

export default class Form extends Component {
  state = {
    name: "",
    surName: "",
    email: "",
    tel: "",
    comment: "",
  };
  handleClick = (e) => {
    e.preventDefault();
    alert("qebul edildi");
    console.log(this.state.name);
    console.log(this.state.surName);
    console.log(this.state.tel);
    console.log(this.state.email);
    console.log(this.state.comment);
  };
  handleChange = (e) => {
    if (e.target.id === "name") {
      this.setState({ name: e.target.value });
    }
    if (e.target.id === "surname") {
      this.setState({ surName: e.target.value });
    }
    if (e.target.id === "email") {
      this.setState({ email: e.target.value });
    }
    if (e.target.id === "tel") {
      this.setState({ tel: e.target.value });
    }
    if (e.target.id === "comment") {
      this.setState({ comment: e.target.value });
    }
  };
  render() {
    return (
      <form className="Form" onSubmit={this.handleClick}>
        <label htmlFor="name">ad</label>
        <input
          id="name"
          type="text"
          placeholder="name"
          onChange={this.handleChange}
          required
          value={this.state.name}
        />
        <br />
        <label htmlFor="surname">soyad</label>
        <input
          id="surname"
          type="text"
          placeholder="surname"
          onChange={this.handleChange}
          value={this.state.surName}
          required
        />
        <br />
        <label htmlFor="tel">telefon</label>
        <input
          id="tel"
          type="number"
          placeholder="tel"
          onChange={this.handleChange}
          value={this.state.tel}
        />
        <br />
        <label htmlFor="email">email</label>
        <input
          id="email"
          type="email"
          placeholder="email"
          required
          onChange={this.handleChange}
          value={this.state.email}
        />
        <br />
        <label htmlFor="comment">comment</label>
        <input
          id="comment"
          type="text"
          placeholder="comment"
          onChange={this.handleChange}
          value={this.state.comment}
        />
        <br />
        <button> Gonder </button>
      </form>
    );
  }
}
