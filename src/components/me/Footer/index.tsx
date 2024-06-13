import { Home, LayoutPanelLeft, ScrollText } from 'lucide-react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <div className="fixed bottom-0 flex justify-between items-center w-full h-10 px-4 overflow-hidden">
            <NavLink to={''}>
                <LayoutPanelLeft />
            </NavLink>
            <NavLink to={'/'}>
                <Home />
            </NavLink>
            <NavLink to={''}>
                <ScrollText />
            </NavLink>
        </div>
    )
}

export default Footer