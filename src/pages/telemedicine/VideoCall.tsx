import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { 
  Mic, 
  MicOff, 
  Video, 
  VideoOff, 
  PhoneOff, 
  Monitor, 
  MessageSquare,
  FileText,
  Activity,
  User,
  X
} from 'lucide-react'

export default function VideoCall() {
  const navigate = useNavigate()
  const [isMuted, setIsMuted] = useState(false)
  const [isVideoOn, setIsVideoOn] = useState(true)
  const [showChat, setShowChat] = useState(false)
  const [showVitals, setShowVitals] = useState(true)
  const [showPrescription, setShowPrescription] = useState(false)

  const patientVitals = [
    { label: 'Heart Rate', value: '72 bpm', status: 'normal' },
    { label: 'Blood Pressure', value: '120/80', status: 'normal' },
    { label: 'Temperature', value: '98.6°F', status: 'normal' },
    { label: 'Oxygen Level', value: '98%', status: 'normal' },
  ]

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      {/* Header */}
      <div className="bg-dark-500 px-6 py-4 flex items-center justify-between border-b border-white/10">
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
            <User className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-white font-semibold">Dr. Sarah Johnson</h2>
            <p className="text-sm text-gray-400">Consultation with John Doe</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-400">Duration: 12:34</span>
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex">
        {/* Video Area */}
        <div className="flex-1 relative p-4">
          {/* Patient Video (Main) */}
          <div className="h-full rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden shadow-2xl">
            <div className="h-full flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center mx-auto mb-4">
                  <User className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-white text-2xl font-semibold">John Doe</h3>
                <p className="text-gray-400">Patient</p>
              </div>
            </div>
          </div>

          {/* Doctor Video (Picture-in-Picture) */}
          <div className="absolute bottom-8 right-8 w-64 h-48 rounded-xl bg-gradient-to-br from-gray-700 to-gray-800 overflow-hidden shadow-xl border-2 border-white/20">
            <div className="h-full flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center mx-auto mb-2">
                  <User className="w-8 h-8 text-white" />
                </div>
                <p className="text-white text-sm font-semibold">You</p>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
            <button
              onClick={() => setIsMuted(!isMuted)}
              className={`w-14 h-14 rounded-full flex items-center justify-center transition-all ${
                isMuted ? 'bg-red-500 hover:bg-red-600' : 'bg-white/20 hover:bg-white/30 backdrop-blur-lg'
              }`}
            >
              {isMuted ? <MicOff className="w-6 h-6 text-white" /> : <Mic className="w-6 h-6 text-white" />}
            </button>

            <button
              onClick={() => setIsVideoOn(!isVideoOn)}
              className={`w-14 h-14 rounded-full flex items-center justify-center transition-all ${
                !isVideoOn ? 'bg-red-500 hover:bg-red-600' : 'bg-white/20 hover:bg-white/30 backdrop-blur-lg'
              }`}
            >
              {isVideoOn ? <Video className="w-6 h-6 text-white" /> : <VideoOff className="w-6 h-6 text-white" />}
            </button>

            <button className="w-14 h-14 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-lg flex items-center justify-center transition-all">
              <Monitor className="w-6 h-6 text-white" />
            </button>

            <button
              onClick={() => navigate(-1)}
              className="w-14 h-14 rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center transition-all"
            >
              <PhoneOff className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-96 bg-white border-l border-gray-200 flex flex-col">
          {/* Tabs */}
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => { setShowVitals(true); setShowChat(false); setShowPrescription(false); }}
              className={`flex-1 px-4 py-3 text-sm font-semibold transition-colors ${
                showVitals ? 'text-primary-600 border-b-2 border-primary-600' : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              <Activity className="w-4 h-4 inline mr-2" />
              Vitals
            </button>
            <button
              onClick={() => { setShowVitals(false); setShowChat(true); setShowPrescription(false); }}
              className={`flex-1 px-4 py-3 text-sm font-semibold transition-colors ${
                showChat ? 'text-primary-600 border-b-2 border-primary-600' : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              <MessageSquare className="w-4 h-4 inline mr-2" />
              Chat
            </button>
            <button
              onClick={() => { setShowVitals(false); setShowChat(false); setShowPrescription(true); }}
              className={`flex-1 px-4 py-3 text-sm font-semibold transition-colors ${
                showPrescription ? 'text-primary-600 border-b-2 border-primary-600' : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              <FileText className="w-4 h-4 inline mr-2" />
              Rx
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-6">
            {showVitals && (
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-800 mb-4">Patient Vitals</h3>
                {patientVitals.map((vital, index) => (
                  <div key={index} className="glass-card p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">{vital.label}</p>
                        <p className="text-2xl font-bold text-gray-800 mt-1">{vital.value}</p>
                      </div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {showChat && (
              <div className="flex flex-col h-full">
                <div className="flex-1 space-y-4 mb-4">
                  <div className="flex justify-start">
                    <div className="bg-gray-100 rounded-2xl rounded-tl-none px-4 py-2 max-w-xs">
                      <p className="text-sm text-gray-800">Hello Doctor, I've been experiencing headaches.</p>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-primary-600 rounded-2xl rounded-tr-none px-4 py-2 max-w-xs">
                      <p className="text-sm text-white">How long have you had these symptoms?</p>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    placeholder="Type a message..."
                    className="flex-1 px-4 py-2 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none"
                  />
                  <button className="px-4 py-2 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-colors">
                    Send
                  </button>
                </div>
              </div>
            )}

            {showPrescription && (
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-800 mb-4">Digital Prescription</h3>
                <div className="space-y-3">
                  <input
                    type="text"
                    placeholder="Medication name"
                    className="input-premium"
                  />
                  <input
                    type="text"
                    placeholder="Dosage"
                    className="input-premium"
                  />
                  <input
                    type="text"
                    placeholder="Frequency"
                    className="input-premium"
                  />
                  <textarea
                    placeholder="Instructions"
                    rows={4}
                    className="input-premium"
                  ></textarea>
                  <button className="btn-primary w-full">
                    Add to Prescription
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
