import styled, { css } from 'styled-components';
import { TextStyleVariants } from '../../foundations/Text';
import { breakpointsMedia } from '../../../theme/utils/breackpointsMedia';

const ButtonGhost = css`
  color: ${({ theme, variant }) => `${theme.colors[variant].main.color}`};
  background-color: transparent;
`;

const ButtonDefault = css`
  color: ${({ theme, variant }) => `${theme.colors[variant].main.contrastText}`};
  background-color: ${({ theme, variant }) => `${theme.colors[variant].main.color}`};
`;

export const Button = styled.button`
  ${TextStyleVariants.smallestException}
  ${breakpointsMedia({
    xs: css`
      ${TextStyleVariants.smallestException}
    `,
    md: css`
      padding: 12px 43px;
      ${TextStyleVariants.paragraph1}
    `,
  })}
  border: 0;
  cursor: pointer;
  padding: 12px 26px;
  font-weight: bold;
  opacity: 1;
  transition: opacity ${({ theme }) => theme.transition};
  border-radius: ${({ theme }) => theme.borderRadius};
  ${({ ghost }) => (ghost ? ButtonGhost : ButtonDefault)}
  &:hover,
  &:focus {
    opacity: .5;
  }
`;
