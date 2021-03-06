import React, { useRef, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import AllEvents from "./pages/AllEvents";
import AllUsers from "./pages/AllUsers";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile/Profile";
import ProfileEdit from "./pages/Profile/EditProfile";
import ProfileEventEdit from "./pages/Profile/EventEdit";
import ProfileEventDetails from "./pages/Profile/EventDetails";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import ProtectedRouteAdmin from "./components/ProtectedRouteAdmin";
import NavMain from "./components/NavMain";
import FormEvent from "./components/Forms/FormEvent";
import SingleUser from "./pages/SingleUser";
import SingleEvent from "./pages/SingleEvent";
import Admin from "./pages/Admin";
import FormCreateCategory from "./components/Forms/FormCreateCategory";
import FormEditCategory from "./components/Forms/FormEditCategory";
import FormCreateTag from "./components/Forms/FormCreateTag";
import FormEditTag from "./components/Forms/FormEditTag";
import FormCreateUser from "./components/Forms/FormCreateUser";
import FormEditUser from "./components/Forms/FormEditUser";
import AdminFormEditEvent from "./components/Forms/AdminFormEditEvent";
import CommentGroup from "./components/Comment/CommentGroup";
import SearchBar from "./components/SearchBar/SearchBar";
import OneEventCard from "./pages/extra-pages/OneEventCard";
import AllEventExtra from "./pages/extra-pages/AllEventExtra";
import Footer from "./components/Footer";
import HomeSection from "./HomeSection";
import HomeSection2 from "./HomeSection2";
import HomeSection3 from "./pages/extra-pages/HomeSEction3";
import { CSSTransition, TransitionGroup } from "react-transition-group";

function App() {
  return (
    <div className="App">
      <NavMain />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/all-events" component={AllEvents} />
        <Route exact path="/all-users" component={AllUsers} />
        <Route exact path="/add-event" component={FormEvent} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/all-users/:userId" component={SingleUser} />
        <Route exact path="/all-events/:eventId" component={SingleEvent} />
        <Route exact path="/OneEventCard" component={OneEventCard} />
        <Route exact path="/AllEventExtra" component={AllEventExtra} />
        <Route exact path="/HomeSection" component={HomeSection} />
        <Route exact path="/HomeSection2" component={HomeSection2} />
        <Route exact path="/HomeSection3" component={HomeSection3} />
        <ProtectedRoute exact path="/Admin" component={Admin} />
        {/* <Route exact path="/HomeSection" component={HomeSection} /> */}
        <ProtectedRouteAdmin exact path="/Admin" component={Admin} />
        <ProtectedRoute
          exact
          path="/Admin/category-create"
          component={FormCreateCategory}
        />
        <ProtectedRoute
          exact
          path="/Admin/category-edit/:id"
          component={FormEditCategory}
        />
        <ProtectedRoute
          exact
          path="/Admin/tag-create"
          component={FormCreateTag}
        />
        <ProtectedRoute
          exact
          path="/Admin/tag-edit/:id"
          component={FormEditTag}
        />
        <ProtectedRoute
          exact
          path="/Admin/user-create"
          component={FormCreateUser}
        />
        <ProtectedRoute
          exact
          path="/Admin/user-edit/:id"
          component={FormEditUser}
        />
        <ProtectedRoute
          exact
          path="/Admin/event-create"
          component={FormEvent}
        />
        <ProtectedRoute
          exact
          path="/Admin/event-edit/:id"
          component={AdminFormEditEvent}
        />
        <Route exact path="/comment" component={CommentGroup} />
        <ProtectedRoute exact path="/profile" component={Profile} />
        <ProtectedRoute exact path="/profile/edit/" component={ProfileEdit} />
        <ProtectedRoute
          exact
          path="/profile/event/:id/edit"
          component={ProfileEventEdit}
        />
        <ProtectedRoute
          exact
          path="/profile/event/:id/details"
          component={ProfileEventDetails}
        />
        <ProtectedRoute exact path="/searchbar" component={SearchBar} />
        <Route component={NotFound} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
