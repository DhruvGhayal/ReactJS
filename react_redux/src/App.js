import './App.css';
// import User from './User';
import HomeContainer from './containers/HomeContainer';
import HeaderContainer from './containers/HeaderContainer';

function App() {
  return (
    <div className="App">
        {/* <Home/> */}
        <HeaderContainer/>
        <HomeContainer/>
        {/* <User data={{name:"Dhruv",email:"ghayal@test.com", contact:"123456"}} /> */}
    </div>
  );
}

export default App;
