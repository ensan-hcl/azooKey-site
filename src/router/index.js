import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Contact from '@/components/pages/Contact'
import PrivacyPolicy from '@/components/pages/PrivacyPolicy'
import TermsOfService from '@/components/pages/TermsOfService'
import Ver1_5_message from '@/components/pages/messages/Ver1_5_message'
import CustomTabs from '@/components/pages/CustomTabs'


Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
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
      path: '/messages/ver1_5',
      name: 'Ver1_5_message',
      component: Ver1_5_message
    }
  ]
})
