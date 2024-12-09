import React from 'react'

const Crypto_input = (props) => {
    return (
        <>
            <div className="crypto-item">
                <h4 className="md:text-xl font-light md:font-bold">{props.title}</h4>
                <div className="crypto-input flex items-center bg-gray-800 text-white rounded-md px-2 py-2">
                    <div className="input-group">
                        <span className="input-group-text bg-transparent border-transparent text-white">{props.left_text}</span>
                        <input type="text" className="form-control bg-transparent border-transparent focus:shadow-none placeholder:text-white px-2 text-white" name="" id="" placeholder={props.placeholder} />
                        <span className="input-group-text bg-transparent border-transparent text-white">{props.right_text}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Crypto_input