import React from 'react'

const Home =(props)=>{
    // console.warn('Home', props.data)
    return(
        <div>
            <h1>Mobile phone</h1>
            <div className='cart_wrapper'>
                <div className='img_wrapper item'>
                    <img src='https://fdn2.gsmarena.com/vv/pics/google/google-pixel-9-1.jpg'/>
                </div>
                <div className='txt_wrapper item'>
                    <span className='device'>
                        Google Pixel 9
                    </span>
                    <br></br>
                    <span className='price'>
                        Price : $999
                    </span>
                </div>
                <div className='btn_wrapper item'>
                    <button className='add-btn'
                        onClick={()=>props.addToCartHandler({price:900, device: 'Pixel 9'})}>
                        Add To Cart</button>
                    <button className='remove-btn' 
                        onClick={()=>props.removeFromCartHandler()}>
                        Remove</button>
                </div>
            </div>
        </div>
    )
}

export default Home;