import React from 'react'

function Header({setSearch}) {
    return(
        <div>
            <div className='searchInput'><input placeholder={'Search pokemon'} type="text"
                                                onChange={(e) => setSearch(e.target.value)}/></div>
        </div>
    )
}
export default Header
