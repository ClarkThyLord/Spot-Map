import Map from './pages/map.vue';
import Metrics from './pages/metrics.vue';

import History from './pages/history.vue';

import GenerateQR from './pages/generate-qr.vue';

import Report from './pages/report.vue';

export default [
  {
    path: '/',
    component: Map,
    name: "map"
  },
  {
    path: '/metrics',
    component: Metrics
  },
  {
    path: '/history',
    component: History
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
