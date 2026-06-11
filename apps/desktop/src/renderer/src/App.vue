<script setup>
import Versions from './components/Versions.vue'
//import { prisma } from '@nyyx/db'

const ipcHandle = () => window.electron.ipcRenderer.send('ping')

// from the electron preload api
const settings = api.hi()

async function getTasks() {
  // Ask the main process to create the task
  const newTask = await window.electronAPI.getTasks()
  console.log('Task saved with ID:', newTask.id)
  return newTask
}

const checkdb = getTasks()

//const mypost = apipost.getPost()
</script>

<template>
  <img alt="logo" class="logo" src="./assets/electron.svg" />
  <div class="creator">Powered by electron-vite</div>
  <div class="text">
    Build an Electron app with
    <span class="vue">Vue</span>
  </div>
  <p class="tip">Please try pressing <code>F12</code> to open the devTool</p>
  <div class="actions">
    <div class="action">
      <a href="https://electron-vite.org/" target="_blank" rel="noreferrer">Documentation</a>
    </div>
    <div class="action">
      <a target="_blank" rel="noreferrer" @click="ipcHandle">Send IPC</a>
    </div>
  </div>
  <Versions />
  {{ settings }}
  {{ checkdb && checkdb?.id ? JSON.stringify(checkdb) : 'no post yet' }}
  <nav>
    <RouterLink to="/">Go home</RouterLink>
    <RouterLink to="/about">Go about</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>
