import React, { Component } from "react";
import classes from "./ContactInfo.module.css";
import Button from "../../../components/UI/Button/Button";
import axios from "../../../axios-orders";
import Spinner from "../../../components/UI/Spinner/Spinner";
import Input from "../../../components/UI/Input/Input";

class ContactInfo extends Component {
  state = {
    userName: "",
    email: "",
    address: {
      street: "",
      city: "",
      state: "",
      zipCode: ""
    },
    loading: false
  };

  orderHandler = event => {
    event.preventDefault();
    this.setState({ loading: true });
    const order = {
      date: Date(),
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: "Jim Watkins",
        address: {
          street: "15154 Bunker Hill Ct",
          city: "Happy Valley",
          state: "OR",
          zip: "97086"
        },
        email: "james.watkins77@yahoo.com"
      },
      deliveryMethod: "fastest"
    };
    axios
      .post("/orders.json", order)
      .then(response => {
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch(error => {
        this.setState({ loading: false });
      });
  };

  render() {
    let form = (
      <form>
        <Input inputtype="input" type="text" name="name" placeholder="Name" />
        <Input
          inputtype="input"
          type="email"
          name="email"
          placeholder="Email"
        />
        <Input
          inputtype="input"
          type="text"
          name="street"
          placeholder="Street"
        />
        <Input inputtype="input" type="text" name="city" placeholder="City" />
        <Input inputtype="input" type="text" name="state" placeholder="State" />
        <Input
          inputtype="input"
          type="text"
          name="zipCopde"
          placeholder="Zip Code"
        />
        <Button btnType="Success" clicked={this.orderHandler}>
          ORDER
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={classes.ContactInfo}>
        <h4>Enter Your Contact Info:</h4>
        {form}
      </div>
    );
  }
}

export default ContactInfo;
