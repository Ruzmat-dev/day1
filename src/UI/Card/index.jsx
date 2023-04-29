import React from 'react'
import "./style.scss"

const index = (props) => {

    const { data:{avatar, email,name , role , status} } = props; 

    const cardStyle ={
        borderRadius:"20px"
    }

    return (
        <div className='card' style={cardStyle}>
            <img src={avatar} alt="rasm" className="card-img" />
            <div className="card-body">
                <h3 className="card-title">
                    {name}
                </h3>
                <p className="card-text">{role}</p>
                <div className="card--btn-wrapper">
                    <div className={status ? "card--btn-wrapper-success" : "card--btn-wrapper-denger"}>
                        { status ? "Online" : "Offline" }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index