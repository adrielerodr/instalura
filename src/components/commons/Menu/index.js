import { MenuWrapper } from './styles/MenuWrapper';
import { Button } from '../Button';
import { Logo } from '../../../theme/Logo';
import { Text } from '../../foundations/Text';

export const Menu = () => {
  const buttonsList = [
    {
      name: 'Home',
      url: '/'
    },
    {
      name: 'FAQ',
      url: '/faq'
    },
    {
      name: 'About',
      url: '/about'
    },
  ]
  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        <Logo />
      </MenuWrapper.LeftSide>
      <MenuWrapper.Central>
        {
          buttonsList.map(link => (
            <li key={link.url}>
              <Text tag="a" variant="smallestException" href={link.url}>
                {link.name}
              </Text>
            </li>
          ))
        }
      </MenuWrapper.Central>
      <MenuWrapper.RightSide>
        <Button type="button" variant="secondary" ghost>
          Login
        </Button>
        <Button type="button" variant="primary">
          Sign up
        </Button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  )
}