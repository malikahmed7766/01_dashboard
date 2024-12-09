import React from 'react'

const Progress = (props) => {
    return (
        <>
            <div className="">
                <div className="flex justify-between items-center">
                    <div className="left">
                        <div className="flex items-center gap-1">
                            <div className={`icon flex justify-center items-center w-8 h-8 bg-orange-300 text-l rounded-full`}>
                               <img src={props.icon_img} alt="icon" className="" />
                            </div>
                            <h4 className="font-bold">{props.coin_title}</h4>
                        </div>
                    </div>
                    <div className="right">
                        <span className="font-bold">$648,83</span>
                    </div>
                </div>
                <div className="flex items-center gap-1">
                    <div className="w-3/4">
                        <div className="progress h-2 bg-black">
                            <div className={`progress-bar bg-${props.progress_bg} w-3/4`}></div>
                        </div>
                    </div>
                    <div className="">
                        <span className="font-light">$648,83</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Progress
