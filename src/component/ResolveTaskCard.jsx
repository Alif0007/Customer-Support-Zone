import React from "react";


const resolveTaskCard = ({card}) => {
  
   
    return(
        
       <div className="my-5 p-3 bg-green-100 rounded-lg">
        <h1 className="text-[20px] mb-3 font-semibold">{card[0].title} </h1>
        <button  className=" btn-block text-black">Resolved</button>

       </div>

    );

};

export default resolveTaskCard;