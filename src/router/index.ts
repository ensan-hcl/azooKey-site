import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/components/Main.vue'
import Contact from '@/components/pages/Contact.vue'
import OpenSource from '@/components/pages/OpenSource.vue'
import PrivacyPolicy from '@/components/pages/PrivacyPolicy.vue'
import TermsOfService from '@/components/pages/TermsOfService.vue'
import CustomTabs from '@/components/pages/CustomTabs.vue'
import QA from '@/components/pages/QA.vue'

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/PrivacyPolicy',
    name: 'PrivacyPolicy',
    component: PrivacyPolicy
  },
  {
    path: '/TermsOfService',
    name: 'TermsOfService',
    component: TermsOfService
  },
  {
    path: '/CustomTabs',
    name: 'CustomTabs',
    component: CustomTabs
  },
  {
    path: '/OpenSource',
    name: 'OpenSource',
    component: OpenSource
  },
  {
    path: '/QA',
    name: 'QA',
    component: QA
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
