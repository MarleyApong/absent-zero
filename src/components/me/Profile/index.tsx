import { LogOut, Settings } from 'lucide-react'
import { useProfile } from '@/hooks/useContext'
import './profile.scss'

const Profile = () => {
  const { profile, setProfile } = useProfile()

  const handleLogout = () => {
    if (confirm('Are you sure ?')) {

    }
  }

  const handleClick = () => {
    setProfile(false)
  }

  if (profile) {
    setTimeout(() => (
      setProfile(false)
    ), 5000)
  }

  return (
    <div className={`${profile ? 'show-profile' : 'profile'} flex flex-col gap-1`} onClick={handleClick}>
      <button className="logout flex items-center gap-1 shadow" onClick={handleLogout}>
        <LogOut size={15} />
        Logout
      </button>
      <button className="setting flex items-center gap-1 shadow" onClick={handleLogout}>
        <Settings size={15} />
        Settings
      </button>
    </div>
  )
}

export default Profile