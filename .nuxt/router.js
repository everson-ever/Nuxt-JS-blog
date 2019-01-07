import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _c6f7b060 = () => interopDefault(import('..\\pages\\admin\\index.vue' /* webpackChunkName: "pages_admin_index" */))
const _3e66485a = () => interopDefault(import('..\\pages\\blog\\index.vue' /* webpackChunkName: "pages_blog_index" */))
const _1bd6791f = () => interopDefault(import('..\\pages\\contact\\index.vue' /* webpackChunkName: "pages_contact_index" */))
const _41f8f114 = () => interopDefault(import('..\\pages\\login\\index.vue' /* webpackChunkName: "pages_login_index" */))
const _0995feee = () => interopDefault(import('..\\pages\\admin\\blog\\index.vue' /* webpackChunkName: "pages_admin_blog_index" */))
const _6262bc24 = () => interopDefault(import('..\\pages\\admin\\contact\\index.vue' /* webpackChunkName: "pages_admin_contact_index" */))
const _1a8d48f2 = () => interopDefault(import('..\\pages\\admin\\blog\\create\\index.vue' /* webpackChunkName: "pages_admin_blog_create_index" */))
const _0f22738c = () => interopDefault(import('..\\pages\\admin\\blog\\edit\\_id.vue' /* webpackChunkName: "pages_admin_blog_edit__id" */))
const _867ab036 = () => interopDefault(import('..\\pages\\blog\\read\\_id.vue' /* webpackChunkName: "pages_blog_read__id" */))
const _2c705716 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/admin",
      component: _c6f7b060,
      name: "admin"
    }, {
      path: "/blog",
      component: _3e66485a,
      name: "blog"
    }, {
      path: "/contact",
      component: _1bd6791f,
      name: "contact"
    }, {
      path: "/login",
      component: _41f8f114,
      name: "login"
    }, {
      path: "/admin/blog",
      component: _0995feee,
      name: "admin-blog"
    }, {
      path: "/admin/contact",
      component: _6262bc24,
      name: "admin-contact"
    }, {
      path: "/admin/blog/create",
      component: _1a8d48f2,
      name: "admin-blog-create"
    }, {
      path: "/admin/blog/edit/:id?",
      component: _0f22738c,
      name: "admin-blog-edit-id"
    }, {
      path: "/blog/read/:id?",
      component: _867ab036,
      name: "blog-read-id"
    }, {
      path: "/",
      component: _2c705716,
      name: "index"
    }],

    fallback: false
  })
}
