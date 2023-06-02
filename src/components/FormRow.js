import Wrapper from '../assets/wrappers/FormRow';

const FormRow = ({ name, value, label, options, handleChange }) => {
  return (
    <Wrapper className="form-row">
      <h5>{label}</h5>
      <select
        id={name}
        name={name}
        className={name}
        onChange={handleChange}
        value={value}
      >
        {options.map((option, index) => (
          <option key={index}>{option}</option>
        ))}
      </select>
    </Wrapper>
  );
};
export default FormRow;
