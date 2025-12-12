import { useNavigate } from 'react-router-dom'
import { Crown, Settings, Stethoscope, Heart, ClipboardList, Microscope, Pill, User } from 'lucide-react'

interface Role {
  id: string
  name: string
  icon: React.ReactNode
  gradient: string
  path: string
  description: string
}

const roles: Role[] = [
  {
    id: 'super-admin',
    name: 'Super Admin',
    icon: <Crown className="w-8 h-8" />,
    gradient: 'from-red-500 to-red-700',
    path: '/dashboard/super-admin',
    description: 'System Administration',
  },
  {
    id: 'admin',
    name: 'Admin',
    icon: <Settings className="w-8 h-8" />,
    gradient: 'from-orange-500 to-orange-700',
    path: '/dashboard/admin',
    description: 'Clinic Management',
  },
  {
    id: 'doctor',
    name: 'Doctor',
    icon: <Stethoscope className="w-8 h-8" />,
    gradient: 'from-blue-500 to-blue-700',
    path: '/dashboard/doctor',
    description: 'Patient Care & Telemedicine',
  },
  {
    id: 'nurse',
    name: 'Nurse',
    icon: <Heart className="w-8 h-8" />,
    gradient: 'from-purple-500 to-purple-700',
    path: '/dashboard/nurse',
    description: 'Patient Assistance',
  },
  {
    id: 'receptionist',
    name: 'Receptionist',
    icon: <ClipboardList className="w-8 h-8" />,
    gradient: 'from-green-500 to-green-700',
    path: '/dashboard/receptionist',
    description: 'Front Desk Operations',
  },
  {
    id: 'lab-tech',
    name: 'Lab Technician',
    icon: <Microscope className="w-8 h-8" />,
    gradient: 'from-teal-500 to-teal-700',
    path: '/dashboard/lab-tech',
    description: 'Laboratory Services',
  },
  {
    id: 'pharmacist',
    name: 'Pharmacist',
    icon: <Pill className="w-8 h-8" />,
    gradient: 'from-pink-500 to-pink-700',
    path: '/dashboard/pharmacist',
    description: 'Pharmacy Management',
  },
  {
    id: 'patient',
    name: 'Patient',
    icon: <User className="w-8 h-8" />,
    gradient: 'from-gray-500 to-gray-700',
    path: '/dashboard/patient',
    description: 'Personal Health Portal',
  },
]

export default function RoleSelection() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50 flex items-center justify-center p-8">
      <div className="max-w-7xl w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Medfo
            </span>{' '}
            <span className="bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
              Enterprise
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-2">Healthcare Management Solutions</p>
          <p className="text-sm text-gray-500">Select your role to access the dashboard</p>
        </div>

        {/* Role Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roles.map((role) => (
            <button
              key={role.id}
              onClick={() => navigate(role.path)}
              className="group relative glass-card p-8 card-hover overflow-hidden"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${role.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              {/* Content */}
              <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${role.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {role.icon}
                </div>
                
                {/* Text */}
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{role.name}</h3>
                  <p className="text-sm text-gray-500">{role.description}</p>
                </div>

                {/* Arrow */}
                <div className="text-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>© 2025 Medfo Enterprise. All rights reserved.</p>
          <p className="mt-1">Powered by Advanced Healthcare Technology</p>
        </div>
      </div>
    </div>
  )
}
