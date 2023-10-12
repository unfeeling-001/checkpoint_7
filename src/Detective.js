import React, { useState } from 'react';

const Detective = () => {
  const [sherlock, setSherlock] = useState("психопат");

  return (
    <div>
      Шерлок - {sherlock}
    </div>
  );
}

export default Detective;
