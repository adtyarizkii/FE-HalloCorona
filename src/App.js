import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Auth from "./pages/auth/Auth";
import LayoutPatient from "./pages/layout/LayoutPatient";
import LayoutDoctor from "./pages/layout/LayoutDoctor";
import HomePage from "./pages/patient/HomePage";
import DetailArticleAuth from "./pages/auth/DetailArticle";
import DetailArticle from "./components/article/DetailArticle";
import Profile from "./components/profile/Profile";
import Reservation from "./pages/doctor/Reservation";
import ReservationPage from "./pages/patient/ReservationPage";
import Inbox from "./pages/patient/Inbox";
import Notfound from "./components/404/Notfound";
import AddArticle from "./pages/doctor/AddArticle";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/detailarticle" element={<DetailArticleAuth />} />
        <Route path="/patient" element={<LayoutPatient />}>
          <Route index element={<HomePage />} />
          <Route path="/patient/detailarticle" element={<DetailArticle />} />
          <Route path="/patient/profile" element={<Profile />} />
          <Route path="/patient/consultation" element={<ReservationPage />} />
          <Route path="/patient/inbox" element={<Inbox />} />
        </Route>
        <Route path="/doctor" element={<LayoutDoctor />}>
          <Route index element={<Reservation />} />
          <Route path="/doctor/add-article" element={<AddArticle />} />
          <Route path="/doctor/profile" element={<Profile />} />
        </Route>
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
