import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";
import { NoBarLayout } from "./layouts";

// Route Views
import BlogOverview from "./views/BlogOverview";
import UserProfileLite from "./views/UserProfileLite";
import AddNewPost from "./views/AddNewPost";
import ChangePost from "./views/ChangePost";
import Status from "./views/Status";
import ComponentsOverview from "./views/ComponentsOverview";
import Tables from "./views/Tables";
import BlogPosts from "./views/BlogPosts";
import ApplyView from "./views/ApplyView";
import MyPosts from "./views/MyPosts";
import MyApply from "./views/MyApply";
import ManagePost from "./views/ManagePost";
import SignUp from "./views/SignUp";
import SignIn from "./views/SignIn";
import DataOverview from "./views/DataOverview";
import SearchUser from "./views/SearchUser";
import UserProfileRoot from "./views/UserProfileRoot";
import UserProfileView from "./views/UserProfileView";
import ManagerBar from "./layouts/ManagerBar";
import SearchApply from "./views/SearchApply";
import SearchPost from "./views/SearchPost";
import ManagerPostView from "./views/ManagerPostView";

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/blog-posts" />
  },
  {
    path: "/blog-overview",
    layout: DefaultLayout,
    component: BlogOverview
  },
  {
    path: "/user-profile-lite",
    layout: DefaultLayout,
    component: UserProfileLite
  },
  {
    path: "/add-new-post",
    layout: DefaultLayout,
    component: AddNewPost
  },
  {
    path: "/change-post",
    layout: DefaultLayout,
    component: ChangePost
  },


  {
    path: "/status",
    layout: DefaultLayout,
    component: Status
  },
  {
    path: "/components-overview",
    layout: DefaultLayout,
    component: ComponentsOverview
  },
  {
    path: "/tables",
    layout: DefaultLayout,
    component: Tables
  },
  {
    path: "/blog-posts",
    layout: DefaultLayout,
    component: BlogPosts
  },
  {
    path: "/apply-view",
    layout: DefaultLayout,
    component: ApplyView
  },
  {
    path: "/my-posts",
    layout: DefaultLayout,
    component: MyPosts
  },
  {
    path: "/my-apply",
    layout: DefaultLayout,
    component: MyApply
  },
  {
    path: "/manage-post",
    layout: DefaultLayout,
    component: ManagePost
  },
  {
    path: "/sign-up",
    layout: NoBarLayout,
    component: SignUp
  },
  {
    path: "/sign-in",
    layout: NoBarLayout,
    component: SignIn
  },
  {
      path: "/data-overview",
    layout: ManagerBar,
    component: DataOverview
  },
  {
    path: "/search-user",
    layout: ManagerBar,
    component: SearchUser
  },
  {
    path: "/search-post",
    layout: ManagerBar,
    component: SearchPost
  },
  {
    path: "/search-apply",
    layout: ManagerBar,
    component: SearchApply
  },
  {
    path: "/user-profile-root",
    layout: DefaultLayout,
    component: UserProfileRoot
  },
  {
    path: "/manager-profile-root",
    layout: ManagerBar,
    component: UserProfileRoot
  },
  {
    path: "/user-profile-view",
    layout: DefaultLayout,
    component: UserProfileView
  },
  {
    path: "/manager-post-view",
    layout: ManagerBar,
    component: ManagerPostView
  }

];
