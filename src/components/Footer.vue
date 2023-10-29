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
  flex: 0 0 auto;
}

.footer {
  height: 50px;
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
