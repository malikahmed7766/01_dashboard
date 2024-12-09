import React from 'react'
import Coin_list from './Coin_list'
import Bitcoin_img from '../assets/img/bitcoin.jpg'

const Crypto = (props) => {
    return (
        <>
            <div className="crypto-item">
                <h4 className="md:text-xl font-light md:font-bold">Crypto useful Links</h4>
                <div className="crypto-icon my-3">
                    <Coin_list icon_img={Bitcoin_img} coin_title="Bitcoin" bg_color="orange" />
                </div>
                <div className="crypto-input flex items-center bg-gray-800 text-white rounded-md px-2 py-2">
                    <input type="text" className="w-full bg-transparent outline-none px-2" name="" id="" placeholder={props.placeholder} />
                    <button className="link-icon"><i className="fa fa-solid fa-link"></i></button>
                </div>
            </div>
        </>
    )
}

export default Crypto