import React from "react";

const ticket = ({ ticket }) => {
const {id, title, description, customer, priority, status, createdAt} = ticket ;
    return (
        <div>
            <div className="h-full">
                <div className=" bg-gray-50 h-full">
                    <div className="h-full">

                        <article className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 flex flex-col justify-between h-full">


                            <div className="flex items-start justify-between">
                                <h2 className="text-lg font-semibold text-gray-800">
                                    {title}
                                </h2>


                                <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-50 text-green-700 text-xs font-medium">
                                    {status}
                                </span>
                            </div>


                            <p className="mt-3 text-sm text-gray-600 line-clamp-3">
                                {description}
                            </p>


                            <div className="mt-5 flex items-center justify-between text-sm text-gray-500">

                                <div className="flex items-center justify-center gap-3">
                                    <div className="text-xs text-gray-400">{id}</div>
                                    <div className=" text-xs uppercase font-semibold text-red-600">{priority}</div>
                                </div>


                                <div className="text-right flex items-center justify-center gap-3">
                                    <div className="text-sm text-gray-700">{customer}</div>
                                    <div className=" inline-flex items-center text-xs text-gray-500">

                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-2 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M8 7V3"></path>
                                            <path d="M16 7V3"></path>
                                            <path d="M3 11h18"></path>
                                            <path d="M5 21h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2z"></path>
                                        </svg>
                                        <span>{createdAt}</span>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>

            </div>
        </div>

    );

};

export default ticket;