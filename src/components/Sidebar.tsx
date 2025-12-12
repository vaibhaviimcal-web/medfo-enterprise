import { useNavigate, useLocation } from 'react-router-dom'
import { 
  LayoutDashboard, 
  Video, 
  Calendar, 
  Users, 
  FileText, 
  Settings,
  LogOut,
  Activity
} from 'lucide-react'

interface SidebarProps {
  role: string
}

interface NavItem {
  icon: React.ReactNode
  label: string
  path: string
}

export default function Sidebar({ role }: SidebarProps) {
  const navigate = useNavigate()
  const location = useLocation()

  const getNavItems = (): NavItem[] => {
    const baseItems: NavItem[] = [
      { icon: <LayoutDashboard className="w-5 h-5" />, label: 'Dashboard', path: `/dashboard/${role}` },
    ]

    if (role === 'doctor' || role === 'patient') {
      baseItems.push(
        { icon: <Video className="w-5 h-5" />, label: 'Telemedicine', path: `/dashboard/${role}/telemedicine` },
        { icon: <Calendar className="w-5 h-5" />, label: 'Appointments', path: `/dashboard/${role}/appointments` }
      )
    }

    if (role === 'doctor') {
      baseItems.push(
        { icon: <Users className="w-5 h-5" />, label: 'Patients', path: `/dashboard/${role}/patients` },
        { icon: <FileText className="w-5 h-5" />, label: 'Prescriptions', path: `/dashboard/${role}/prescriptions` }
      )
    }

    if (role === 'patient') {
      baseItems.push(
        { icon: <Activity className="w-5 h-5" />, label: 'Health Records', path: `/dashboard/${role}/records` },
        { icon: <FileText className="w-5 h-5" />, label: 'My Prescriptions', path: `/dashboard/${role}/prescriptions` }
      )
    }

    baseItems.push({ icon: <Settings className="w-5 h-5" />, label: 'Settings', path: `/dashboard/${role}/settings` })

    return baseItems
  }

  const navItems = getNavItems()

  return (
    <div className="sidebar w-64 min-h-screen flex flex-col shadow-2xl">
      {/* Logo */}
      <div className="p-6 border-b border-white/10">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-primary-200 bg-clip-text text-transparent">
          Medfo Enterprise
        </h1>
        <p className="text-xs text-gray-400 mt-1">Healthcare Solutions</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                isActive
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'text-gray-300 hover:bg-white/10 hover:text-white'
              }`}
            >
              {item.icon}
              <span className="font-medium">{item.label}</span>
            </button>
          )
        })}
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-white/10">
        <button
          onClick={() => navigate('/')}
          className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-300 hover:bg-red-500/20 hover:text-red-400 transition-all duration-200"
        >
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </div>
  )
}
