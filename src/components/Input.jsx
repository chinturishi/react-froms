const Input = ({ lable, id, name, value, onChange, error }) => {
  return (
    <div className="input-container">
      <label htmlFor={id}>{lable}</label>
      <input id={id} name={name} value={value} onChange={onChange} />
      <p className="error">{error}</p>
    </div>
  );
};

export default Input;
