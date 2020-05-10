import {
    LayoutOutlined,
    CalendarOutlined,
    UserOutlined,
    CreditCardOutlined,
    SettingOutlined,
    FieldTimeOutlined,
    FileOutlined,
    StarOutlined,
    MessageOutlined,
    UserSwitchOutlined,
    ShareAltOutlined,
    LockOutlined,
} from '@ant-design/icons'
export const mainMenus = [
    {
        name: "Home",
        link: "/"
    },
    {
        name: "How It Works",
        link: "/how-it-works"
    },
    {
        name: "Contact",
        link: "/contact-us"
    },
    {
        name: "Join",
        link: "/register",
        condition: "only-guest",
    },
    {
        name: "Login",
        link: "/login",
        extraClass: "has-btn",
        extraLinkClass: "btn btn-outline-primary",
        condition: "only-guest",
    },
    {
        name: "Logout",
        action: "logout",
        extraClass: "has-btn",
        condition: "only-login",
        extraLinkClass: "btn btn-outline-primary",
    },
]
export const rightMenus = [
    {
        name: "login",
        link: "/"
    },
    {
        name: "Sign up",
        link: "/",
        extraClass: "",
        extraLinkClass: "btn btn-secondary",
        // subMenus: [
        //     {
        //         name: "test",
        //         link: "test"
        //     },
        //     {
        //         name: "test",
        //         link: "test"
        //     },
        //     {
        //         name: "test",
        //         link: "test"
        //     },
        //     {
        //         name: "test",
        //         link: "test",
        //     },
        // ]
    },
]

export const doctorDashboardMenu = [
    {
        name: "Dashboard",
        link: "/doctor/dashboard",
        icon: <LayoutOutlined />,
    },
    {
        name: "Questions",
        link: "/doctor/dashboard/questions",
        icon: <CalendarOutlined />,
    },
    {
        name: "Appointments",
        link: "/doctor/dashboard/appointments",
        icon: <CalendarOutlined />,
    },
    {
        name: "Patients",
        link: "/doctor/dashboard/patients",
        icon: <UserOutlined />,
    },
    {
        name: "Payments",
        link: "/doctor/dashboard/payments",
        icon: <CreditCardOutlined />,
    },
    {
        name: "Settings",
        link: "/doctor/dashboard/settings",
        icon: <SettingOutlined />,
        subMenus: [
            {
                name: "Availablity",
                link: "/doctor/dashboard/settings/availablity",
                icon: <FieldTimeOutlined />,
            }
        ]
    },
    {
        name: "Invoices",
        link: "/doctor/dashboard/invoices",
        icon: <FileOutlined />,
    },
    {
        name: "Reviews",
        link: "/doctor/dashboard/reviews",
        icon: <StarOutlined />,
    },
    {
        name: "Message",
        link: "/doctor/dashboard/message",
        icon: <MessageOutlined />
    },
    {
        name: "Profile Settings",
        link: "/doctor/dashboard/profile-settings",
        icon: <UserSwitchOutlined />
    },
    {
        name: "Social Media",
        link: "/doctor/dashboard/social-media",
        icon: <ShareAltOutlined />
    },
    {
        name: "Change Password",
        link: "/doctor/dashboard/change-password",
        icon: <LockOutlined />
    },
    {
        name: "Logout",
        action: "logout",
    },
]
export default {
    mainMenus,
    rightMenus,
    doctorDashboardMenu
}