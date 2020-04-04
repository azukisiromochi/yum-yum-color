<template>
  <div>
    <nuxt/>
  </div>
</template>

<script>
export default {
  head: {
    link: [
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Baloo+Thambi+2&display=swap'
      }
    ]
  }
}
</script>

<style lang="scss">
html {
  font-size: 16px;
  word-spacing: 1px;
  box-sizing: border-box;
  body {
    font-family: 'Baloo Thambi 2' !important;
  }
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
