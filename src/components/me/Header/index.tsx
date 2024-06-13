import React, { useEffect, useRef } from "react"
// import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarShortcut, MenubarTrigger } from "@/components/ui/menubar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useDimensionHeader, useProfile } from "@/hooks/useContext"
import StudentIcon from '@/assets/images/profile/student.png'
import Profile from "../Profile"

const Header: React.FC = () => {
    const myHeader = useRef<HTMLDivElement>(null)
    const { setHeightHeader, setWidthHeader} = useDimensionHeader()
    const { setProfile } = useProfile()

    useEffect(() => {
        const handleResize = (entries: ResizeObserverEntry[]) => {
            for (let entry of entries) {
                const width = entry.contentRect.width;
                const height = entry.contentRect.height;
                setWidthHeader(width)
                setHeightHeader(height + 8)
            }
        }

        const resizeObserver = new ResizeObserver(handleResize);
        if (myHeader.current) {
            resizeObserver.observe(myHeader.current)
        }

        return () => {
            resizeObserver.disconnect()
        }
    }, [])

    const showProfile = () => {
        setProfile(true)
    }

    return (
        <div ref={myHeader} className="flex justify-end gap-4 w-screen h-auto p-1 relative">
            <Avatar className="shadow" onClick={showProfile}>
                <AvatarImage src={StudentIcon} />
                <AvatarFallback>Profile</AvatarFallback>
            </Avatar>
            <Profile/>

            {/* <Menubar>
                <MenubarMenu>
                    <MenubarTrigger>File</MenubarTrigger>
                    <MenubarContent>
                        <MenubarItem>
                            New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                        </MenubarItem>
                        <MenubarItem>New Window</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>Share</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>Print</MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
            </Menubar> */}
        </div>
    )
}

export default Header