import React from "react";
import GoingTaskCard from "./GoingTaskCard";


const inGoingTask = ({ticketData,removeTicket,resolveTicket}) => {
    
//    console.log(ticketData)
    return(
        
       <div>
       
        {ticketData.length === 0 ? (
        <p className="p-5 text-xl text-gray-500">Select a ticket to add Task Stauts</p>
        ) : 
            (ticketData.map(card =>
                <GoingTaskCard
                key={card.id}
                card={card}
                removeTicket={removeTicket}
                resolveTicket={resolveTicket}>

                </GoingTaskCard>
            ))
       }
       
        
       </div>

    );

};

export default inGoingTask;