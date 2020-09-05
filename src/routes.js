import Map from './pages/map.vue';
import History from './pages/history.vue';
import AlertClient from './pages/alert.client.vue';
import AlertBusiness from './pages/alert.business.vue';
import GenerateQR from './pages/generate-qr.vue';

export default [
  {
    path: '/',
    component: Map
  },
  {
    path: '/history',
    component: History
  },
  {
    path: '/alert-client',
    component: AlertClient
  },
  {
    path: '/alert-business',
    component: AlertBusiness
  },
  {
    path: '/generate-qr',
    component: GenerateQR
  }
];
