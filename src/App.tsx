import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import RoleSelection from './pages/RoleSelection'
import SuperAdminDashboard from './pages/dashboards/SuperAdminDashboard'
import AdminDashboard from './pages/dashboards/AdminDashboard'
import DoctorDashboard from './pages/dashboards/DoctorDashboard'
import NurseDashboard from './pages/dashboards/NurseDashboard'
import ReceptionistDashboard from './pages/dashboards/ReceptionistDashboard'
import LabTechDashboard from './pages/dashboards/LabTechDashboard'
import PharmacistDashboard from './pages/dashboards/PharmacistDashboard'
import PatientDashboard from './pages/dashboards/PatientDashboard'
import VideoCall from './pages/telemedicine/VideoCall'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RoleSelection />} />
        
        {/* Dashboard Routes */}
        <Route path="/dashboard/super-admin" element={<SuperAdminDashboard />} />
        <Route path="/dashboard/admin" element={<AdminDashboard />} />
        <Route path="/dashboard/doctor" element={<DoctorDashboard />} />
        <Route path="/dashboard/nurse" element={<NurseDashboard />} />
        <Route path="/dashboard/receptionist" element={<ReceptionistDashboard />} />
        <Route path="/dashboard/lab-tech" element={<LabTechDashboard />} />
        <Route path="/dashboard/pharmacist" element={<PharmacistDashboard />} />
        <Route path="/dashboard/patient" element={<PatientDashboard />} />
        
        {/* Telemedicine Routes */}
        <Route path="/dashboard/doctor/telemedicine" element={<VideoCall />} />
        <Route path="/dashboard/patient/telemedicine" element={<VideoCall />} />
        
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
