import PropTypes from 'prop-types';
import { useState } from "react";

export const AddCategory = ({ value, onAddCategory }) => {
  const [input, setinput] = useState('');

  const onChange = ({ target }) => {
    setinput(target.value);
  }
  const onSubmit = (event) => {
    event.preventDefault();

    if (input.trim().length <= 1) return;

    onAddCategory(input.trim().toLowerCase())
    setinput('');
  }

  return (
    <form onSubmit={onSubmit}>
      <input type='text' placeholder='Buscar' value={input} onChange={onChange} />
      <button type="submit">Agregar Categoria</button>
    </form>
  )
}

AddCategory.propTypes = {
  value: PropTypes.string.isRequired
}

AddCategory.defaultProps = {
  value: ''
}