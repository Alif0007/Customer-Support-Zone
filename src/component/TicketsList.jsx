import React, { use } from "react";
import Ticket from "./Ticket";

const ticketList = ({ticketListPromise}) => {
    const ticketList = use(ticketListPromise)
    console.log(ticketList)
    return(
        
        <div className=" grid grid-cols-1 gap-3 lg:grid-cols-2">
         
         {
            ticketList.map(ticketList =>
                <Ticket key={ticketList.id}
                ticket={ticketList}></Ticket>
            )
            
         }
        </div>

    );

};

export default ticketList;