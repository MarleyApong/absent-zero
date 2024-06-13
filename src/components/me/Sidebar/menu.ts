import { FileClock, LayoutDashboard, ScanLine, ScrollText } from "lucide-react";

interface MenuItem {
    path: string;
    display: string;
    icon: React.ComponentType;
}

export const menuStudent: MenuItem[] = [
    {
        path: '/',
        display: 'Dashboard',
        icon: LayoutDashboard
    },
    {
        path: '/check-mypresence',
        display: 'Scan code QR',
        icon: ScanLine
    },
    {
        path: '/check-mypresence',
        display: 'Historical',
        icon: FileClock
    },
    {
        path: '/time-table',
        display: 'Historical',
        icon: ScrollText
    },
]
