import Link from "next/link";
import React from "react";

const FoodsCard = ({ food }) => {
 
  return (
    <div>
      <div className="card bg-base-100 shadow-sm">
        <figure></figure>
        <div className="card-body">
          <h2 className="card-title">{food.dish_name}</h2>
          <div className="mt-5 space-y-5">
            {food.alternative_names.map((name) => (
              <ul key={name} className="list-disc"><li>{name}</li></ul>
            ))}
          </div>
          <div className="card-actions justify-end">
           <Link href={`/foods/${food.id}`} className="w-12/12 mx-auto btn btn-info rounded-full font-bold mt-2">
             <button className="">Show Details</button>
           </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodsCard;
