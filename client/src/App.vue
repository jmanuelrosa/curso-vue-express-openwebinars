<template>
  <div id='app'>
    <div class='ui inverted vertical masthead center aligned segment'>
      <div class='ui container'>
        <div class='ui large secondary inverted pointing menu'>
          <div class='right item'>
            <a class='ui inverted button'>Log in</a>
          </div>
        </div>
      </div>

      <div class='ui text container'>
        <h1 class='ui inverted header'>
          Nuestras recetas!
        </h1>
        <h2>Listado con todas nuestras recetas.</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
