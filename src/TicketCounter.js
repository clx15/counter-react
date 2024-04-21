import React, { useContext } from 'react';
import { TicketContext } from './TicketContext';

const TicketCounter = () => {
    const { ticketCount } = useContext(TicketContext);

    return <div className="text-center">Total Tickets Submitted: {ticketCount}</div>;
};

export default TicketCounter;
