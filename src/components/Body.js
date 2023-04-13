import React, { useState, useEffect} from 'react';
import {Banner} from './Banner'
import {Products} from './Products'
import {productsData, mf} from '../api/api'

export const Body = () => {
    const [prods, setProds] = useState('[]')
    
   fetch('https://fakestoreapiserver.reactbd.com/products')
        .then(res => res.json())
        .then((json) => {
            setProds(JSON.stringify(json))
        })
    
   // alert(React js motherfucker)
    return (
        <div>
            <Banner />
            <Products products={prods} />
        </div>
    )
}

