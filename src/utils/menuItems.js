
import { accounts, categories, settings, transactions, income,logout,expenses, dashboard,money } from "../utils/Icons";

export const menuItems = [
    {
        id: 1,
        title: 'Dashboard',
        icon: dashboard,
        link: '/dashboard'
    },
    {
        id: 2,
        title: 'View Transaction',
        icon: transactions,
        link: '/dashboard'
    },
    {
        id: 3,
        title: 'Income ',
        icon: income,
        link: '/dashboard',
    },
    {
        id: 4,
        title: 'Expenses ',
        icon: expenses,
        link: '/dashboard',
    },
   
    {
        id: 5,
        title: 'Calculator ',
        icon: accounts,
        link: '/calculator',
    },
    // {
    //     id: 6,
    //     title: 'Settings ',
    //     icon: settings,
    //     link: '/dashboard',
    // },
    // {
    //     id: 7,
    //     title: 'Logout ',
    //     icon: logout,
    //     link: '/dashboard',
    // },
    // {
    //     id: 8,
    //     title: 'Categories ',
    //     icon: categories,
    //     link: '/dashboard',
    // },
    // {
    //     id: 9,
    //     title: 'Money ',
    //     icon: money,
    //     link: '/dashboard',
    // },
]