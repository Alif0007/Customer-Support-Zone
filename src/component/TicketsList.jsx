import React, { use } from "react";
import Ticket from "./Ticket";
import { toast } from "react-toastify";


const ticketList = ({ticketListPromise,ticketData,setTicketData}) => {
    
    const ticketList = use(ticketListPromise)
    const inProgressHandle = (ticket)=> {
       
       setTicketData([...ticketData,ticket])
       toast.info('In Progress', {
           style: {
               border: '2px solid #22c55e' // Green border for success
           }
           });
       
        
    }
    return(
        
        <div className=" grid grid-cols-1 gap-3 lg:grid-cols-2">
         
         {
            ticketList.map(ticketList =>
                <Ticket key={ticketList.id}
                inProgressHandle = {inProgressHandle}
                ticket={ticketList}
                ticketData= {ticketData} setTicketData = {setTicketData}></Ticket>
            )
            
         }
        </div>

    );

};

export default ticketList;