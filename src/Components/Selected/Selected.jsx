import React from 'react';
import Sold from './sold';
const Selected = ({purchases , handleRemove}) => {

    return (

<div>
        {
                 
          purchases.map(purchase => <Sold handleRemove ={handleRemove} purchase = {purchase}></Sold>


          )
        }
             </div>
        
    );
};

export default Selected;