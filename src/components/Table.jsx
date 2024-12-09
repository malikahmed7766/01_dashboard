import React from 'react'

const Table = (props) => {
    return (
        <>
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th className="font-medium">Symbol</th>
                            <th className="font-medium">Last</th>
                            <th className="font-medium">Change</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="">
                            <td>YESB</td>
                            <td>281.15</td>
                            <td>-4.80</td>
                        </tr>
                        <tr className="">
                            <td>YESB</td>
                            <td>281.15</td>
                            <td>-4.80</td>
                        </tr>
                        <tr className="">
                            <td>YESB</td>
                            <td>281.15</td>
                            <td>-4.80</td>
                        </tr>
                        <tr className="">
                            <td>YESB</td>
                            <td>281.15</td>
                            <td>-4.80</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Table