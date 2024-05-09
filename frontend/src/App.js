import { Route, Routes, Navigate, Router } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Singup";
import Login from "./components/Login";

import Home from "./components/Student/Home"
import Allstud from "./components/Student/Allstud"
import Addstud from "./components/Student/Addstud"
import View from "./components/Student/View"
import Edit from "./components/Student/Edit"

import ContactUs from './components/ContactUs/ContactUs';
import AllContactUS from './components/ContactUs/AllContactUs';
import ContactUsView from './components/ContactUs/ContactUsView';
import Coordinator from './components/ContactUs/Coordinator';
import Examiner from './components/ContactUs/Examiner';
import ProjectManager from './components/ContactUs/Project Manager';
import CoSupervisor from './components/ContactUs/Co-Supervisor';
import Supervisor from './components/ContactUs/Supervisor';
import ContactUsViewSupervisor from './components/ContactUs/ContactUsView-Supervisor';
import ContactUsViewCoSupervisor from './components/ContactUs/ContactUsView-CoSupervisor';
import ContactUsViewPM from './components/ContactUs/ContactUsView-Project Manager';
import ContactUsViewExaminer from './components/ContactUs/ContactUsView-Examiner';
import ContactUsViewCoordinator from './components/ContactUs/ContactUsView-Coordinator';
import Adminlog from './components/Admin/AdminLogin'
import Admin from './components/Admin/Admin'
import SupervisorLogin from './components/Login/Supervisor'
import CoSupervisorLogin from './components/Login/Co-Supervisor'
import ProjectMemberLogin from './components/Login/ProjectMember'
import ExaminerLogin from './components/Login/Examiner'
import CoordinatorLogin from './components/Login/Coordinator'
import CosupervisorHome from './components/CoSupervisor/Home'
import SupervisorHome from './components/Supervisor/Home'
import CoordinatorHome from './components/Coordinator/Home'
import ProjectMemberHome from './components/ProjectMember/Home'
import ExaminerHome from './components/Examiner/Home'
import SupervisorInput from './components/Supervisor/Addstud'
import SupervisorList from './components/Supervisor/Allstud'
import SupervisorView from './components/Supervisor/View'
import SupervisorEdit from './components/Supervisor/Edit'
import ReportMarks from './components/Student/ReportMarks'
import ReportMarksView from './components/Student/MarksView'

function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>
			{user && <Route path="/" exact element={<Main />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />

			<Route  path='/home' element={<Home />} />
			<Route  path='/allstud' element={<Allstud />} />
            <Route  path='/addstud' element={<Addstud />} />
            <Route  path="/view/:id" element={<View />} />
            <Route  path="/edit/:id" element={<Edit />} />
			<Route  path='/reportmarks' element={<ReportMarks />} />
			<Route  path='/reportmarks/:id' element={<ReportMarksView />} />

			<Route  path="/contactus" element={<ContactUs />} />
			<Route  path="/allcontactus" element={<AllContactUS />} />
			<Route path="/contactusview/:id" element={<ContactUsView />} />

			<Route path="/coordinatorcontactus" element={<Coordinator/>} />
			<Route path="/examinercontactus" element={<Examiner/>} />
			<Route path="/projectmanagercontactus" element={<ProjectManager/>} />
			<Route path="/cosupervisorcontactus" element={<CoSupervisor/>} />
			<Route path="/supervisorcontactus" element={<Supervisor/>} />

			<Route path="/contactusviewsupervisor/:id" element={<ContactUsViewSupervisor/>} />
			<Route path="/contactusviewcosupervisor/:id" element={<ContactUsViewCoSupervisor/>} />
			<Route path="/contactUsviewpm/:id" element={<ContactUsViewPM/>} />
			<Route path="/contactUsviewexam/:id" element={<ContactUsViewExaminer/>} />
			<Route path="/contactUsviewcoodina/:id" element={<ContactUsViewCoordinator/>} />

			<Route  path='/admin' element={<Admin />} />
			<Route  path='/admin-login' element={<Adminlog />} />			
			<Route  path='/supervisor-login' element={<SupervisorLogin />} />
			<Route  path='/cosupervisor-login' element={<CoSupervisorLogin />} />
			<Route  path='/projectmember-login' element={<ProjectMemberLogin />} />
			<Route  path='/examiner-login' element={<ExaminerLogin />} />
			<Route  path='/coordinator-login' element={<CoordinatorLogin />} />

			<Route  path='/cosupervisor-home' element={<CosupervisorHome />} />
			<Route  path='/coordinator-home' element={<CoordinatorHome />} />
			<Route  path='/supervisor-home' element={<SupervisorHome />} />
			<Route  path='/projectmember-home' element={<ProjectMemberHome />} />
			<Route  path='/examiner-home' element={<ExaminerHome />} />

			<Route  path='/supervisor-input' element={<SupervisorInput />} />
			<Route  path='/supervisor-list' element={<SupervisorList />} />
			<Route  path='/supervisorview/:id' element={<SupervisorView />} />
			<Route  path='/supervisoredit/:id' element={<SupervisorEdit />} />
			



		</Routes>
	);
}

export default App;
