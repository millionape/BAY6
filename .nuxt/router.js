import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0151de97 = () => interopDefault(import('../pages/admin.vue' /* webpackChunkName: "pages/admin" */))
const _a7ead802 = () => interopDefault(import('../pages/blog-details.vue' /* webpackChunkName: "pages/blog-details" */))
const _04c878a3 = () => interopDefault(import('../pages/blog-one.vue' /* webpackChunkName: "pages/blog-one" */))
const _10d76f88 = () => interopDefault(import('../pages/cart.vue' /* webpackChunkName: "pages/cart" */))
const _124556ae = () => interopDefault(import('../pages/checkout.vue' /* webpackChunkName: "pages/checkout" */))
const _52bae2e8 = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _e702642a = () => interopDefault(import('../pages/diction-three.vue' /* webpackChunkName: "pages/diction-three" */))
const _f4bae64e = () => interopDefault(import('../pages/diction-two.vue' /* webpackChunkName: "pages/diction-two" */))
const _79272ab3 = () => interopDefault(import('../pages/gallery-one.vue' /* webpackChunkName: "pages/gallery-one" */))
const _6dee255f = () => interopDefault(import('../pages/landing.vue' /* webpackChunkName: "pages/landing" */))
const _cceba49e = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _0ecac868 = () => interopDefault(import('../pages/products.vue' /* webpackChunkName: "pages/products" */))
const _37d51500 = () => interopDefault(import('../pages/signup.vue' /* webpackChunkName: "pages/signup" */))
const _01541c95 = () => interopDefault(import('../pages/products-details/_shopname/index.vue' /* webpackChunkName: "pages/products-details/_shopname/index" */))
const _40f2e500 = () => interopDefault(import('../pages/products-details/_shopname/_id/index.vue' /* webpackChunkName: "pages/products-details/_shopname/_id/index" */))
const _603aeacc = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/admin",
    component: _0151de97,
    name: "admin"
  }, {
    path: "/blog-details",
    component: _a7ead802,
    name: "blog-details"
  }, {
    path: "/blog-one",
    component: _04c878a3,
    name: "blog-one"
  }, {
    path: "/cart",
    component: _10d76f88,
    name: "cart"
  }, {
    path: "/checkout",
    component: _124556ae,
    name: "checkout"
  }, {
    path: "/contact",
    component: _52bae2e8,
    name: "contact"
  }, {
    path: "/diction-three",
    component: _e702642a,
    name: "diction-three"
  }, {
    path: "/diction-two",
    component: _f4bae64e,
    name: "diction-two"
  }, {
    path: "/gallery-one",
    component: _79272ab3,
    name: "gallery-one"
  }, {
    path: "/landing",
    component: _6dee255f,
    name: "landing"
  }, {
    path: "/login",
    component: _cceba49e,
    name: "login"
  }, {
    path: "/products",
    component: _0ecac868,
    name: "products"
  }, {
    path: "/signup",
    component: _37d51500,
    name: "signup"
  }, {
    path: "/products-details/:shopname?",
    component: _01541c95,
    name: "products-details-shopname"
  }, {
    path: "/products-details/:shopname?/:id?",
    component: _40f2e500,
    name: "products-details-shopname-id"
  }, {
    path: "/",
    component: _603aeacc,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
