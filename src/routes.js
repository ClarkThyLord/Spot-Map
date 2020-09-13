import Map from './pages/map.vue';

import History from './pages/history-client.vue';
import MetricsClient from './pages/metrics-client.vue';

import MetricsBusiness from './pages/metrics-business.vue';
import GenerateQR from './pages/generate-qr.vue';

import Report from './pages/report.vue';

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
    path: '/metrics-business',
    component: MetricsBusiness
  },
  {
    path: '/generate-qr',
    component: GenerateQR
  },
  {
    path: '/report',
    component: Report
  },
];
