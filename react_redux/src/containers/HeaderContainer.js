import {connect} from 'react-redux'
import Header from '../components/Header';
import {addToCart} from '../Services/Actions/actions'

const mapStateToProps = state=>({
    data:state.cartItem
    
})

const mapDispatchToProps=dispatch=>({
    // addToCartHandler:data=>dispatch(addToCart(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(Header);