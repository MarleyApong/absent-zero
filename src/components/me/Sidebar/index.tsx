import { NavLink } from "react-router-dom"
import { menuStudent } from "./menu"
import './sidebar.scss'

const Sidebar = () => {
   return (
      <div className="sidebar fixed flex flex-col">
         <div className="sidebar-logo">
            logo
         </div>
         <div className="menu">
            {menuStudent.map((item, index) => (
               <NavLink key={index} to={item.path} className="menu-item">
                  <item.icon />
                  <span>{item.display}</span>
               </NavLink>
            ))}
         </div>
      </div>
   )
}

export default Sidebar
