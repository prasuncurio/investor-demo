import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import UseCaseSelector from '@/components/UseCaseSelector';
import CardiovascularDemo from '@/components/CardiovascularDemo';
import BreastCancerDemo from '@/components/BreastCancerDemo';

function App() {
  return (
    <Router basename="/investor-demo">
      <Routes>
        {/* Landing page */}
        <Route path="/" element={<UseCaseSelector />} />

        {/* Cardiovascular demo */}
        <Route path="/demo/cardiovascular" element={<CardiovascularDemo />} />

        {/* Breast cancer demo */}
        <Route path="/demo/breast-cancer" element={<BreastCancerDemo />} />

        {/* Catch-all redirect */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App
