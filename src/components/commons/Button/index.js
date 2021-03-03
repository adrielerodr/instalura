import styled, { css } from 'styled-components';
import get from 'lodash/get';
import { TextStyleVariantsMap } from '../../foundation/Text';
import propToStyle from '../../../theme/utils/propToStyle';
import breakpointsMedia from '../../../theme/utils/breackpointsMedia';

const ButtonGhost = css`
  background-color: transparent;
  color: ${(props) => get(props.theme, `colors.${props.variant}.main.color`)};
`;

const ButtonDefault = css`
  background-color: ${function (props) {
    return get(props.theme, `colors.${props.variant}.main.color`);
  }};
  color: ${function (props) {
    return get(props.theme, `colors.${props.variant}.main.contrastText`);
  }};
`;

const Button = styled.button`
  border-radius: 8px;

  ${TextStyleVariantsMap.smallestException}

  ${function (props) {
    if (props.ghost) {
      return ButtonGhost;
    }
    return ButtonDefault;
  }}

  ${breakpointsMedia({
    xs: css`
      ${TextStyleVariantsMap.smallestException}
    `,
    md: css`
     ${TextStyleVariantsMap.paragraph1}
    `,
  })}

  &:disabled {
    cursor: not-allowed;
    opacity: .2;
  }
  ${({ fullWidth }) => fullWidth && css`
    width: 100%;
  `};

  ${propToStyle('margin')}
  ${propToStyle('display')}

  border: 0;
  cursor: pointer;
  padding: 12px 26px;
  font-weight: bold;
  opacity: 1;
  transition: opacity ${({ theme }) => theme.transition};
  border-radius: ${(props) => props.theme.borderRadius};
  &:hover,
  &:focus {
    opacity: .5;
  }
`;

export default Button;
