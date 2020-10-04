//Node Modules
import { useState } from 'react';
import Head from 'next/head';

//Components
import { BasicButton, BasicWrapper } from '@/styled-components/index';

export default function Home() {
  const [pinkButton, togglePinkButton] = useState(false);

  return (
    <>
      <p>Some Text</p>
      <p>Some Other Text</p>
      {pinkButton ? (
        <BasicButton onClick={() => togglePinkButton(false)}>
          Hello I'm a Button
        </BasicButton>
      ) : (
        <BasicButton blue onClick={() => togglePinkButton(true)}>
          Hello I'm a Button
        </BasicButton>
      )}
    </>
  );
}
