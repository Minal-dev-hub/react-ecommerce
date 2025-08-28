import React,{useContext} from 'react'
import Layout from '../../components/layout/Layout'
import myContext from '../../context/data/myContext'
import HeroSection from '../../components/heroSection/HeroSection'
import Filter from '../../components/filter/Filter'
import ProductCard from '../../components/productCard/ProductCard'
import Testimonial from '../../components/testimonial/Testimonial'
import Track from '../../components/track/Track'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, deleteFromCart } from '../../redux/cartSlice'


const Home = () => {
  const dispatch = useDispatch()
  const cartItem =useSelector((state)=>state.cart)

  const addCart =( ) => {
    dispatch(addToCart("shirt"))
  }

  const deleteCart =() => {
  dispatch(deleteFromCart("shirt"))
  }
    
  return (
    <Layout>
      <div className="flex gap-5 justify-center">
        <button onClick={() => addCart()} className='bg-gray-300 text-white p-5 m-2 rounded'>Add to cart</button>
        <button onClick={() => deleteCart()} className='bg-gray-300 text-white p-5 m-2 rounded'>Delete from cart</button>
        <h1 className='text-2xl m-2'>Cart Item: {cartItem.length}</h1>
      </div>
      <HeroSection />
      <Filter />
      <ProductCard />
      <Track />
      <Testimonial />
    </Layout>
  )
}

export default Home
