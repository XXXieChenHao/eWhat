export default [{
  path: "/",
  name: '/',
  redirect: '/home',
  meta: {
    title: '',
    keepAlive: true,
    back: true
  },
  component: (resolve) => require(["@/views/index"], resolve)
}, {
  path: "/index",
  name: "index",
  meta: {
    title: 'eWhat',
    keepAlive: true,
    back: false
  },
  component: (resolve) => require(["@/views/index"], resolve),
  children: [{
    path: "/home",
    name: "home",
    meta: {
      title: 'eWhat',
      keepAlive: true,
      back: false
    },
    component: (resolve) => require(["@/views/home/index"], resolve),
  }, {
    path: "/menu",
    name: "menu",
    meta: {
      title: '菜单',
      keepAlive: true,
      back: false
    },
    component: (resolve) => require(["@/views/menu/index"], resolve),
  }, {
    path: "/usercenter",
    name: "usercenter",
    meta: {
      title: '个人中心',
      keepAlive: true,
      back: false
    },
    component: (resolve) => require(["@/views/usercenter/index"], resolve),
  }, {
    path: "/canteen",
    name: "canteen",
    meta: {
      title: '我的饭圈',
      keepAlive: true,
      back: true
    },
    component: (resolve) => require(["@/views/canteen/index"], resolve),
  }, {
    path: "/addFood",
    name: "addFood",
    meta: {
      title: '饭圈设置',
      keepAlive: true,
      back: true
    },
    component: (resolve) => require(["@/views/canteen/addFood"], resolve),
  }, {
    path: "/round",
    name: "round",
    meta: {
      title: '周围店铺',
      keepAlive: true,
      back: true
    },
    component: (resolve) => require(["@/views/round/index"], resolve),
  }, {
    path: "/userInfo",
    name: "userInfo",
    meta: {
      title: '个人信息',
      keepAlive: true,
      back: true
    },
    component: (resolve) => require(["@/views/userInfo/index"], resolve),
  }, {
    path: "/safe",
    name: "safe",
    meta: {
      title: '安全中心',
      keepAlive: true,
      back: true
    },
    component: (resolve) => require(["@/views/safeCenter/index"], resolve),
  }, {
    path: "/feedback",
    name: "feedback",
    meta: {
      title: '功能反馈',
      keepAlive: true,
      back: true
    },
    component: (resolve) => require(["@/views/feedback/index"], resolve),
  }, {
    path: "/servicer",
    name: "servicer",
    meta: {
      title: '联系客服',
      keepAlive: true,
      back: true
    },
    component: (resolve) => require(["@/views/servicer/index"], resolve),
  }, {
    path: "/setting",
    name: "setting",
    meta: {
      title: '用户设置',
      keepAlive: true,
      back: true
    },
    component: (resolve) => require(["@/views/setting/index"], resolve),
  }]
}]