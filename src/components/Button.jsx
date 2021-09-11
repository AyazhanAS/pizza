

import classNames from 'classnames'
import React from 'react'

export default function Button({onCl, className, outline, children}) {

    
    return (
        <div>
           
             <button onClick = {onCl}
              className={classNames("button", className,{
                "button--outline":outline
              })}>{children}</button>
            
        </div>
    )
}

