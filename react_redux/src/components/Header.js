import React from 'react'

const Header =(props)=>{
    console.warn('Home', props.data)
    return(
        <div>
            <div className='add-to-cart'>
                <span className='cart_count'>{props.data.length}</span>
                <img src='https://cdn.pixabay.com/photo/2015/12/23/01/14/edit-1105049_1280.png'/>
            </div>
        </div>
    )
}

export default Header;