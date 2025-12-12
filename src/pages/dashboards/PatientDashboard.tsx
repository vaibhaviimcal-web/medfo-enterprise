import { useNavigate } from 'react-router-dom'
import DashboardLayout from '@/components/DashboardLayout'
import { Video, Calendar, FileText, Activity, MessageSquare, Clock, User } from 'lucide-react'

export default function PatientDashboard() {
  const navigate = useNavigate()

  const stats = [
    { 
      label: 'Upcoming Appointments', 
      value: '2', 
      icon: <Calendar className="w-6 h-6" />, 
      gradient: 'from-blue-500 to-blue-600' 
    },
    { 
      label: 'Prescriptions', 
      value: '5', 
      icon: <FileText className="w-6 h-6" />, 
      gradient: 'from-green-500 to-green-600' 
    },
    { 
      label: 'Test Results', 
      value: '8', 
      icon: <Activity className="w-6 h-6" />, 
      gradient: 'from-purple-500 to-purple-600' 
    },
    { 
      label: 'Messages', 
      value: '3', 
      icon: <MessageSquare className="w-6 h-6" />, 
      gradient: 'from-orange-500 to-orange-600' 
    },
  ]

  const upcomingAppointments = [
    { 
      id: 1, 
      doctor: 'Dr. Sarah Johnson', 
      specialty: 'Cardiologist',
      date: 'Today',
      time: '10:00 AM', 
      type: 'Video Consultation' 
    },
    { 
      id: 2, 
      doctor: 'Dr. Michael Chen', 
      specialty: 'General Physician',
      date: 'Tomorrow',
      time: '02:30 PM', 
      type: 'In-Person' 
    },
  ]

  const recentPrescriptions = [
    { medication: 'Amoxicillin 500mg', doctor: 'Dr. Sarah Johnson', date: '2 days ago' },
    { medication: 'Ibuprofen 400mg', doctor: 'Dr. Michael Chen', date: '1 week ago' },
  ]

  return (
    <DashboardLayout role="patient" title="Patient Dashboard">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="glass-card p-6 card-hover">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center text-white shadow-lg`}>
                {stat.icon}
              </div>
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-1">{stat.value}</h3>
            <p className="text-sm text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Upcoming Appointments */}
        <div className="lg:col-span-2 glass-card p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-800">Upcoming Appointments</h2>
            <button className="text-sm text-primary-600 hover:text-primary-700 font-semibold">
              View All
            </button>
          </div>
          <div className="space-y-4">
            {upcomingAppointments.map((appointment) => (
              <div key={appointment.id} className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-100 hover:border-primary-200 hover:shadow-md transition-all">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{appointment.doctor}</h3>
                    <p className="text-sm text-gray-600">{appointment.specialty}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{appointment.date} at {appointment.time}</span>
                      {appointment.type === 'Video Consultation' && (
                        <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full font-semibold">
                          Video
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                {appointment.type === 'Video Consultation' && (
                  <button
                    onClick={() => navigate('/dashboard/patient/telemedicine')}
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

        {/* Quick Actions & Recent Prescriptions */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <div className="glass-card p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <button className="w-full p-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:shadow-lg transition-all flex items-center justify-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span className="font-semibold">Book Appointment</span>
              </button>
              <button
                onClick={() => navigate('/dashboard/patient/telemedicine')}
                className="w-full p-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all flex items-center justify-center space-x-2"
              >
                <Video className="w-5 h-5" />
                <span className="font-semibold">Video Consultation</span>
              </button>
              <button className="w-full p-4 bg-white border-2 border-gray-200 text-gray-700 rounded-xl hover:border-primary-500 hover:shadow-md transition-all flex items-center justify-center space-x-2">
                <FileText className="w-5 h-5" />
                <span className="font-semibold">View Records</span>
              </button>
            </div>
          </div>

          {/* Recent Prescriptions */}
          <div className="glass-card p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Prescriptions</h2>
            <div className="space-y-4">
              {recentPrescriptions.map((prescription, index) => (
                <div key={index} className="p-3 bg-white rounded-lg border border-gray-100">
                  <p className="text-sm font-semibold text-gray-800">{prescription.medication}</p>
                  <p className="text-xs text-gray-600 mt-1">{prescription.doctor}</p>
                  <p className="text-xs text-gray-400 mt-1">{prescription.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
