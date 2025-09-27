import React from "react";
import ResolveTaskCard from "./ResolveTaskCard";

const resolveTask = ({resolveData}) => {
  
   
    return(
        
       <div className="">
        
         {resolveData.length === 0 ? (
        <p className="p-5 text-xl text-gray-500">No Resolved Task Yet</p>
    ) : (
        resolveData.map(card =>
            <ResolveTaskCard
                key={card[0].id}
                card={card}
            />
        )
    )}
       </div>

    );

};

export default resolveTask;