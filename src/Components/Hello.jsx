import React from 'react'

const Hello = (props) => {
    console.log(props);
    // const {name, message, seatNumber} = props;
    return (
        <div>
            {/* {props.message}{props.name}  */}
            {props.person.message} {props.person.name} {props.person.seatNumber.filter((num) => num%2 === 0)}
        </div>
    )
}

export default Hello;
