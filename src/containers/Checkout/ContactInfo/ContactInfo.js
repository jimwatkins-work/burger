import React, { Component } from "react";
import classes from "./ContactInfo.module.css";
import Button from "../../../components/UI/Button/Button";
import axios from "../../../axios-orders";
import Spinner from "../../../components/UI/Spinner/Spinner";
import Input from "../../../components/UI/Input/Input";
import { connect } from "react-redux";
import withErrorHandler from "../../../hoc/withErrorHandler/withErrorHandler";
import * as orderActions from "../../../store/actions/order";
import { updateObject, checkValidity } from "../../../shared/utility";

class ContactInfo extends Component {
  state = {
    orderForm: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "NAME"
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
          placeholder: "STREET"
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
          placeholder: "CITY"
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
          placeholder: "ZIP CODE"
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
          placeholder: "EMAIL"
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
            { value: "fastest", displayValue: "FASTEST" },
            { value: "economy", displayValue: "ECONOMY" },
            { value: "standard", displayValue: "STANDARD" }
          ]
        },
        value: "economy",
        validation: {
          required: false
        },
        valid: false,
        touched: false
      }
    },
    formIsValid: false
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
      ingredients: this.props.ings,
      price: this.props.price,
      orderData: formData,
      userId: this.props.userId
    };
    this.props.onOrderBurger(order, this.props.token);
  };

  inputChangedHandler = (event, inputIdentifier) => {
    const updatedFormElement = updateObject(
      this.state.orderForm[inputIdentifier],
      {
        value: event.target.value,
        valid: checkValidity(
          event.target.value,
          this.state.orderForm[inputIdentifier].validation
        ),
        touched: true
      }
    );
    const updatedOrderForm = updateObject(this.state.orderForm, {
      [inputIdentifier]: updatedFormElement
    });

    let formIsValid = true;
    for (let inputIdentifier in updatedOrderForm) {
      formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
    }
    this.setState({ orderForm: updatedOrderForm, formIsValid: formIsValid });
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
    if (this.props.loading) {
      form = <Spinner />;
    }
    return (
      <div className={classes.ContactInfo}>
        <h4>ENTER YOUR CONTACT INFO:</h4>
        {form}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ings: state.burgerBuilder.ingredients,
    price: state.burgerBuilder.prices.total,
    loading: state.order.loading,
    token: state.auth.token,
    userId: state.auth.userId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onOrderBurger: (orderData, token) =>
      dispatch(orderActions.purchaseBurgerAttempt(orderData, token))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(ContactInfo, axios));
