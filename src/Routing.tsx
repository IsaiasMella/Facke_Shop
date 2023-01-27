import React from 'react'
import { Route } from 'react-router'
import { Routes } from 'react-router-dom'
import { RouterLayout } from './Common/RouterLayout'
import { AllProducts } from './Pages/AllProducts'
import { Home } from './Pages/Home'
import { ProductPage } from './Pages/ProductPage'
import { Shopping } from './Pages/Shopping'

const AppRouting: React.FC<{}> = () => {
    return (
        <Routes>
            <Route path='/' element={<RouterLayout />} >
                <Route path='/' element={<Home />} />
                <Route path='/:id' element={<ProductPage />} />
                <Route path='/cart' element={<Shopping />} />
                <Route path='/products' element={<AllProducts />} />
                <Route path='/products/:product' element={<AllProducts />} />
            </Route>
        </Routes>
    )
}

export default AppRouting