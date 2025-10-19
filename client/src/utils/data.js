import {MdAddCard, MdDashboard, MdDelete, MdList, MdLogout} from 'react-icons/md'
export const SIDEBAR_ITEMS=[
    {
        id:1,
        icon: MdDashboard,
        label: "Dashboard",
        path:'/admin'
    },
    {
        id:2,
        icon: MdAddCard,
        label: "Add Product",
        path:'/admin/add'
    },
    {
        id:3,
        icon: MdList,
        label: "Products",
        path:'/products'
    },
   
    {
        id:4,
        icon: MdLogout,
        label: "Logout",
        path:'/login'
    },
]