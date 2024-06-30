import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import AccountPage from "./components/Pages/Dashboard/Account";
import UsersPage from "./components/Pages/Dashboard/Users";
import DashboardPage from "./components/Pages/Dashboard/Dash";
import PostsPage from "./components/Pages/Dashboard/Posts/Posts";
import NewPostPage from "./components/Pages/Dashboard/Posts/Newposts";
import CategoriesPage from "./components/Pages/Dashboard/Categories";
import TagsPage from "./components/Pages/Dashboard/Tags";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/posts/new" element={<NewPostPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/tags" element={<TagsPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/users" element={<UsersPage />} />
      </Routes>
    </Router>
  );
}

export default App;
