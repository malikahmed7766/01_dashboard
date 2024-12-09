import React from 'react'

function Search(props) {
    return (
        <div className="search">
            <form action="">
                <div className="search-input flex items-center px-3 py-2 bg-gray-200 border border-gray-200 rounded-md">
                    <button className="text-slate-400 hover:text-gray-500" type="button"><i className="fa fa-search"></i></button>
                    <input type="text" className="block w-full bg-transparent border-transparent px-3 outline-none" name="search" id="searcInput" placeholder={props.placeholder}/>
                </div>
            </form>
        </div>
    )
}

export default Search
