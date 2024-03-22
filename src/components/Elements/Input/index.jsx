import PropTypes from "prop-types";

const Input = (props) => {
  const {
    className = "",
    name,
    onChange = () => {},
    placeholder = "",
    defaultValue = "",
  } = props;
  return (
    <input
      type="text"
      name={name}
      className={`border px-1.5 py-1 rounded w-full ${className}`}
      onChange={onChange}
      placeholder={placeholder}
      defaultValue={defaultValue}
      required
    />
  );
};

Input.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  defaultValue: PropTypes.string,
};

export default Input;
