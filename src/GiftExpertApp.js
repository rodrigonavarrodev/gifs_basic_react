import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GiftGrid } from './components/GiftGrid'

export const GiftExpertApp = () => {

    //const categorias = ['Ferrari', 'RedBull', 'Mercedes']
    
    const [categories, setCategories] = useState(['Ferrari'])

    // const manejarBotonAgregar = ( ) => {
    //     setCategorias([...categorias, 'Williams'])
    // }

    return (
        <>
            <h2>GiftExpertApp</h2>
            < AddCategory setCategories={ setCategories } />
            <hr />


            <ol>
                {
                    categories.map( category => {
                       return < GiftGrid 
                        key= { category }
                        category = { category } />
                    })
                }
            </ol>

        </>
    )
}
