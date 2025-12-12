import { useNavigate } from 'react-router-dom'
import { Pill, ArrowLeft, Package, FileText, TrendingDown, AlertTriangle } from 'lucide-react'

export default function PharmacistDashboard() {
  const navigate = useNavigate()

  const stats = [
    { label: 'Prescriptions', value: '56', icon: <FileText className="w-6 h-6" />, color: 'bg-blue-500' },
    { label: 'Inventory Items', value: '1,234', icon: <Package className="w-6 h-6" />, color: 'bg-green-500' },
    { label: 'Low Stock', value: '18', icon: <TrendingDown className="w-6 h-6" />, color: 'bg-orange-500' },
    { label: 'Expired Soon', value: '7', icon: <AlertTriangle className="w-6 h-6" />, color: 'bg-red-500' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50">
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button onClick={() => navigate('/')} className="p-2 hover:bg-gray-100 rounded-lg transition">
              <ArrowLeft className="w-6 h-6 text-gray-600" />
            </button>
            <div className="flex items-center space-x-3">
              <div className="bg-pink-600 p-2 rounded-lg">
                <Pill className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Pharmacist Dashboard</h1>
                <p className="text-sm text-gray-500">Medfo Enterprise</p>
              </div>
            </div>
          </div>
          <button onClick={() => navigate('/')} className="px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition">
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
            <button className="p-4 border-2 border-gray-200 rounded-lg hover:border-pink-600 hover:bg-pink-50 transition">
              <h3 className="font-semibold text-gray-800">Dispense Medication</h3>
              <p className="text-sm text-gray-600 mt-1">Process prescription</p>
            </button>
            <button className="p-4 border-2 border-gray-200 rounded-lg hover:border-pink-600 hover:bg-pink-50 transition">
              <h3 className="font-semibold text-gray-800">Manage Inventory</h3>
              <p className="text-sm text-gray-600 mt-1">Update stock levels</p>
            </button>
            <button className="p-4 border-2 border-gray-200 rounded-lg hover:border-pink-600 hover:bg-pink-50 transition">
              <h3 className="font-semibold text-gray-800">Order Supplies</h3>
              <p className="text-sm text-gray-600 mt-1">Restock medications</p>
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
