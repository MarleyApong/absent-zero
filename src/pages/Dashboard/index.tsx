import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

const Dashboard = () => {

    const Navigate = useNavigate()
    return (
        <div className="h-full flex justify-center items-center gap-2">
            <Button onClick={() => Navigate("/check-mypresence")}>Scan code QR</Button>
            <Button>My presence</Button>
        </div>
    )
}

export default Dashboard