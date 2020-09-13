import Map from './pages/map.vue';

import History from './pages/history-client.vue';
import MetricsClient from './pages/metrics-client.vue';
import AlertClient from './pages/alert-client.vue';

import MetricsBusiness from './pages/metrics-business.vue';
import GenerateQR from './pages/generate-qr.vue';
import AlertBusiness from './pages/alert-business.vue';

export default [
  {
    path: '/',
    component: Map
  },
  {
    path: '/history-client',
    component: History
  },
  {
    path: '/metrics-client',
    component: MetricsClient
  },
  {
    path: '/alert-client',
    component: AlertClient
  },
  {
    path: '/metrics-business',
    component: MetricsBusiness
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
