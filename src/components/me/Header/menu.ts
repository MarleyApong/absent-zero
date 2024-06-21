
interface MenuItem {
    path: string;
    display: string;
}

export const menuStudent: MenuItem[] = [
    {
        path: '/',
        display: 'Dashboard',
    },
    {
        path: '/check-mypresence',
        display: 'Scan code QR',
    },
    {
        path: '/historical',
        display: 'Historical',
    },
    {
        path: '/time-table',
        display: 'Time table',
    },
]
