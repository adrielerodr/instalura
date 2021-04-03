/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import get from 'lodash/get';
import { TextStyleVariantsMap } from '../../foundation/Text';
import propToStyle from '../../../theme/utils/propToStyle';
import breakpointsMedia from '../../../theme/utils/breackpointsMedia';
import Link from '../Link';

const ButtonGhost = css`
  background-color: transparent;
  color: ${(props) => get(props.theme, `colors.${props.variant}.main.color`)};
`;

const ButtonDefault = css`
  background-color: ${function (props) {
    return get(props.theme, `colors.${props.variant}.color`);
  }};
  color: ${function (props) {
    return get(props.theme, `colors.${props.variant}.contrastText`);
  }};
`;

const ButtonWrapper = styled.button`
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

export default function Button({ href, children, ...props }) {
  const hasHref = Boolean(href);
  const tag = hasHref ? Link : 'button';

  return (
    <ButtonWrapper
      as={tag}
      href={href}
      {...props}
    >
      {children}
    </ButtonWrapper>
  );
}

Button.defaultProps = {
  href: '/',
};

Button.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
};
