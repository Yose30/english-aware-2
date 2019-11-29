import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'

import Exercise_11110 from '../components/Exercise_11110.vue'
import Exercise_11310 from '../components/Exercise_11310.vue'

import Exercise_12112 from '../components/Exercise_12112.vue'
import Exercise_12212 from '../components/Exercise_12212.vue'
import Exercise_12312 from '../components/Exercise_12312.vue'

import Exercise_21128 from '../components/Exercise_21128.vue'
import Exercise_21228 from '../components/Exercise_21228.vue'
import Exercise_21529 from '../components/Exercise_21529.vue'

import Exercise_32148 from '../components/Exercise_32148.vue'
import Exercise_32248 from '../components/Exercise_32248.vue'
import Exercise_32348 from '../components/Exercise_32348.vue'

import Exercise_41164 from '../components/Exercise_41164.vue'
import Exercise_41264 from '../components/Exercise_41264.vue'
import Exercise_41465 from '../components/Exercise_41465.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/exercise11110', name: 'exercise11110', component: Exercise_11110 },
    { path: '/exercise11310', name: 'exercise11310', component: Exercise_11310 },

    { path: '/exercise12112', name: 'exercise12112', component: Exercise_12112 },
    { path: '/exercise12212', name: 'exercise12212', component: Exercise_12212 },
    { path: '/exercise12312', name: 'exercise12312', component: Exercise_12312 },

    { path: '/exercise21128', name: 'exercise21128', component: Exercise_21128 },
    { path: '/exercise21228', name: 'exercise21228', component: Exercise_21228 },
    { path: '/exercise21529', name: 'exercise21529', component: Exercise_21529 },

    { path: '/exercise32148', name: 'exercise32148', component: Exercise_32148 },
    { path: '/exercise32248', name: 'exercise32248', component: Exercise_32248 },
    { path: '/exercise32348', name: 'exercise32348', component: Exercise_32348 },

    { path: '/exercise41164', name: 'exercise41164', component: Exercise_41164 },
    { path: '/exercise41264', name: 'exercise41264', component: Exercise_41264 },
    { path: '/exercise41465', name: 'exercise41465', component: Exercise_41465 }
  ]
})
