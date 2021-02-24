import React from 'react';
import MenuWrapper from './styles/MenuWrapper';
import Button from '../Button';
import Logo from '../../../theme/Logo';
import { Text } from '../../foundation/Text';

const Menu = () => {
  const buttonsList = [
    {
      name: 'Home',
      url: '/',
    },
    {
      name: 'FAQ',
      url: '/faq',
    },
    {
      name: 'About',
      url: '/about',
    },
  ];
  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        <Logo />
      </MenuWrapper.LeftSide>
      <MenuWrapper.Central>
        {buttonsList.map((link) => (
          <li key={link.url}>
            <Text variant="smallestException" tag="a" href={link.url}>
              {link.name}
            </Text>
          </li>
        ))}
      </MenuWrapper.Central>
      <MenuWrapper.RightSide>
        <Button variant="secondary" ghost>
          Login
        </Button>
        <Button variant="primary">
          Sign up
        </Button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  );
};

export default Menu;
