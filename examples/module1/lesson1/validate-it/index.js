function validator() {
  const input = document.getElementById('input');
  const validateBtn = document.getElementById('validateBtn');
  const clearBtn = document.getElementById('clearBtn');
  const result = document.getElementById('result');

  validateBtn.addEventListener('click', () => {
    const validationResult = new Validator(Number(input.value))
      .isNumber()
      .isEven()
      .isGreaterThan(0)
      .isLowerThan(100)
      .isRequired();
    result.innerHTML = validationResult.isValidationSuccesful()
      ? 'Valid'
      : 'Invalid';
  });

  clearBtn.addEventListener('click', () => {
    clearData();
  });
}

const isNumber = (number) => Number.isInteger(Number(number));

const checkIfNumberIsValid = (number) =>
  number &&
  isNumber(number) &&
  Number(number) > 0 &&
  Number(number) < 100 &&
  Number(number) % 2 === 0;

const validateData = (number) => {
  if (checkIfNumberIsValid(number)) {
    result.innerHTML = 'Valid';
  } else {
    result.innerHTML = 'Invalid';
  }
};
const clearData = () => {
  input.value = '';
  result.innerHTML = '';
};

validator();

class Validator {
  constructor(input) {
    this.input = input;
    this.errors = [];
  }

  isNumber() {
    if (typeof this.input !== 'number') {
      this.errors.push('Input must be number!');
    }
    return this;
  }

  isEven() {
    console.log(this.input);
    if (this.input % 2 !== 0) {
      this.errors.push('Input must be even.');
    }
    return this;
  }

  isGreaterThan(value) {
    if (this.input <= value) {
      this.errors.push(`Input must be greater than ${value}`);
    }
    return this;
  }

  isLowerThan(value) {
    if (this.input >= value) {
      this.errors.push(`Input must be lower than ${value}`);
    }
    return this;
  }

  isRequired() {
    if (this.input === null || this.input === undefined || this.input === '') {
      this.errors.push('Input is required');
    }
    return this;
  }

  isValidationSuccesful() {
    return this.errors.length === 0;
  }
}
