import React from 'react'
import styled from 'styled-components'

const Button = (props) => {
    const classNames = new Array(2)

    if (props.colored) classNames.push('colored')
    if (props.size) classNames.push(props.size)

    return (
        <ButtonDiv className={ classNames } onClick={ props.onClick? props.onClick : null } type={ props.type? props.type : null }>
            { props.href? 
                <a href={ props.href }>{ props.value }</a>
                : <p>{ props.value }</p>
            }
        </ButtonDiv>
    )
}

const ButtonDiv = styled.button`
	padding: 7.5px 0;
	border-radius: 5px;
	border-style: none;
	border 1px solid grey;
	box-sizing: border-box;
	font-size: 15.5px;
	outline: none;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;

    &.small {
        width: 90px;
    }

    &.colored {
        background-color: rgb(0, 245, 0);
    }

    a {
        text-decoration: none;
    }

	:active {
		box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.5) inset;
		transform: scale(0.98);
	}
`

export default Button;