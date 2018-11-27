import React, { Component } from "react";
import classes from "./ContactInfo.module.css";
import Button from "../../components/UI/Button/Button";

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
    date: Date()
  };

  orderHandler = () => {};

  render() {
    return (
      <div className={classes.ContactInfo}>
        <h4>Enter Your Contact Info:</h4>
        <form>
          <input type="text" name="name" placeholder="Name" />
          <input type="email" name="email" placeholder="Email" />
          <input type="text" name="street" placeholder="Street" />
          <input type="text" name="city" placeholder="City" />
          <input type="text" name="state" placeholder="State" />
          <input type="text" name="zipCopde" placeholder="Zip Code" />
        </form>
        <Button btnType="Success" clicked={this.orderHandler}>
          ORDER
        </Button>
      </div>
    );
  }
}

export default ContactInfo;
