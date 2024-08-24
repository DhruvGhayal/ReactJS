import './13_1_cssStyling.css'
import style from './13_2_custom.module.css'

const Styling=()=>{
    return(
        <div>
            <h1 className='primary'>Method 1. importing from css file</h1>
            <h1 style={{color:'green',backgroundColor:'black'}}>Method 2. in line</h1>
            <h1 className={style.sucess} >Method 3. Module css</h1>
        </div>
    )
}

export default Styling;