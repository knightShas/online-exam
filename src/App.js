import { Routes, Route } from 'react-router-dom';
import './App.css';
import CandidateDashboard from './component/CandidateDashboard';
import CompanyDashboard from './component/CompanyDashboard';
import CandidateLogin from './component/pages/CandidateLogin';
import CandidateRegister from './component/pages/CandidateRegister';
import CompanyLogin from './component/pages/CompanyLogin';
import CompanyRegister from './component/pages/CompanyRegister';
import IndexPage from "./component/pages/IndexPage";
import Logout from './component/pages/Logout';
import NewTest from './component/pages/NewTest';
import QuestionAdd from './component/pages/QuestionAdd';
import UserRedirect from './component/pages/UserRedirect';
import CandidateReport from './component/reports/CandidateReport';
import Report from './component/reports/Report';
import QuestionScreen from './component/testScreen/QuestionScreen';
import TestInfo from './component/testScreen/TestInfo';

function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/company" element={<CompanyLogin />} />
          <Route path="/company_reg" element={<CompanyRegister />} />
          <Route path="/Cdashboard" element={<CompanyDashboard />} />
          <Route path="/newtest" element={<NewTest />} />
          <Route path="/question" element={<QuestionAdd />} />
          <Route path="/report" element={<Report />} />
          <Route path="/candidate" element={<CandidateLogin />} />
          <Route path="/candidate_reg" element={<CandidateRegister />} />
          <Route path="/Udashboard" element={<CandidateDashboard />} />
          <Route path="/test" element={<QuestionScreen />} />
          <Route path="/candidate_report" element={<CandidateReport />} />
          <Route path="/redirecting" element={<UserRedirect/>} />

          <Route path="/start" element={<TestInfo />} />
          <Route path="/logout" element={<Logout/>} />
        </Routes>
    </div>
  );
}

export default App;
