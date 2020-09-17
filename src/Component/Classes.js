import React from 'react'

const Classes = (props) => {
    return (
        <div className="classes">

            <div className="tabs__col">
                <h2>{props.subject}</h2>
                <h3>Doubt Class - 5th to 8th</h3>
                <p>{props.department}</p>
                <p>Grade {props.grade}</p>
                <p className="date">{props.date}</p>
                <p>{props.taken}</p>
                <p><strong>{props.teacher}</strong></p>
                <div className="tabs__col__education">
                    <p>{props.education}</p>
                    <img src={props.img} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Classes
