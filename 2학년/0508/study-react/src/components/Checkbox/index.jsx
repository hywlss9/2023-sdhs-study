function Checkbox({ onChange }) {
  const handleChecked = e => {
    onChange(e.target.checked);
  };

  return <input type='checkbox' onChange={handleChecked} />;
}

export default Checkbox;
