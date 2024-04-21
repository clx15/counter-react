import React, { useState, useContext } from 'react';
import { TicketContext } from './TicketContext';
import { TimerContext } from './Timer'; // Make sure this path is correct

function Tickets() {
    const { addTicket } = useContext(TicketContext);
    const { startTimer } = useContext(TimerContext); 
    const [ticketNumber, setTicketNumber] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        addTicket(ticketNumber || 'No input');
        setTicketNumber('');
        startTimer(); 
    };

    return (
        <div className="text-center">
            <h2 className="text-xl font-bold">Tickets</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    className="border border-gray-300 p-2 mr-2 bg-green-400"
                    placeholder="Add ticket number"
                    value={ticketNumber}
                    onChange={(e) => setTicketNumber(e.target.value)}
                />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">Submit</button>
            </form>
        </div>
    );
}

export default Tickets;
