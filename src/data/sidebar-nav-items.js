export default function() {
  return [
    // {
    //   title: "Blog Dashboard",
    //   to: "/blog-overview",
    //   htmlBefore: '<i class="material-icons">edit</i>',
    //   htmlAfter: ""
    // },
    {
      title: "召集令广场",
      htmlBefore: '<i class="material-icons">vertical_split</i>',
      to: "/blog-posts",
    },
    {
      title: "发布召集令",
      htmlBefore: '<i class="fas fa-edit"></i>',
      to: "/add-new-post",
    },
    // {
    //   title: "Forms & Components",
    //   htmlBefore: '<i class="material-icons">view_module</i>',
    //   to: "/components-overview",
    // },
    // {
    //   title: "Tables",
    //   htmlBefore: '<i class="material-icons">table_chart</i>',
    //   to: "/tables",
    // },
    // {
    //   title: "User Profile",
    //   htmlBefore: '<i class="material-icons">person</i>',
    //   to: "/user-profile-lite",
    // },
    // {
    //   title: "Errors",
    //   htmlBefore: '<i class="material-icons">error</i>',
    //   to: "/errors",
    // },
    {
      title: "我的召集令",
      htmlBefore: '<i class="fas fa-flag"></i>',
      to: "/my-posts",
    },
    {
      title: "我的接令",
      htmlBefore: '<i class="fas fa-quote-left"></i>',
      to: "/my-apply",
    },
    // {
    //   title: "Manage Post",
    //   htmlBefore: '<i class="material-icons">table_chart</i>',
    //   to: "/manage-post",
    // }
  ];
}
