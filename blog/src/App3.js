import './App.css';
import Hook5 from './tutorials/11_Hooks/5_forwardRef';
// import Hook1 from './tutorials/11_Hooks/1_useEffect';
// import Hook2 from './tutorials/11_Hooks/2_1_conditional_useEffect';
// import Calc from './tutorials/11_Hooks/3_useMemo_similarToPureComponent';
// import Hook4 from './tutorials/11_Hooks/4_useRef';
import { useRef } from 'react';
function App3() {   

  let inpRef = useRef(null)
  const updateInput=()=>{
    inpRef.current.value = "1000"
  }
    return (
    <div className="App">

        {/* 1 to 9 */}
        {/* Check App1.js file */}

        {/* 10 Life Cycle Methods  */}
        {/* Check App2.js file */}

        {/* 11 Hooks */}
          {/* 11.1 useEffect */}
          {/* <Hook1/> */}

          {/* 11.2 conditional useEffect */}
          {/* <Hook2/> */}

          {/* 11.3 useMemo */}
          {/* <Calc/> */}

          {/* 11.4 useRef */}
          {/* <Hook4/> */}

          {/* 11.5 forwardRef */}
          <h1>forwardRef</h1>
          <Hook5 ref={inpRef}/>
          <button onClick={updateInput}>Update</button>

    </div>
  );
}


export default App3;
