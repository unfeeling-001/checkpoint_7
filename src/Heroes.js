import React, { useState } from 'react';

const Heroes = () => {
  const [names, setNames] = useState([
    "Шерлок Холмс",
    "Доктор Ватсон",
    "Профессор Мориарти",
    "Миссис Хадсон",
    "Ирен Адлер"
  ]);

  return (
    <div>
      <h1>Список героев:</h1>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Heroes;