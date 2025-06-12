import { Suspense, lazy } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Spin } from "antd";
import Layout from "../Layouts";

// Lazy load pages
const Main = lazy(() => import("../Pages/Main"));
const WhoWeAre = lazy(() => import("../Pages/WhoWeAre"));
const OurStory = lazy(() => import("../Pages/OurStory"));
const OurMission = lazy(() => import("../Pages/OurMission"));
const SecretaryGeneral = lazy(() => import("../Pages/SecretaryGeneral"));

// EchoLine Global pages
const Constitution = lazy(() => import("../Pages/Constitution"));
const InternalInterests = lazy(() => import("../Pages/InternalInterests"));
const Structure = lazy(() => import("../Pages/Structure"));
const Stakeholders = lazy(() => import("../Pages/Stakeholders"));

// Publications
const Journals = lazy(() => import("../Pages/Journals"));
const Articles = lazy(() => import("../Pages/Articles"));
const BecomeAuthor = lazy(() => import("../Pages/BecomeAuthor"));

// Activities - note file names must exist accordingly
const DateVenue = lazy(() => import("../Pages/DateVenue"));
const Committees = lazy(() => import("../Pages/Committees"));       // Secretariat Meetings renamed to Committees

const Index = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Spin size="large" />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
            
            {/* About Us */}
            <Route path="whoweare" element={<WhoWeAre />} />
            <Route path="ourstory" element={<OurStory />} />
            <Route path="ourmission" element={<OurMission />} />
            <Route path="secretarygeneral" element={<SecretaryGeneral />} />
            
            {/* Activities */}
            <Route path="datevenue" element={<DateVenue />} />
            <Route path="committees" element={<Committees />} />
           
           {/* Diplomacy Community */}
            <Route path="constitution" element={<Constitution />} />
            <Route path="internalinterests" element={<InternalInterests />} />
            <Route path="structure" element={<Structure />} />
            <Route path="stakeholders" element={<Stakeholders />} />
            
            {/* Publications */}
            <Route path="journals" element={<Journals />} />
            <Route path="articles" element={<Articles />} />
            <Route path="becomeauthor" element={<BecomeAuthor />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Index;
