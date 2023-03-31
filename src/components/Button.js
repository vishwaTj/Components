import React from 'react';
import className from 'classnames';

const Button = ({
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
    ...rest //sending the rest of the event handler props into a rest obj
}) => {
  //here rest.clasName sends the entire class names as a single huge string so individually declared classes later on do not get overriden
  const classes = className(rest.className,'flex items-center px-3 py-1.5 border',{
    'border-blue-500 bg-blue-500':primary,
    'border-gray-900 bg-gray-900':secondary,
    'border-green-500 bg-green-500':success,
    'border-yellow-400 bg-yellow-400':warning,
    'border-red-500 bg-red-500':danger,
    'rounded-full': rounded,
    'text-white':
      !outline && (primary || secondary || success || warning || danger),  
    'bg-white': outline,
    'text-blue-500': outline && primary,
    'text-gray-900': outline && secondary,
    'text-green-500': outline && success,
    'text-yellow-400': outline && warning,
    'text-red-500': outline && danger,
  })

  return <button {...rest} className={classes}>{children}</button>;
}

Button.propTypes = {
    checkVariationValue: ({primary,secondary,success,warning,danger}) =>{
        const count = Number(!!primary)
        + Number(!!secondary)
        + Number(!!warning)
        + Number(!!success)
        + Number(!!danger)

        if(count>1){
            return new Error('please pass a single value out of primary,secondary,success,warning,danger,outline,rounded');
        }
    },
};


export default Button;