import React from 'react';
import styled, { css } from 'styled-components';
import get from 'lodash/get';
import PropTypes from 'prop-types';

const textStyle = ({ theme, variant }) => css`
  font-size: ${theme.typographyVariants[variant].fontSize};
  font-weight: ${theme.typographyVariants[variant].fontWeight};
  line-height: ${theme.typographyVariants[variant].lineHeight};
`;

export const TextStyleVariants = {
  smallestException: ({ theme }) => textStyle({theme, variant: 'smallestException'}),
  paragraph1: ({ theme }) => textStyle({theme, variant: 'paragraph1'}),
};

const TextBase = styled.span`
  ${({ variant }) => TextStyleVariants[variant]}
  color: ${({ theme, color }) => get(theme, `colors.${color}.color`)};
`;

export function Text({
  variant,
  children,
  tag,
  ...props
}) {
  return (
    <TextBase
      as={tag}
      variant={variant}
      {...props}
    >
      {children}
    </TextBase>
  );
}

Text.defaultProps = {
  tag: 'span',
  variant: 'paragraph1',
};

Text.propTypes = {
  children: PropTypes.node.isRequired,
  tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'p', 'li', 'a', 'span']),
  variant: PropTypes.oneOf(['paragraph1', 'smallestException']),
}; 