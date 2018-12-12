import React, { Component } from "react";
import classes from "./ContactInfo.module.css";
import Button from "../../../components/UI/Button/Button";
import axios from "../../../axios-orders";
import Spinner from "../../../components/UI/Spinner/Spinner";
import Input from "../../../components/UI/Input/Input";

class ContactInfo extends Component {
  state = {
    orderForm: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Name"
        },
        value: "",
        validation: {
          required: true,
          minLength: 2,
          maxLength: 30
        },
        valid: false,
        touched: false
      },
      street: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Street"
        },
        value: "",
        validation: {
          required: true,
          minLength: 5,
          maxLength: 30
        },
        valid: false,
        touched: false
      },
      city: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "City"
        },
        value: "",
        validation: {
          required: true,
          minLength: 2,
          maxLength: 30
        },
        valid: false,
        touched: false
      },
      state: {
        elementType: "select",
        elementConfig: {
          options: [
            { value: "Alabama", displayValue: "AL" },
            { value: "Alaska", displayValue: "AK" },
            { value: "Arizona", displayValue: "AZ" },
            { value: "Arkansas", displayValue: "AR" },
            { value: "California", displayValue: "CA" },
            { value: "Colorado", displayValue: "CO" },
            { value: "Connecticut", displayValue: "CT" },
            { value: "Delaware", displayValue: "DE" },
            { value: "Florida", displayValue: "FL" },
            { value: "Georgia", displayValue: "GA" },
            { value: "Hawaii", displayValue: "HI" },
            { value: "Idaho", displayValue: "ID" },
            { value: "Illinois", displayValue: "IL" },
            { value: "Indiana", displayValue: "IN" },
            { value: "Iowa", displayValue: "IA" },
            { value: "Kansas", displayValue: "KS" },
            { value: "Kentucky", displayValue: "KY" },
            { value: "Louisiana", displayValue: "LA" },
            { value: "Maine", displayValue: "ME" },
            { value: "Maryland", displayValue: "MD" },
            { value: "Massachusetts", displayValue: "MA" },
            { value: "Michigan", displayValue: "MI" },
            { value: "Minnesota", displayValue: "MN" },
            { value: "Mississippi", displayValue: "MS" },
            { value: "Missouri", displayValue: "MO" },
            { value: "Montana", displayValue: "MT" },
            { value: "Nebraska", displayValue: "NE" },
            { value: "Nevada", displayValue: "NV" },
            { value: "New Hampshire", displayValue: "NH" },
            { value: "New Jersey", displayValue: "NJ" },
            { value: "New Mexico", displayValue: "NM" },
            { value: "North Carolona", displayValue: "NC" },
            { value: "North Dakota", displayValue: "ND" },
            { value: "Ohio", displayValue: "OH" },
            { value: "Oklahoma", displayValue: "OK" },
            { value: "Oregon", displayValue: "OR" },
            { value: "Pennsylvania", displayValue: "PA" },
            { value: "Rhode Island", displayValue: "RI" },
            { value: "South Carolina", displayValue: "SC" },
            { value: "South Dakota", displayValue: "SD" },
            { value: "Tennessee", displayValue: "TN" },
            { value: "Texas", displayValue: "TX" },
            { value: "Utah", displayValue: "UT" },
            { value: "Vermont", displayValue: "VT" },
            { value: "Virginia", displayValue: "VA" },
            { value: "Washington", displayValue: "WA" },
            { value: "West Virginia", displayValue: "WV" },
            { value: "Wisconsin", displayValue: "WI" },
            { value: "Wyoming", displayValue: "WY" }
          ]
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      zip: {
        elementType: "input",
        elementConfig: {
          type: "number",
          placeholder: "Zip Code"
        },
        value: "",
        validation: {
          required: true,
          minLength: 5,
          maxLength: 5
        },
        valid: false,
        touched: false
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Email"
        },
        value: "",
        validation: {
          required: true,
          minLength: 6
        },
        valid: false,
        touched: false
      },
      deliveryMethod: {
        elementType: "select",
        elementConfig: {
          options: [
            { value: "fastest", displayValue: "Fastest" },
            { value: "economy", displayValue: "Economy" },
            { value: "standard", displayValue: "Standard" }
          ]
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      }
    },
    formIsValid: false,
    loading: false
  };

  orderHandler = event => {
    event.preventDefault();
    this.setState({ loading: true });
    const formData = {};
    for (let formElementIdentifier in this.state.orderForm) {
      formData[formElementIdentifier] = this.state.orderForm[
        formElementIdentifier
      ].value;
    }
    const order = {
      date: Date(),
      ingredients: this.props.ingredients,
      price: this.props.price,
      orderData: formData
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

  inputChangedHandler = (event, inputIdentifier) => {
    const updatedOrderForm = {
      ...this.state.orderForm
    };
    const updatedFormElement = {
      ...updatedOrderForm[inputIdentifier]
    };
    updatedFormElement.value = event.target.value;
    if (updatedFormElement.validation) {
      updatedFormElement.valid = this.checkValidity(
        updatedFormElement.value,
        updatedFormElement.validation
      );
    }
    updatedFormElement.touched = true;
    updatedOrderForm[inputIdentifier] = updatedFormElement;
    let formIsValid = true;
    for (let inputIdentifier in updatedOrderForm) {
      formIsValid =
        updatedOrderForm[inputIdentifier].valid && formIsValid === true;
    }
    this.setState({ orderForm: updatedOrderForm, formIsValid: formIsValid });
  };

  checkValidity = (value, rules) => {
    let isValid = true;

    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }

    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }

    return isValid;
  };

  render() {
    const formsElementsArray = [];
    for (let key in this.state.orderForm) {
      formsElementsArray.push({
        id: key,
        config: this.state.orderForm[key]
      });
    }
    let form = (
      <form onSubmit={this.orderHandler}>
        {formsElementsArray.map(el => {
          return (
            <Input
              key={el.id}
              elementType={el.config.elementType}
              elementConfig={el.config.elementConfig}
              value={el.config.value}
              changed={event => this.inputChangedHandler(event, el.id)}
              invalid={!el.config.valid}
              shouldValidate={el.config.validation}
              touched={el.config.touched}
            />
          );
        })}
        <Button btnType="Success" disabled={!this.state.formIsValid}>
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
