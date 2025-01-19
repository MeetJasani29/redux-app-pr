import React from 'react'

function Header() {
    return (
        <>
            <div className='header mt-1'>
                <img src="./public/logo.png" alt="logo" target="logo" className='me-lg-3 ms-lg-1' />
                <h3 className='title text-white'>Google Keep</h3>
            </div>
        </>
    )
}

export default Header