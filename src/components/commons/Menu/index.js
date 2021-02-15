import { MenuWrapper } from './styles/MenuWrapper';
import { Logo } from '../../../theme/Logo';

export default function Menu() {
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
            <li>
              <a href={link.url} >
                {link.name}
              </a>
            </li>
          ))
        }
      </MenuWrapper.Central>
      <MenuWrapper.RightSide>
        <button>
          Login
        </button>
        <button>
          Sign up
        </button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  )
}