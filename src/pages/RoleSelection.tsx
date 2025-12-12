import { useNavigate } from 'react-router-dom'
import { Crown, Settings, Stethoscope, Heart, ClipboardList, Microscope, Pill, User } from 'lucide-react'

interface Role {
  id: string
  name: string
  icon: React.ReactNode
  color: string
  bgColor: string
  hoverColor: string
  path: string
}

const roles: Role[] = [
  {
    id: 'super-admin',
    name: 'Super Admin',
    icon: <Crown className="w-12 h-12" />,
    color: '#d32f2f',
    bgColor: 'bg-red-600',
    hoverColor: 'hover:bg-red-700',
    path: '/dashboard/super-admin',
  },
  {
    id: 'admin',
    name: 'Admin',
    icon: <Settings className="w-12 h-12" />,
    color: '#f57c00',
    bgColor: 'bg-orange-600',
    hoverColor: 'hover:bg-orange-700',
    path: '/dashboard/admin',
  },
  {
    id: 'doctor',
    name: 'Doctor',
    icon: <Stethoscope className="w-12 h-12" />,
    color: '#1976d2',
    bgColor: 'bg-blue-600',
    hoverColor: 'hover:bg-blue-700',
    path: '/dashboard/doctor',
  },
  {
    id: 'nurse',
    name: 'Nurse',
    icon: <Heart className="w-12 h-12" />,
    color: '#7b1fa2',
    bgColor: 'bg-purple-600',
    hoverColor: 'hover:bg-purple-700',
    path: '/dashboard/nurse',
  },
  {
    id: 'receptionist',
    name: 'Receptionist',
    icon: <ClipboardList className="w-12 h-12" />,
    color: '#388e3c',
    bgColor: 'bg-green-600',
    hoverColor: 'hover:bg-green-700',
    path: '/dashboard/receptionist',
  },
  {
    id: 'lab-tech',
    name: 'Lab Technician',
    icon: <Microscope className="w-12 h-12" />,
    color: '#0097a7',
    bgColor: 'bg-teal-600',
    hoverColor: 'hover:bg-teal-700',
    path: '/dashboard/lab-tech',
  },
  {
    id: 'pharmacist',
    name: 'Pharmacist',
    icon: <Pill className="w-12 h-12" />,
    color: '#c2185b',
    bgColor: 'bg-pink-600',
    hoverColor: 'hover:bg-pink-700',
    path: '/dashboard/pharmacist',
  },
  {
    id: 'patient',
    name: 'Patient',
    icon: <User className="w-12 h-12" />,
    color: '#455a64',
    bgColor: 'bg-gray-600',
    hoverColor: 'hover:bg-gray-700',
    path: '/dashboard/patient',
  },
]

export default function RoleSelection() {
  const navigate = useNavigate()

  const handleRoleClick = (path: string) => {
    navigate(path)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          Medfo <span className="text-medfo-blue">Enterprise</span>
        </h1>
        <p className="text-xl text-gray-600">Healthcare Management Solutions</p>
        <p className="text-sm text-gray-500 mt-2">Select your role to access the dashboard</p>
      </div>

      {/* Role Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl w-full">
        {roles.map((role) => (
          <button
            key={role.id}
            onClick={() => handleRoleClick(role.path)}
            className={`${role.bgColor} ${role.hoverColor} text-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center space-y-4 min-h-[200px]`}
          >
            <div className="bg-white bg-opacity-20 rounded-full p-4">
              {role.icon}
            </div>
            <h3 className="text-2xl font-semibold">{role.name}</h3>
            <p className="text-sm opacity-90">Click to access</p>
          </button>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-12 text-center text-gray-500 text-sm">
        <p>© 2025 Medfo Enterprise. All rights reserved.</p>
      </div>
    </div>
  )
}
