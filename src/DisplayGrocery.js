import React from 'react';

const DisplayGrocery = (props) => {
    const {grocery} = props
    console.log(grocery)
    return (
        <>
        {grocery.map((item)=>{
            return(
                <React.Fragment key={item.prod_id}>
                <h2>Product Name : {item.productName}</h2>
                <p>Product Price : {item.productPrice}</p>
                <p>Product ID: {item.prod_id}</p>
                <p></p>
                </React.Fragment>
            )
        })}
        </>
    )
    
};

export default DisplayGrocery;