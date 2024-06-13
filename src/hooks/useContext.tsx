import { ReactNode, createContext, useContext, useState } from 'react'

interface ContextProviderProps {
    children: ReactNode
}

interface GlobalContextType {
    widthHeader: number
    setWidthHeader: (value: number) => void
    heightHeader: number
    setHeightHeader: (value: number) => void
    profile: boolean
    setProfile: (value: boolean) => void
}

const GlobalContext = createContext<GlobalContextType>({
    widthHeader: 0,
    setWidthHeader: () => { },
    heightHeader: 0,
    setHeightHeader: () => { },
    profile: false,
    setProfile: () => { },
})

export const useDimensionHeader = () => {
    const { widthHeader, setWidthHeader } = useContext(GlobalContext);
    const { heightHeader, setHeightHeader } = useContext(GlobalContext);
    return {
        widthHeader,
        setWidthHeader,
        heightHeader,
        setHeightHeader,
    }
}

export const useProfile = () => {
    const { profile, setProfile } = useContext(GlobalContext);
    return {
        profile,
        setProfile,
    }
}

export const GlobalContextProvider = ({ children }: ContextProviderProps) => {
    const [widthHeader, setWidthHeader] = useState(0)
    const [heightHeader, setHeightHeader] = useState(0)
    const [profile, setProfile] = useState(false)

    const updateWidthHeader = (value: number) => {
        setWidthHeader(value)
    }

    const updateHeightHeader = (value: number) => {
        setHeightHeader(value)
    }

    const updateProfile = (value: boolean) => {
        setProfile(value)
    }

    return (
        <GlobalContext.Provider value={{
            widthHeader,
            setWidthHeader: updateWidthHeader,
            heightHeader,
            setHeightHeader: updateHeightHeader,
            profile,
            setProfile: updateProfile
        }}>
            {children}
        </GlobalContext.Provider>
    )
}
