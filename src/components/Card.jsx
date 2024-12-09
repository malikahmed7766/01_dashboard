import React from 'react'

function Card(props) {
    return (
        <>
            <div className="card">
                <div className="card-header object-cover p-0 bg-transparent">
                    <img className="card-img block mx-auto md:h-52" src={props.crd_img} alt="card" />
                </div>
                <div className="card-body text-center">
                    <h4 className="card-title text-[1.12rem] md:text-xl md:font-semibold">{props.title}</h4>
                    <p className="card-text font-light">{props.desc}</p>
                </div>
                <div className="card-footer bg-transparent">
                    <div className="d-grid">
                        <button className="btn btn-dark">Read More</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card