import './Home.css'
import { useState, useEffect } from 'react'
import CatMap from './CatMap';
import CatInfo from './CatInfo'
import CatData from './data/cat-info.json'

function Home(){

    const data = CatData

    return (
        <div id='catinfo'>
            <h2>CATS</h2>
            <CatMap data={data}/>
            <div>
                {data.cats.map(cat => (
                    <CatInfo cats={cat}/>
                ))}
            </div>
 
        </div>
    )
}

export default Home