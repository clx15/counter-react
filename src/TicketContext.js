import React, { createContext, useState, useEffect } from 'react';

export const TicketContext = createContext();

export const TicketProvider = ({ children }) => {
    const [tickets, setTickets] = useState(() => {
        const localData = localStorage.getItem('tickets');
        return localData ? JSON.parse(localData) : [];
    });
    const [ticketCount, setTicketCount] = useState(() => {
        const localData = localStorage.getItem('ticketCount');
        return localData ? parseInt(localData) : tickets.length;
    });
    const [submissionsByHour, setSubmissionsByHour] = useState(() => {
        const localData = localStorage.getItem('submissionsByHour');
        return localData ? JSON.parse(localData) : Array(24).fill(0);
    });
    const [lastSubmissionTime, setLastSubmissionTime] = useState(() => {
        const localData = localStorage.getItem('lastSubmissionTime');
        return localData ? new Date(localData) : null;
    });

    useEffect(() => {
        localStorage.setItem('tickets', JSON.stringify(tickets));
        localStorage.setItem('ticketCount', ticketCount.toString());
        localStorage.setItem('submissionsByHour', JSON.stringify(submissionsByHour));
        localStorage.setItem('lastSubmissionTime', lastSubmissionTime ? lastSubmissionTime.toISOString() : '');
    }, [tickets, ticketCount, submissionsByHour, lastSubmissionTime]);

    const addTicket = (number) => {
        const currentTime = new Date();
        const hour = currentTime.getHours();
        let timeSpent = 'START';
        if (lastSubmissionTime) {
            const difference = currentTime - lastSubmissionTime;
            const differenceSeconds = Math.floor(difference / 1000);
            const differenceMinutes = Math.floor(differenceSeconds / 60);
            timeSpent = `${differenceMinutes} minutes ${differenceSeconds % 60} seconds`;
        }

        const newTicket = {
            number,
            submissionTime: currentTime.toLocaleTimeString(),
            timeSpent: timeSpent
        };

        setTickets(prevTickets => [...prevTickets, newTicket]);
        setTicketCount(prevCount => prevCount + 1);
        setSubmissionsByHour(prevHours => {
            const updatedHours = [...prevHours];
            updatedHours[hour]++;
            return updatedHours;
        });
        setLastSubmissionTime(currentTime); 
    };

    const resetTickets = () => {
        setTickets([]);
        setTicketCount(0);
        setSubmissionsByHour(Array(24).fill(0));
        setLastSubmissionTime(null);
        localStorage.removeItem('lastSubmissionTime');
    };

    return (
        <TicketContext.Provider value={{ tickets, addTicket, ticketCount, submissionsByHour, resetTickets }}>
            {children}
        </TicketContext.Provider>
    );
};
