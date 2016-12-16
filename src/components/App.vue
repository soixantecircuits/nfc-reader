<template>
  <div id="app">
    <h2>NFC Reader</h2>
    <h4 id="status"></h4>
    <ul id="uid-list"></ul>
  </div>
</template>
<script>
  const ipcRenderer = require('electron').ipcRenderer

  ipcRenderer.on('reader', (event, message) => {
    document.getElementById('status').innerHTML = message
  })
  ipcRenderer.on('card', (event, message) => {
    document.getElementById('uid-list').innerHTML += ('<li>' + message + '</li>')
  })
  ipcRenderer.on('error', (event, message) => {
    document.getElementById('status').innerHTML =  message
  })
  ipcRenderer.on('end', (event, message) => {
    document.getElementById('status').innerHTML =  message
  })
</script>
<style>


#app {
  color: #2c3e50;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
}

</style>
