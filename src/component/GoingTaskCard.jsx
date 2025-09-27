import React from "react";


const goingTaskCard = ({card,removeTicket,resolveTicket}) => {
 const handleRemove = () => {
    removeTicket(card)
    resolveTicket(card)
    
 }   
   
    return(
        
       <div className="my-5 p-3 bg-white rounded-lg">
        <h1 className="text-[20px] mb-3 font-semibold">{card.title} </h1>
        <button onClick={handleRemove} className="btn btn-block btn-active btn-success text-white">Complete</button>

       </div>

    );

};

export default goingTaskCard;