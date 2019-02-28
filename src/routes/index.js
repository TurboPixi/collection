export default [
  {path: '/', component: () => import('./entry.vue')},
  {
    path: '/tasks',
    component: () => import('./tasks/entry.vue'),
    children: [
      {path: 'table', component: () => import('./tasks/table.vue')}
    ]
  }
]