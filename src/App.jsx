import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Department from './pages/Department.jsx';
import DoctorDetail from './pages/DoctorDetail.jsx';
import Committees from './pages/Committees.jsx';
import { AuthProvider } from './admin/AuthContext.jsx';
import Protected from './admin/Protected.jsx';
import Login from './admin/Login.jsx';
import Layout from './admin/Layout.jsx';
import Dashboard from './admin/Dashboard.jsx';
import Doctors from './admin/Doctors.jsx';
import DoctorForm from './admin/DoctorForm.jsx';
import Crud from './admin/Crud.jsx';
import Profile from './admin/Profile.jsx';

// Legacy static pages — 1:1 preserved from PHP (no code lost)
import About from './pages/legacy/About.jsx';
import Assist from './pages/legacy/Assist.jsx';
import Award from './pages/legacy/Award.jsx';
import Book from './pages/legacy/Book.jsx';
import Cafe from './pages/legacy/Cafe.jsx';
import Center from './pages/legacy/Center.jsx';
import Chairman from './pages/legacy/Chairman.jsx';
import Common from './pages/legacy/Common.jsx';
import Confer from './pages/legacy/Confer.jsx';
import Contact from './pages/legacy/Contact.jsx';
import Course from './pages/legacy/Course.jsx';
import Eligiblity from './pages/legacy/Eligiblity.jsx';
import Faculty from './pages/legacy/Faculty.jsx';
import Fees from './pages/legacy/Fees.jsx';
import Govrn from './pages/legacy/Govrn.jsx';
import Guardians from './pages/legacy/Guardians.jsx';
import Hostal from './pages/legacy/Hostal.jsx';
import Info from './pages/legacy/Info.jsx';
import It from './pages/legacy/It.jsx';
import Land from './pages/legacy/Land.jsx';
import Legends from './pages/legacy/Legends.jsx';
import Library from './pages/legacy/Library.jsx';
import Principal from './pages/legacy/Principal.jsx';
import Quality from './pages/legacy/Quality.jsx';
import Resource from './pages/legacy/Resource.jsx';
import Rules from './pages/legacy/Rules.jsx';
import Vice from './pages/legacy/Vice.jsx';

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dept/:slug" element={<Department />} />
        <Route path="/doctor/:id" element={<DoctorDetail />} />
        <Route path="/committees" element={<Committees />} />
        <Route path="/committee" element={<Committees />} />

        {/* static pages preserved */}
        <Route path="/about" element={<About />} />
        <Route path="/assist" element={<Assist />} />
        <Route path="/award" element={<Award />} />
        <Route path="/book" element={<Book />} />
        <Route path="/cafe" element={<Cafe />} />
        <Route path="/center" element={<Center />} />
        <Route path="/chairman" element={<Chairman />} />
        <Route path="/common" element={<Common />} />
        <Route path="/confer" element={<Confer />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/course" element={<Course />} />
        <Route path="/eligiblity" element={<Eligiblity />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/fees" element={<Fees />} />
        <Route path="/govrn" element={<Govrn />} />
        <Route path="/guardians" element={<Guardians />} />
        <Route path="/hostal" element={<Hostal />} />
        <Route path="/info" element={<Info />} />
        <Route path="/it" element={<It />} />
        <Route path="/land" element={<Land />} />
        <Route path="/legends" element={<Legends />} />
        <Route path="/library" element={<Library />} />
        <Route path="/principal" element={<Principal />} />
        <Route path="/quality" element={<Quality />} />
        <Route path="/resource" element={<Resource />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/vice" element={<Vice />} />

        {/* admin panel (converted from /admin/*.php) */}
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin" element={<Protected><Layout /></Protected>}>
          <Route index element={<Dashboard />} />
          <Route path="doctors" element={<Doctors />} />
          <Route path="doctors/new" element={<DoctorForm />} />
          <Route path="doctors/:id" element={<DoctorForm />} />
          <Route path="departments" element={<Crud endpoint="/departments" label="Department" fields={[{ key: 'name', label: 'Department name' }]} />} />
          <Route path="titles" element={<Crud endpoint="/titles" label="Title" fields={[{ key: 'name', label: 'Title name' }]} />} />
          <Route path="types" element={<Crud endpoint="/types" label="Type" fields={[{ key: 'name', label: 'Type name' }]} />} />
          <Route path="committees" element={<Crud endpoint="/committees" label="Committee" fields={[{ key: 'name', label: 'Committee name' }, { key: 'patron', label: 'Patron', textarea: true }, { key: 'chairman', label: 'Chairman', textarea: true }, { key: 'member', label: 'Members', textarea: true }, { key: 'secretary', label: 'Secretary', textarea: true }]} />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </AuthProvider>
  );
}
