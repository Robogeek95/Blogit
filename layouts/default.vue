<template>
  <div>
    <header>
      <div class="container" id="menu">
        <div class="navbar">
          <nuxt-link to="/" class="logo d-flex">
            <b-avatar variant="info" src="https://placekitten.com/300/300" class="mr-2"></b-avatar>
            <h3>BlogIT</h3>
          </nuxt-link>

          <nav>
            <ul id="menu" class="mb-0">
              <li>
                <nuxt-link to="/me">Posts</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/me">Contact</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/me">About</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/me">Featured</nuxt-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
    <nuxt />
  </div>
</template>

<style lang='scss'>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

header {
  background: purple;
  padding: 1em 0;
  text-align: center;

  h4 {
    color: greenyellow;
  }

  a {
    color: salmon;
  }
  #menu ul {
    list-style-type: none;
    padding: 0;
    display: flex;
  }
  #menu li a {
    font-weight: normal;
    padding: 0.5em;
  }
}
</style>
