import { useState } from "react";
import styled from "styled-components";
import { months } from "../../constant";
import color from "../../colorConstant";
import { data } from "../../data";

const FormContainer = styled.div`
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  position: relative;
`;

const InputContainer = styled.div`
  margin: 8px 0;
`;
const Input = styled.input`
  width: 100%;
  padding: 12px 20px;
  display: inline-block;
  border: 1px solid ${(props) => (props.error ? "#FF0000" : "#ccc")};
  border-radius: 4px;
`;
const SelectContainer = styled.div`
  display: flex;
`;
const Select = styled.select`
  width: 150px;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid ${(props) => (props.error ? "#FF0000" : "#ccc")};
  border-radius: 4px;
`;

const CloseModal = styled.button`
  font-size: 20px;
  position: absolute;
  top: 0;
  right: 0;
  padding: 10px;
  border: none;
  background-color: transparent;
  font-weight: 700;
`;
const ButtonContainer = styled.div`
display:flex;
`;
const SubmitButton = styled.button`
padding:10px;
background-color:${color.green};
color:${color.white};\
border:none;
margin-left:8px;
border-radius: 4px;
cursor:pointer;
`
const CancelButton = styled(SubmitButton)`
background-color:#FF0000;
`
const Error = styled.p`
margin:2px 0px;
color:#FF0000;
`;
const CreditCardForm = ({ handleModalToggle, submitCardData }) => {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    cardNumber: "",
    expireMonth: "",
    expireYear: "",
    cvv: "",
  });
  const [errors, setFormErrors] = useState({
    firstName: "",
    lastName: "",
    cardNumber: "",
    expireMonth: "",
    expireYear: "",
    cvv: "",
  });
  const years = (function () {
    const year = new Date().getFullYear();
    const years = [];
    for (let i = 0; i < 10; i++) {
      years.push(year + i);
    }
    return years;
  })();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    setFormErrors((prev) => ({ ...prev, [name]: "" }));
  };
  const handleCardChange = (e) => {
    let val = e.target.value ;
    let newval = '';
    val = val.replace(/\s/g, '');
    console.log(val);
    for(let i=0; i < val.length; i++) {
        if(i%4 === 0 && i > 0) newval = newval.concat(' ');
        newval = newval.concat(val[i]);
    }
    console.log(newval);
    setFormState((prev) => ({ ...prev, cardNumber: newval }));
    setFormErrors((prev) => ({ ...prev, cardNumber: "" }));
  };
  const validateForm = () => {
    const now = new Date();
    const currentMonth = now.getMonth() + 1;
    const currentYear = now.getFullYear();
    const errors = {};
    const keys = Object.keys(formState);
    let isFormContainError = false;
    for (let key of keys) {
      if (key === "firstName") {
        const isError = !formState[key]?.trim();
        errors[key] = isError ? "Enter First Name" : "";
        isFormContainError = isFormContainError || isError;
      } else if (key === "lastName") {
        const isError = !formState[key]?.trim();
        errors[key] = isError ? "Enter Last Name" : "";
        isFormContainError = isFormContainError || isError;
      } else if (key === "cardNumber") {
        const regx = /^\d+$/;
        const isError = !(
          regx.test(formState[key]?.split(" ").join("")) &&
          formState[key].length === 19
        );
        errors[key] = isError ? "Enter valid card number" : "";
        isFormContainError = isFormContainError || isError;
      } else if (key === "expireMonth") {
        const selectedYear = formState.expireYear;
        let isError = false;
        if (selectedYear === currentYear && formState[key] < currentMonth) {
          isError = true;
        }
        isError = isError || !formState[key];
        errors[key] = isError ? "Select valid month" : "";
        isFormContainError = isFormContainError || isError;
      } else if (key === "expireYear") {
        const isError = !formState[key];
        errors[key] = isError ? "Select valid year" : "";
        isFormContainError = isFormContainError || isError;
      } else if (key === "cvv") {
        const regx = /^\d+$/;
        const isError =
          !(regx.test(formState[key]) &&  formState[key].length === 3);
        errors[key] = isError ? "Enter valid cvv" : "";
        isFormContainError = isFormContainError || isError;
      }
    }
    return { isFormContainError, errors };
  };

  const handleSubmit=()=>{
    const {isFormContainError,errors} =validateForm();
    setFormErrors(errors);
    if(isFormContainError){
        return;
    }
    const transaction = data[0].transactions;
    const creditCardData = {
        id: Date.now(),
        firstName:formState.firstName,
        lastName:formState.lastName,
        availableAmount: 2500,
        validThrough:`${formState.expireMonth}/${formState.expireYear}`,
        cardNumber:formState.cardNumber.split(" ").join("-"),
        cvv:formState.cvv,
        transactions:transaction,
        isFrozen:false,
    }
   submitCardData((prev)=>[...prev,creditCardData]);
   handleModalToggle();
  }
  return (
    <FormContainer>
      <CloseModal onClick={handleModalToggle}>X</CloseModal>
      <InputContainer>
        <label for="fname">First Name</label>
        <Input
          type="text"
          id="fname"
          name="firstName"
          onChange={handleChange}
          value={formState.firstName}
          placeholder="First Name"
          error={!!errors.firstName}
        />
        <Error>{errors.firstName}</Error>
      </InputContainer>
      <InputContainer>
        <label for="lname">Last Name</label>
        <Input
          type="text"
          id="lname"
          name="lastName"
          placeholder="Last Name"
          error={!!errors.lastName}
          onChange={handleChange}
          value={formState.lastName}
        />
        <Error>{errors.lastName}</Error>
        
      </InputContainer>
      <InputContainer>
        <label for="cNumber">Card Number</label>
        <Input
          type="text"
          id="cNumber"
          name="cardNumber"
          placeholder="Card Number"
          onChange={handleCardChange}
          value={formState.cardNumber}
          error={!!errors.cardNumber}
        />
        <Error>{errors.cardNumber}</Error>
      </InputContainer>
      <label for="lname">Valid Thru</label>
      <SelectContainer>
        <Select
          name="expireMonth"
          onChange={handleChange}
          value={formState.expireMonth}
          error={!!errors.expireMonth}
        ><option value="" disabled="disabled">MM</option>
          {months.map((el) => {
            return (
              <option key={el} value={el}>
                {el}
              </option>
            );
          })}
        </Select>
        <Select
          name="expireYear"
          onChange={handleChange}
          value={formState.expireYear}
          error={!!errors.expireYear}
        >
        <option value="" disabled="disabled">YYYY</option>
          
          {years.map((el) => {
            return (
              <option key={el} value={el}>
                {el}
              </option>
            );
          })}
        </Select>
      </SelectContainer>
      <Error>{errors.expireMonth}</Error>
      <Error>{errors.expireYear}</Error>

      <InputContainer>
        <label for="lname">CVV</label>
        <Input
          type="text"
          id="lname"
          name="cvv"
          placeholder="Cvv"
          error={!!errors.cvv}
          onChange={handleChange}
          value={formState.cvv}
        />
        <Error>{errors.cvv}</Error>
        
      </InputContainer>
      <ButtonContainer>
        <CancelButton onClick={handleModalToggle}>Cancel</CancelButton>
        <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
      </ButtonContainer>
    </FormContainer>
  );
};

export default CreditCardForm;
