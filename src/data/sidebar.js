import {MdOutlineDashboardCustomize } from 'react-icons/md';
import {SlCalender } from 'react-icons/sl';
import {BsFillChatDotsFill } from 'react-icons/bs';
import {AiFillFile , AiFillProject,AiOutlineWifi  } from 'react-icons/ai';
import {BsFillPersonFill } from 'react-icons/bs';
import {BsBox } from 'react-icons/bs';



const Data ={
    cardData:

[
    {
        "title": "MENU"
    },
    {
        "title": "Dashboards",
        "icon": <MdOutlineDashboardCustomize/>,
        "childrens": [
            {
                "title": "Ecommerce"
            },
            {
                "title": "Saas"
            },
            {
                "title": "Crypto",
            }
        ]
    },

    {
        "title": "APPLICAIONS"
    },
    {
        "title": "Calender",
        "icon": <SlCalender/>
    },
    {
        "title": "Chat",
        "icon": <BsFillChatDotsFill/>
    },
    {
        "title": "File Manager",
        "icon": <AiFillFile/>
    },
    {
        "title": "Projects",
        "icon":  <AiFillProject/>,
        "childrens": [
            {
                "title": "Projects1"
            },
            {
                "title" : "Projects2"
            },
            {
                "title": "Projects3"
            }
        ]
    },

    {
        "title": "Contacts",
        "icon": <AiOutlineWifi/>,
        "childrens": [
            {
                "title": "Login"
            },
            {
                "title": "Register"
            },
            {
                "title": "Forgot Password"
            },
            {
                "title": "Reset Password"
            }
        ]
    },
    {
        "title": "LAYOUTS"
    },
    {
        "title": "PAGES"
    },
    {
        "title": "Authentication",
        "icon": <BsFillPersonFill/>
    },
    {
        "title": "Utility",
        "icon": <BsBox/>,
        "childrens" : [
            {
                "title": "Utility1"
            },
            {
                "title": "Utility2"
            }
        ]
    }
]

}

export default Data;