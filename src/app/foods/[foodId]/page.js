import React from 'react';

const FoodsDetails = async ({params}) => {
    const { foodId }= await params;
    const food = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/foods/${foodId}`);
    const foodData = await food.json();
    const data = foodData.data;
    console.log(data);
    

    return (
        <div>
           <h1>{data.dish_name}</h1>
        </div>
    );
};

export default FoodsDetails;