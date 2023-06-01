import React, { useState, useEffect, useLayoutEffect } from 'react';

function Example() {
  const [color, setColor] = useState('red');

  useLayoutEffect(() => {
    // Изменяем цвет элемента на зеленый после рендера
    setColor('green');
  }, []);

  useEffect(() => {
    // Логируем текущий цвет элемента
    console.log(`Color is ${color}`);
  }, [color]);

  return <div style={{ background: color }}>Hello, world!</div>;
}