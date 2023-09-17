import { Album, Calendar, Contact, LayoutDashboard, LayoutGrid, Mail, MessageCircle, Receipt, Settings, Store, } from "lucide-react";

export const routes = [
    {
        label: "Dashboard",
        icon: LayoutDashboard,
        href: "/dashboard",
    },
    {
        label: "Email",
        icon: Mail,
        href: "/email",
    },
    {
        label: "Chat",
        icon: MessageCircle,
        href: "/chat",
    },
    {
        label: "Kanban",
        icon: LayoutGrid,
        href: "/kanban",
    },
    {
        label: "Contact",
        icon: Contact,
        href: "/contact",
    },
    {
        label: "Calendar",
        icon: Calendar,
        href: "/calendar",
    },
    {
        label: "Courses",
        icon: Album,
        href: "/course",
    },
    {
        label: "Shop",
        icon: Store,
        href: "/shop",
    },
    {
        label: "Invoices",
        icon: Receipt,
        href: "/invoice",
    },
    {
        label: "Setting",
        icon: Settings,
        href: "/setting",
    },
];

export const todos = [
    {
        subTitle: "Important",
        title: "Create sign up sheet for holiday student/parent conferences.",
        peoples: "/people1.png",
        color: "#FFAB2D",
        width: "107",
        height: "32",
    },
    {
        subTitle: "Instructor Meeting",
        title: "Plan holiday demonstration program. Create outline.",
        peoples: "/user.png",
        width: "82",
        height: "32",
        color: "#E328AF"
    },
    {
        subTitle: "Databse",
        title: "Determine how many boards need to be ordered for testing and demo.",
        peoples: "/user2.png",
        width: "57",
        height: "32",
        color: "#38E25D"
    },
    
]

export const progress = [
    {
        subTitle: "Video",
        title: "Create sparring tutorial video for the weekly class.",
        peoples: "/user.png",
        color: "#5ECFFF",
        width: "82",
        height: "32",
    },
    {
        subTitle: "BUGS FIXING",
        title: "Payment gateway needs reauthorization.",
        peoples: "/people1.png",
        color: "#FF4A55",
        width: "107",
        height: "32",
    },
    
]

export const complete = [
    {
        subTitle: "BUGS FIXING",
        title: "Action Button needed for Google Maps visits.",
        peoples: "/people1.png",
        color: "#FF4A55",
        width: "107",
        height: "32",
    },
    {
        subTitle: "Database",
        title: "Update new instructor photos.",
        peoples: "/people1.png",
        color: "#38E25D",
        width: "107",
        height: "32",
    },
    {
        subTitle: "Important",
        title: "Review/correct yellow belt techniques.",
        peoples: "/people1.png",
        color: "#E328AF",
        width: "107",
        height: "32",
    },
    
]