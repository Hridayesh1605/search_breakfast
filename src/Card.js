import React from 'react'

const Card = (props) => {
    return (
        <>

            <div className='item1 col-5 mx-2 '>
                <div className='row item-inside'>
                    <div className='col-6 img-div'>
                        <img src={props.img} alt='menu-iem' className='image-fluid' height={200} width={200}/>
                    </div>
                    <div className='col-6 '>
                        <div className='main-title pt-4 pb-3'>
                            <h1>{props.title}</h1>
                            <p>{props.description}</p>

                        </div>
                        <div className='menu-price-book'>
                            <div className='price-book-divide d-flex justify-content-between'>
                                <h2>Price:12</h2>
                                <a href='#'>
                                    <button className='btn btn-primary'>Order Now</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Card
