import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import BlogOverview from "./views/BlogOverview";
import UserProfileLite from "./views/UserProfileLite";
import AddNewPost from "./views/AddNewPost";
import ChangePost from "./views/ChangePost";
import Errors from "./views/Errors";
import ComponentsOverview from "./views/ComponentsOverview";
import Tables from "./views/Tables";
import BlogPosts from "./views/BlogPosts";
import ApplyView from "./views/ApplyView";
import MyPosts from "./views/MyPosts";
import MyApply from "./views/MyApply";
import ManagePost from "./views/ManagePost";

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/blog-overview" />
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
    path: "/errors",
    layout: DefaultLayout,
    component: Errors
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
  }
  
];
