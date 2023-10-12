import React, { useState } from 'react';

const Detective = () => {
  const [sherlock, setSherlock] = useState("психопат  ");

  const handleClick = () => {
    setSherlock("высокоактивный социопат");
  };

  return (
    <div>
      Шерлок - {sherlock}
      <button onClick={handleClick}>  Узнать правду</button>
    </div>
  );
}

export default Detective;
