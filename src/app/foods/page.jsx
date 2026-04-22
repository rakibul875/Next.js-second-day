import FoodsCard from '@/components/FoodsCard';
import React from 'react';

const FoodsData =async () => {
    const foods=await fetch('https://phi-lab-server.vercel.app/api/v1/lab/foods')
    const foodsData=await foods.json()
    return (
        <div className='container grid grid-cols-3 gap-8 mx-auto my-16'>
           {
            foodsData.data.map(food=><FoodsCard key={food.id} food={food}></FoodsCard>) 
           }
        </div>
    );
};

export default FoodsData;