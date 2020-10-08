import React from 'react';
import { StyledButton } from './StyledButton';

const Button = ({ children, tag, as, href, icon, target, ...rest }) => {
  return (
    <React.Fragment>
      {
        href ?
          <StyledButton
            as={!as && tag ? tag : as}
            href={href && href}
            target={target && target}
            {...rest}
          >
            {children}
            {icon}
          </StyledButton>
          :
          <StyledButton
            as={!as && tag ? tag : as}
            {...rest}
          >
            {children}
          </StyledButton>
      }
    </React.Fragment>
  );
};

Button.propTypes = {};

Button.defaultProps = {
  tag: "button",
};

export default Button;
