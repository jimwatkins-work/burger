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
      deliveryStreet: {
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
      deliveryCity: {
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
      deliveryState: {
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
      deliveryZip: {
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
      fullName: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "NAME ON CARD"
        },
        value: "",
        validation: {
          required: true,
          maxLength: 25
        },
        valid: false,
        touched: false
      },
      creditCardNum: {
        elementType: "input",
        elementConfig: {
          type: "number",
          placeholder: "CREDIT CARD NUMBER"
        },
        value: "",
        validation: {
          required: true,
          minLength: 16,
          maxLength: 16
        },
        valid: false,
        touched: false
      },
      expDate: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "EXP. DATE (##/##)"
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
      securityCode: {
        elementType: "input",
        elementConfig: {
          type: "number",
          placeholder: "SECURITY CODE"
        },
        value: "",
        validation: {
          required: true,
          minLength: 3,
          maxLength: 4
        },
        valid: false,
        touched: false
      },
      billingStreet: {
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
      billingCity: {
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
      billingState: {
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
      billingZip: {
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
    const formElementsArray = [];
    for (let key in this.state.orderForm) {
      formElementsArray.push({
        id: key,
        config: this.state.orderForm[key]
      });
    }

    console.log(formElementsArray);
    let form = (
      <form onSubmit={this.orderHandler}>
        {formElementsArray.map(el => {
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
          SUBMIT ORDER
        </Button>
      </form>
    );

    if (this.props.loading) {
      form = <Spinner />;
    }

    return <div className={classes.ContactInfo}>{form}</div>;
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
