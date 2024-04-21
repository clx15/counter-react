import React from 'react';
import { ThemeProvider } from './ThemeContext';
import { ThemeToggle } from './ThemeToggle'; //
import { TicketProvider } from './TicketContext';
import { TimerProvider, Timer } from './Timer'; 
import { Table } from './Table'; 
import Tickets from './Tickets'; 
import SubmissionsByHour from './SubmissionsByHour';

function App() {
    return (
        <ThemeProvider>   
          <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-gray-100">
            <TimerProvider>   
                <TicketProvider>   
                    <div className="App">
                        <header className="App-header">                        
                            <ThemeToggle />  
                        </header>
                        <main>
                            <Timer />  
                            <Tickets /> <SubmissionsByHour />                            
                            <Table />  
                        </main>
                    </div>
                </TicketProvider>
            </TimerProvider>
           </div>
        </ThemeProvider>
    );
}

export default App;
