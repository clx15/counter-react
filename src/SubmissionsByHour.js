import React, { useContext } from 'react';
import { TicketContext } from './TicketContext';  // Ensure this path is correct

const SubmissionsByHour = () => {
    const { submissionsByHour } = useContext(TicketContext);

    // Check if submissionsByHour is correctly loaded
    if (!submissionsByHour) {
        console.log('SubmissionsByHour data is not available.');
        return <p className="text-center">Tickets loading..</p>;
    }

    const submissionItems = submissionsByHour.map((count, index) => {
        if (count > 0) {
            return <li key={index}>{`${index}PM-${index + 1}PM: ${count} tickets`}</li>;
        }
        return null;
    }).filter(item => item !== null); 

    return (
        <div className="text-center">
            <h2>Tickets by Hour:</h2>
            {submissionItems.length > 0 ? (
                <ul>{submissionItems}</ul>
            ) : (
                <p>No tickets have been solved yet</p>
            )}
        </div>
    );
};

export default SubmissionsByHour;
