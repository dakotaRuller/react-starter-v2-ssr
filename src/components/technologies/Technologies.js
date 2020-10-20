//Node Modules
import React, { useState } from 'react';

//Styled Components
import StyledTechnologies from '@/styled-components/technologies/StyledTechnologies';

const Technologies = () => {
  const [technologiesList, updateTechnologiesList] = useState([
    {
      name: 'Next.js',
      link: 'https://nextjs.org/',
      description: 'A React framework built to create SSR and static web apps.',
    },
    {
      name: 'React.js',
      link: 'https://reactjs.org/',
      description:
        'A javascript framework used for the UI and functionality of the front end.',
    },
    {
      name: 'Styled Components',
      link: 'https://styled-components.com/docs',
      description: 'Styling and UI.',
    },
    {
      name: 'Jest',
      link: 'https://jestjs.io/',
      description: 'Javascript and react testing frameworks.',
    },
    {
      name: 'Enzyme',
      link: 'https://enzymejs.github.io/enzyme/',
      description: 'Testing utility for react applications',
    },
    {
      name: 'Prettier',
      link: 'https://prettier.io/',
      description: 'Code formatter',
    },
  ]);
  return (
    <StyledTechnologies>
      <h2>Technologies</h2>
      <p>
        Below is a complete list of the technologies used in this application to
        make it work as seamlessly as it does.
      </p>
      <ul className={'technologies-list'}>
        {technologiesList.map(({ name, link, description }) => (
          <li>
            <a className={'styled-link'} href={link} target={'_blank'}>
              {name}
            </a>
            <div className={'content-separator'} /> <p>{description}</p>
          </li>
        ))}
      </ul>
    </StyledTechnologies>
  );
};

export default Technologies;
