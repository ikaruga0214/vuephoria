<template>
  <div class="footer">
    <div class="footer-container">
      <a href="https://github.com/ikaruga0214/vueApp">
        <font-awesome-icon
          icon="fa-brands fa-github"
          size="2xl"
          class="icons"
        />
      </a>
      <div class="copyright">© Vuephoria</div>
    </div>
  </div>
</template>
<script setup></script>
<style scoped>
.footer-container {
  background: linear-gradient(to bottom, #0194ed, #00366c);
  color: white;
  padding-top: 1rem !important;
  padding-bottom: 1rem !important;
  margin: auto;
}

.footer {
  position: relative;
  width: 100%;
  margin-top: auto;
  bottom: 0;
  height: 2.5rem;
}

.copyright {
  display: flex;
  align-items: center;
  justify-content: center;
}

.icons {
  float: left;
  align-items: center;
  justify-content: flex-start;
}

.footer-container a {
  color: white;
}
.footer-container a:hover {
  color: gray;
}
</style>
