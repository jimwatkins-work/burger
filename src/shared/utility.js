export const updateObject = (oldObject, updatedProps) => {
  return {
    ...oldObject,
    ...updatedProps
  };
};

export const checkValidity = (value, rules) => {
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

  if (rules.isEmail) {
    const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    isValid = pattern.test(value) && isValid;
  }

  if (rules.isNumeric) {
    const pattern = /^\d+$/;
    isValid = pattern.test(value) && isValid;
  }

  return isValid;
};

export const convertDate = props => {
  let dateSplit = props.split(" ");
  let dateArr = [];
  for (var i = 1; i < 5; i++) {
    dateArr.push(dateSplit[i]);
  }
  return dateArr.join(" ");
};
