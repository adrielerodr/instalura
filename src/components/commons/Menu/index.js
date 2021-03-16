import React from 'react';
import PropTypes from 'prop-types';
import MenuWrapper from './styles/MenuWrapper';
import Button from '../Button';
import Logo from '../../../theme/Logo';
import { Text } from '../../foundation/Text';
import Link from '../Link';

const Menu = ({ onCadastrarClick }) => {
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
            <Text variant="smallestException" tag={Link} href={link.url}>
              {link.name}
            </Text>
          </li>
        ))}
      </MenuWrapper.Central>
      <MenuWrapper.RightSide>
        <Button variant="secondary.main" ghost href="/app/login">
          Login
        </Button>
        <Button variant="primary.main" onClick={onCadastrarClick}>
          Sign up
        </Button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  );
};

export default Menu;

Menu.propTypes = {
  onCadastrarClick: PropTypes.func.isRequired,
};
