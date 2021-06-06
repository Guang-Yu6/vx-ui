import React from 'react'

function Button(props) {
    return (
        <div onClick={props.onClick}>
            <button>
                {props.label}
            </button>
            {props.children}
        </div>

    )
}

export default Button;
