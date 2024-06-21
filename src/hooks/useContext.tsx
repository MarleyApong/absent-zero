import { ReactNode, createContext, useContext, useState, useEffect } from 'react'

// Interface for provider props
interface ContextProviderProps {
    children: ReactNode
}

// Interface for the Global context
interface GlobalContextType {
    widthHeader: number
    setWidthHeader: (value: number) => void
    heightHeader: number
    setHeightHeader: (value: number) => void
    profile: boolean
    setProfile: (value: boolean) => void
    showSidebar: boolean
    setShowSidebar: (value: boolean) => void
    windowWidth: number
    windowHeight: number
}

// Create the Global context
const GlobalContext = createContext<GlobalContextType>({
    widthHeader: 0,
    setWidthHeader: () => {},
    heightHeader: 0,
    setHeightHeader: () => {},
    profile: false,
    setProfile: () => {},
    showSidebar: false,
    setShowSidebar: () => {},
    windowWidth: window.innerWidth,
    windowHeight: window.innerHeight
})

// Hooks to use the contexts
export const useDimensionHeader = () => {
    const { widthHeader, setWidthHeader } = useContext(GlobalContext)
    const { heightHeader, setHeightHeader } = useContext(GlobalContext)
    return {
        widthHeader,
        setWidthHeader,
        heightHeader,
        setHeightHeader,
    }
}

export const useProfile = () => {
    const { profile, setProfile } = useContext(GlobalContext)
    return {
        profile,
        setProfile,
    }
}

export const useShowSidebar = () => {
    const { showSidebar, setShowSidebar } = useContext(GlobalContext)
    return {
        showSidebar,
        setShowSidebar,
    }
}

export const useWindowSize = () => {
    const { windowWidth, windowHeight } = useContext(GlobalContext)
    return {
        windowWidth,
        windowHeight,
    }
}

// Provider for the Global context
export const GlobalContextProvider = ({ children }: ContextProviderProps) => {
    const [widthHeader, setWidthHeader] = useState(0)
    const [heightHeader, setHeightHeader] = useState(0)
    const [profile, setProfile] = useState(false)
    const [showSidebar, setShowSidebar] = useState(true)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const [windowHeight, setWindowHeight] = useState(window.innerHeight)

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth)
            setWindowHeight(window.innerHeight)
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const updateWidthHeader = (value: number) => {
        setWidthHeader(value)
    }

    const updateHeightHeader = (value: number) => {
        setHeightHeader(value)
    }

    const updateProfile = (value: boolean) => {
        setProfile(value)
    }

    const updateShowSidebar = (value: boolean) => {
        setShowSidebar(value)
    }

    return (
        <GlobalContext.Provider value={{
            widthHeader,
            setWidthHeader: updateWidthHeader,
            heightHeader,
            setHeightHeader: updateHeightHeader,
            profile,
            setProfile: updateProfile,
            showSidebar,
            setShowSidebar: updateShowSidebar,
            windowWidth,
            windowHeight
        }}>
            {children}
        </GlobalContext.Provider>
    )
}