import React from 'react'
import clsx from 'clsx'
const Button = ({icon, label, type, className, onClick=()=>{}})=>{
    return(
        <div>
            <button
            type={type || 'button'}
            className={clsx("py-2",className)}
            >
                <span>{label}</span>
                {icon && icon}
            </button>
        </div>
    )
}

export default Button
