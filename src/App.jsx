import { Routes, Route } from 'react-router-dom';

// 📍 Core Pages
import LandingPage from './pages/LandingPage';
import AuthPage from './pages/AuthPage';
import DashboardPage from './pages/DashboardPage';
import LoadingScreen from './pages/LoadingScreen';
import CommunityChatPage from './pages/CommunityChatPage';
import NannyServicePage from './pages/NannyServicePage';

// 🧾 Government Scheme Detail Pages
import MaternityBenefitPage from './pages/MaternityBenefitPage';
import ICDSPage from './pages/ICDSPage';
import CrecheSchemePage from './pages/CrecheSchemePage';
import STEPPage from './pages/STEPPage';

// 💰 Wallet Feature
import SoloCircleWalletPage from './pages/SoloCircleWalletPage';

// 🧒 Childcare Support Form
import ChildcareForm from './pages/ChildcareForm'; // ✅ NEW
import TherapyPage from './pages/TherapyPage';

function App() {
  return (
    <Routes>
      {/* 🔰 Landing & Authentication */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/therapy" element={<TherapyPage />} />

      {/* ⚡ Core Navigation */}
      <Route path="/loading" element={<LoadingScreen />} />
      <Route path="/dashboard" element={<DashboardPage />} />

      {/* 💬 Community & Support Services */}
      <Route path="/community-chat" element={<CommunityChatPage />} />
      <Route path="/nanny-service" element={<NannyServicePage />} />
      <Route path="/childcare-support" element={<ChildcareForm />} /> {/* ✅ NEW */}

      {/* 📘 Government Scheme Details */}
      <Route path="/govt-schemes/maternity-benefit" element={<MaternityBenefitPage />} />
      <Route path="/govt-schemes/icds" element={<ICDSPage />} />
      <Route path="/govt-schemes/creche" element={<CrecheSchemePage />} />
      <Route path="/govt-schemes/step" element={<STEPPage />} />

      {/* 💰 Wallet */}
      <Route path="/wallet" element={<SoloCircleWalletPage />} />
    </Routes>
  );
}

export default App;
