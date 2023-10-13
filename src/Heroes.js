import React, { useState } from 'react';




const Heroes = () => {
  const [names, setNames] = useState([
    "Шерлок Холмс",
    "Доктор Ватсон",
    "Профессор Мориарти",
    "Миссис Хадсон",
    "Ирен Адлер"
  ]);



  const handleDelete = (index) => {
    const updatedNames = names.filter((name, i) => i !== index);
    setNames(updatedNames);
  };



  return (
    <div>
      <h1>Список героев:</h1>
      <ul>
        {names.map((name, index) => (
          <li key={index} onClick={() => handleDelete(index)}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Heroes;