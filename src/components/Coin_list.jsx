import React from 'react'

const Coin_list = (props) => {
    return (
        <>
            <div className="coin flex items-center gap-2">
                <div className={`icon flex justify-center items-center w-8 h-8 bg-yellow-400 text-l rounded-full`}>
                    <img src={props.icon_img} alt="coin" className="" />
                </div>
                <div className="info">
                    <h4 className="h5 mb-0">{props.coin_title}</h4>
                </div>
            </div>
        </>
    )
}

export default Coin_list