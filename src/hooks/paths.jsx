import React from 'react'
import { AgentsIcon, ArticlesIcon, ContactsIcon, IdeasIcon, OverViewIcon, SettingsIcon, SubscriptionIcon, TicketIcon } from '../assets/icons'
import { Agents, Articles, Contacts, Tickets, Ideas, OverView, Settings, Sub } from '../pages'

export const paths = {
    overview:"/",
    tickets:"/tickets",
    ideas:"/ideas",
    contacts:"/contacts",
    agents:"/agents",
    articles:"/articles",
    settings:"/settings",
    subscription:"/subscription"
}

export const navItems = [
    {
        id: 1,
        title: "Overview",
        path: paths.overview,
        icon: <OverViewIcon/>,
    },
    {
        id: 2,
        title: "Tickets",
        path: paths.tickets,
        icon: <TicketIcon/>
    },
    {
        id: 3,
        title: "Ideas",
        path: paths.ideas,
        icon: <IdeasIcon/>
    },
    {
        id: 4,
        title: "Contacts",
        path: paths.contacts,
        icon: <ContactsIcon/>
    },
    {
        id: 5,
        title: "Agents",
        path: paths.agents,
        icon: <AgentsIcon/>
    },
    {
        id: 6,
        title: "Articles",
        path: paths.articles,
        icon: <ArticlesIcon/>
    },
    {
        id: 7,
        title: "Settings",
        path: paths.settings,
        icon: <SettingsIcon/>
    },
    {
        id: 8,
        title: "Subscription",
        path: paths.subscription,
        icon: <SubscriptionIcon/>
    }
]

export const pageRouteLists = [
    {
        id: 1,
        path: paths.overview,
        element: <OverView/>,
    },
    {
        id: 2,
        path: paths.tickets,
        element: <Tickets/>
    },
    {
        id: 3,
        path: paths.ideas,
        element: <Ideas/>
    },
    {
        id: 4,
        path: paths.contacts,
        element: <Contacts/>
    },
    {
        id: 5,
        path: paths.agents,
        element: <Agents/>
    },
    {
        id: 6,
        path: paths.articles,
        element: <Articles/>
    },
    {
        id: 7,
        path: paths.settings,
        element: <Settings/>
    },
    {
        id: 8,
        path: paths.subscription,
        element: <Sub/>
    }
]