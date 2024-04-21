import React, { useContext } from 'react';
import * as XLSX from 'xlsx';
import { TicketContext } from './TicketContext';

export function Table() {
    const { tickets, resetTickets } = useContext(TicketContext);

    const exportToExcel = () => {
        const ws = XLSX.utils.json_to_sheet(tickets);
        const wb = XLSX.utils.book_new();
        const currentDate = new Date().toISOString().slice(0,10); // Get current date in YYYY-MM-DD format
        XLSX.utils.book_append_sheet(wb, ws, "Tickets");
        XLSX.writeFile(wb, `Tickets_${currentDate}.xlsx`);
    };

    return (
        <div>
            <button onClick={exportToExcel} className="m-2 p-2 bg-green-500 text-white rounded content-around">
                Export to Excel
            </button>
            <button onClick={resetTickets} className="m-2 p-2 bg-red-500 text-white rounded content-around">
                Reset table
            </button>
            <table className="w-full text-center">
                <thead>
                    <tr>
                        <th>Ticket number</th>
                        <th>Hour of submission</th>
                        <th>Time spent on ticket</th>
                    </tr>
                </thead>
                <tbody>
                    {tickets.map((ticket, index) => (
                        <tr key={index}>
                            <td>{ticket.number}</td>
                            <td>{ticket.submissionTime}</td>
                            <td>{ticket.timeSpent}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            
        </div>
    );
}
