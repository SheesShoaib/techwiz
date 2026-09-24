import { Routes, Route } from "react-router-dom";

/* layouts */
import PublicLayout from "./components/layout/PublicLayout";
import AdminLayout from "./components/admin/AdminLayout";

/* public pages */
import Home from "./pages/public/Home";
import Explore from "./pages/public/Explore";
import Characters from "./pages/public/Characters";
import Stories from "./pages/public/Stories";
import Events from "./pages/public/Events";
import Shop from "./pages/public/Shop";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";

/* admin pages */
import Dashboard from "./pages/admin/Dashboard";
import Analytics from "./pages/admin/Analytics";
import Users from "./pages/admin/Users";
import Content from "./pages/admin/Content";
import ManageArticles from "./pages/admin/ManageArticles";
import ManageCategories from "./pages/admin/ManageCategories";
import ManageCharacters from "./pages/admin/ManageCharacters";
import ManageMultimedia from "./pages/admin/ManageMultimedia";
import ManageSubmissions from "./pages/admin/ManageSubmissions";
import EventsManagement from "./pages/admin/EventsManagement";
import Orders from "./pages/admin/Orders";
import Products from "./pages/admin/Products";
import Feedback from "./pages/admin/Feedback";
import ManageAI from "./pages/admin/ManageAI";
import Settings from "./pages/admin/Settings";
import ManageMerchandise from "./pages/admin/ManageMerchandise";


function App() {
  return (
    <Routes>

      {/* public website */}
      <Route element={<PublicLayout />}>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/explore"
          element={<Explore />}
        />

        <Route
          path="/characters"
          element={<Characters />}
        />

        <Route
          path="/stories"
          element={<Stories />}
        />

        <Route
          path="/events"
          element={<Events />}
        />

        <Route
          path="/shop"
          element={<Shop />}
        />

        <Route path="/login" 
        element={<Login />} />

        <Route path="/register" 
        element={<Register />} />
      </Route>


      {/* admin panel */}
      <Route
        path="/admin"
        element={<AdminLayout />}
      >

        {/* dashboard */}
        <Route
          index
          element={<Dashboard />}
        />

        {/* overview */}
        <Route
          path="analytics"
          element={<Analytics />}
        />


        {/* community */}
        <Route
          path="users"
          element={<Users />}
        />

        <Route
          path="submissions"
          element={<ManageSubmissions />}
        />

        <Route
          path="feedback"
          element={<Feedback />}
        />


        {/* content */}
        <Route
          path="content"
          element={<Content />}
        />

        <Route
          path="articles"
          element={<ManageArticles />}
        />

        <Route
          path="categories"
          element={<ManageCategories />}
        />

        <Route
          path="characters"
          element={<ManageCharacters />}
        />

        <Route
          path="multimedia"
          element={<ManageMultimedia />}
        />

        <Route
          path="ai"
          element={<ManageAI />}
        />

        <Route
          path="merchandise"
          element={<ManageMerchandise />}
        />

        {/* events */}
        <Route
          path="events"
          element={<EventsManagement />}
        />


        {/* store */}
        <Route
          path="products"
          element={<Products />}
        />

        <Route
          path="orders"
          element={<Orders />}
        />


        {/* settings */}
        <Route
          path="settings"
          element={<Settings />}
        />

      </Route>


    </Routes>
  );
}

export default App;