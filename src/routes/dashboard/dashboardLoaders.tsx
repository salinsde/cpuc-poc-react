import { useLoaderData } from 'react-router-dom';

export interface DashStatsProps {
    stats: { success: number; pending: number; errors: number; late: number };
}

export interface EventDate {
    event: string;
    date: string;
}

export interface DashboardNews extends EventDate {
    url: string;
}

export interface SupportTicket {
    title: string;
    ticketNumber: number;
    createdDate: string;
    status: string;
}

interface DashboardDataProps extends DashStatsProps {
    nextDate: string;
    dashTitle: string;
    dashLogoSrc?: string;
    importantDates: EventDate[];
    tasks: EventDate[];
    supportTickets: SupportTicket[];
    news: DashboardNews[];
}

export const mockDashboardData: DashboardDataProps = {
    dashTitle: 'PG&E CPUC Renewables Portfolio Standard Reporting',
    dashLogoSrc: '/src/assets/PGE-Emblem.png',
    stats: {
        success: 55,
        pending: 5,
        errors: 2,
        late: 3,
    },
    nextDate: '3/27/2023',
    importantDates: [
        { event: 'Monthly filing', date: '3/27/2023' },
        { event: 'Semi-Annual Filing', date: '4/23/2023' },
    ],
    tasks: [
        { event: 'Compile contracts for reporting period', date: '3/27/2023' },
        {
            event: 'Complete project 123 for quarterly filing',
            date: '4/23/2023',
        },
        {
            event: 'Complete project ABC for quarterly filing',
            date: '5/03/2023',
        },
        { event: 'Submit quarterly report', date: '5/30/2023' },
    ],
    supportTickets: [
        {
            title: 'Open Question about energy mix',
            ticketNumber: 123456,
            createdDate: '01/20/23',
            status: 'Pending',
        },
    ],
    news: [
        { event: 'CPUC to hold public forum', date: '05/05/23', url: '/link' },
        { event: 'CPUC reminds Californians', date: '04/05/23', url: '/link' },
        { event: 'CPUC Approves Advanced', date: '04/25/23', url: '/link' },
    ],
};

// the loader to put in the routes
export const dashboardLoader = () => mockDashboardData;

// Hook for getting the data in component
export const useDashboardLoader = () => useLoaderData() as DashboardDataProps;
