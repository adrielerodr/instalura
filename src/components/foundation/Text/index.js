/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled, { css } from 'styled-components';
import get from 'lodash/get';
import PropTypes from 'prop-types';
import propToStyle from '../../../theme/utils/propToStyle';
import breakpointsMedia from '../../../theme/utils/breackpointsMedia';

const textStyle = ({ theme, variant }) => css`
  font-size: ${theme.typographyVariants[variant].fontSize};
  font-weight: ${theme.typographyVariants[variant].fontWeight};
  line-height: ${theme.typographyVariants[variant].lineHeight};
`;

export const TextStyleVariantsMap = {
  smallestException: ({ theme }) => textStyle({ theme, variant: 'smallestException' }),
  paragraph1: ({ theme }) => textStyle({ theme, variant: 'paragraph1' }),
  title: css`
    ${({ theme }) => textStyle({ theme, variant: 'titleXS' })}
    ${breakpointsMedia({
    md: ({ theme }) => textStyle({ theme, variant: 'title' }),
  })
}`,
};

const TextBase = styled.span`
  ${(props) => TextStyleVariantsMap[props.variant]}
  color: ${(props) => get(props.theme, `colors.${props.color}.color`)};
  ${propToStyle('textAlign')}
  ${propToStyle('marginBottom')}
  ${propToStyle('margin')}
`;

export function Text({
  variant,
  children,
  tag,
  href,
  ...props
}) {
  if (href) {
    return (
      <TextBase
        as={tag}
        variant={variant}
        href={href}
        {...props}
      >
        {children}
      </TextBase>
    );
  }

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
  children: null,
  variant: 'paragraph1',
  href: PropTypes.string,
};

Text.propTypes = {
  href: '',
  tag: PropTypes.string,
  variant: PropTypes.string,
  children: PropTypes.node,
};
