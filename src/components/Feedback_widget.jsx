import React from 'react'
import Crypto_input from './Crypto_input'

const Feedback_widget = (props) => {
    return (
        <>
            <div className="card bg-white rounded-md p-2">

                <div className="card-header bg-transparent py-3">
                    <div className="flex justify-between g-0">
                        <div className="title text-center">
                            <h5 className="text-[18px] p-0 m-0">Feedback widget</h5>
                        </div>
                        <div className="title text-center">
                            <h5 className="text-[18px] p-0 m-0">Cross 3x</h5>
                        </div>
                        <div className="title text-center">
                            <h5 className="text-[18px] p-0 m-0">Isolated 10x</h5>
                        </div>
                    </div>
                </div>

                <div className="card-body p-0">
                    <div className="mb-2">
                        <Crypto_input title="" left_text="Price" right_text="245.54 USDT" placeholder="" />
                    </div>
                    <div className="mb-2">
                        <Crypto_input title="" left_text="Amount" right_text="BTC" placeholder="" />
                    </div>

                    <div className="total my-6">
                        <div className="line flex justify-between items-center h-[2px] w-full rounded-full bg-gray-950 relative">
                            <div className="circle active"></div>
                            <div className="circle"></div>
                            <div className="circle"></div>
                            <div className="circle"></div>
                            <div className="circle"></div>
                        </div>
                    </div>
                </div>

                <div className="mb-2">
                    <Crypto_input title="" left_text="Total" right_text="BTC" placeholder="" />
                </div>

                <div className="card-footer m-0 p-0">
                    <div className="d-grid">
                        <button className={`btn btn-${props.btn_bg}`}>{props.btn_text}</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Feedback_widget