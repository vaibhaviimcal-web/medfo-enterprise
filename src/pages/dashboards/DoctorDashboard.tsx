import { useNavigate } from 'react-router-dom'
import DashboardLayout from '../../components/DashboardLayout'
import { Video, Users, Calendar, FileText, Clock, TrendingUp, Activity, Sparkles } from 'lucide-react'

export default function DoctorDashboard() {
  const navigate = useNavigate()

  const stats = [
    { 
      label: "Today's Patients", 
      value: '24', 
      change: '+12%',
      icon: <Users className="w-6 h-6" />, 
      gradient: 'from-blue-500 to-blue-600' 
    },
    { 
      label: 'Video Consultations', 
      value: '8', 
      change: '+24%',
      icon: <Video className="w-6 h-6" />, 
      gradient: 'from-purple-500 to-purple-600' 
    },
    { 
      label: 'Appointments', 
      value: '18', 
      change: '+8%',
      icon: <Calendar className="w-6 h-6" />, 
      gradient: 'from-green-500 to-green-600' 
    },
    { 
      label: 'Prescriptions', 
      value: '32', 
      change: '+16%',
      icon: <FileText className="w-6 h-6" />, 
      gradient: 'from-orange-500 to-orange-600' 
    },
  ]

  const upcomingConsultations = [
    { id: 1, patient: 'John Doe', time: '10:00 AM', type: 'Video Call', status: 'upcoming' },
    { id: 2, patient: 'Jane Smith', time: '11:30 AM', type: 'Video Call', status: 'upcoming' },
    { id: 3, patient: 'Mike Johnson', time: '02:00 PM', type: 'In-Person', status: 'upcoming' },
    { id: 4, patient: 'Sarah Williams', time: '03:30 PM', type: 'Video Call', status: 'upcoming' },
  ]

  const recentActivity = [
    { action: 'Completed video consultation', patient: 'Emma Davis', time: '30 min ago' },
    { action: 'Prescribed medication', patient: 'Robert Brown', time: '1 hour ago' },
    { action: 'Updated medical records', patient: 'Lisa Anderson', time: '2 hours ago' },
  ]

  return (
    <DashboardLayout role="doctor" title="Doctor Dashboard">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="glass-card p-6 card-hover">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center text-white shadow-lg`}>
                {stat.icon}
              </div>
              <span className="text-sm font-semibold text-green-600">{stat.change}</span>
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-1">{stat.value}</h3>
            <p className="text-sm text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Upcoming Consultations */}
        <div className="lg:col-span-2 glass-card p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-800">Upcoming Consultations</h2>
            <button className="text-sm text-primary-600 hover:text-primary-700 font-semibold">
              View All
            </button>
          </div>
          <div className="space-y-4">
            {upcomingConsultations.map((consultation) => (
              <div key={consultation.id} className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-100 hover:border-primary-200 hover:shadow-md transition-all">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white font-semibold">
                    {consultation.patient.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{consultation.patient}</h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{consultation.time}</span>
                      {consultation.type === 'Video Call' && (
                        <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full font-semibold">
                          Video
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                {consultation.type === 'Video Call' && (
                  <button
                    onClick={() => navigate('/dashboard/doctor/telemedicine')}
                    className="px-4 py-2 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg hover:shadow-lg transition-all flex items-center space-x-2"
                  >
                    <Video className="w-4 h-4" />
                    <span>Join Call</span>
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions & Recent Activity */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <div className="glass-card p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <button
                onClick={() => navigate('/dashboard/doctor/prescription')}
                className="w-full p-4 bg-gradient-to-r from-medical-teal-500 to-medical-teal-600 text-white rounded-xl hover:shadow-lg transition-all flex items-center justify-center space-x-2"
              >
                <Sparkles className="w-5 h-5" />
                <span className="font-semibold">AI Prescription</span>
              </button>
              <button
                onClick={() => navigate('/dashboard/doctor/telemedicine')}
                className="w-full p-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all flex items-center justify-center space-x-2"
              >
                <Video className="w-5 h-5" />
                <span className="font-semibold">Start Video Call</span>
              </button>
              <button className="w-full p-4 bg-white border-2 border-gray-200 text-gray-700 rounded-xl hover:border-primary-500 hover:shadow-md transition-all flex items-center justify-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span className="font-semibold">Schedule Appointment</span>
              </button>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="glass-card p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Activity</h2>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-800 font-medium">{activity.action}</p>
                    <p className="text-xs text-gray-600">{activity.patient}</p>
                    <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
