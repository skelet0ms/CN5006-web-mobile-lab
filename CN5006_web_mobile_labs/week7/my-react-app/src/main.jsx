import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Welcome from './MyApp.jsx'
import Product from './Product.jsx'
import Discount from './DiscountCalculator.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Welcome name="Tom" />
    <Product   productName="Laptop" price={800} /> 
    <Discount productName="Headphones" price={100} />
  </StrictMode>
)
