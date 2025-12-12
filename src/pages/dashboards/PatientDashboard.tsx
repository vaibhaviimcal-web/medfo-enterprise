import { useNavigate } from 'react-router-dom'
import { User, ArrowLeft, Calendar, FileText, Activity, MessageSquare } from 'lucide-react'

export default function PatientDashboard() {
  const navigate = useNavigate()

  const stats = [
    { label: 'Upcoming Appointments', value: '2', icon: <Calendar className="w-6 h-6" />, color: 'bg-blue-500' },
    { label: 'Prescriptions', value: '5', icon: <FileText className="w-6 h-6" />, color: 'bg-green-500' },
    { label: 'Test Results', value: '8', icon: <Activity className="w-6 h-6" />, color: 'bg-purple-500' },
    { label: 'Messages', value: '3', icon: <MessageSquare className="w-6 h-6" />, color: 'bg-orange-500' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-slate-50">
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button onClick={() => navigate('/')} className="p-2 hover:bg-gray-100 rounded-lg transition">
              <ArrowLeft className="w-6 h-6 text-gray-600" />
            </button>
            <div className="flex items-center space-x-3">
              <div className="bg-gray-600 p-2 rounded-lg">
                <User className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Patient Dashboard</h1>
                <p className="text-sm text-gray-500">Medfo Enterprise</p>
              </div>
            </div>
          </div>
          <button onClick={() => navigate('/')} className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition">
            Logout
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
              <div className="flex items-center justify-between mb-4">
                <div className={`${stat.color} p-3 rounded-lg text-white`}>{stat.icon}</div>
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-1">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="p-4 border-2 border-gray-200 rounded-lg hover:border-gray-600 hover:bg-gray-50 transition">
              <h3 className="font-semibold text-gray-800">Book Appointment</h3>
              <p className="text-sm text-gray-600 mt-1">Schedule a visit</p>
            </button>
            <button className="p-4 border-2 border-gray-200 rounded-lg hover:border-gray-600 hover:bg-gray-50 transition">
              <h3 className="font-semibold text-gray-800">View Records</h3>
              <p className="text-sm text-gray-600 mt-1">Access medical history</p>
            </button>
            <button className="p-4 border-2 border-gray-200 rounded-lg hover:border-gray-600 hover:bg-gray-50 transition">
              <h3 className="font-semibold text-gray-800">Contact Doctor</h3>
              <p className="text-sm text-gray-600 mt-1">Send a message</p>
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
