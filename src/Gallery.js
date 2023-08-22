import React, { useState } from 'react'
import Card from './Card'
import data from './data'
import Menu from './Menu';

const updateMenu = [...new Set (data.map((curr)=> curr.category )),"all"]

console.log(updateMenu);


const Gallery = () => {

    const [item, setItem] = useState(data);
    const [menu,setMenu] = useState(updateMenu);

    const filterItem = (cate) => {


        if(cate==="all"){
            setItem(data);
            return;
        }
        const updateItem = data.filter((elem) => {
            return elem.category === cate;
        })

        setItem(updateItem);
    }

    return (
        <>
            <h1 className='mt-2 text-center main-heading'> Our Services for today</h1>
            <hr />
            <div className='container'>
            
                <Menu filterItem={filterItem} menu={menu}/>

                <div className='menu-items container-fluid mt-5 ' >
                    <div className='row'>
                        <div className='col-11 mx-auto'>
                            <div className='row my-5'>


                                {item.map((elem) => {
                                    const { id, image, title, category, description } = elem;
                                    return (
                                        <Card key={id} img={image} title={title} category={category} description={description} />

                                    )
                                })}


                            </div>
                        </div>
                    </div>
                </div>


            </div>


        </>
    )
}

export default Gallery
