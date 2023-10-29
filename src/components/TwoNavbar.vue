<template>
  <header :class="{ 'scrolled-nav': scrolledNav }">
    <nav>
      <div class="branding">
        <img src="../assets/logo.jpg" alt="logo" />
      </div>
      <ul class="navigation" v-show="!mobile">
        <li>
          <RouterLink class="link" :to="{ name: 'home' }">HOME</RouterLink>
        </li>
        <li>
          <RouterLink class="link" :to="{ name: '' }">ABOUT</RouterLink>
        </li>
        <li>
          <RouterLink class="link" :to="{ name: '' }">PORFOLIO</RouterLink>
        </li>
        <li>
          <RouterLink class="link" :to="{ name: '' }">CONTACT</RouterLink>
        </li>
      </ul>

      <div class="icon">
        <button
          @click="toggleMobileNav"
          v-show="mobile"
          :class="{ 'icon-active': mobileNav }"
        >
          ac
        </button>
      </div>
      <transition name="mobile-nav">
        <ul class="dropdown-nav2" v-show="mobileNav">
          <li>
            <RouterLink class="link" :to="{ name: 'home' }">HOME</RouterLink>
          </li>
          <li>
            <RouterLink class="link" :to="{ name: '' }">ABOUT</RouterLink>
          </li>
          <li>
            <RouterLink class="link" :to="{ name: '' }">PORFOLIO</RouterLink>
          </li>
          <li>
            <RouterLink class="link" :to="{ name: '' }">CONTACT</RouterLink>
          </li>
        </ul>
      </transition>
    </nav>
  </header>
</template>

<script setup>
import { onBeforeMount, onMounted, ref } from "vue";

const windowWidth = ref(window.innerWidth);
const mobileNav = ref(null);
const mobile = ref(null);
const scrolledNav = ref(null);
const scrollPosition = ref(window.scrollY);

const toggleMobileNav = () => {
  mobileNav.value = !mobileNav.value;
};

const checkScreen = () => {
  windowWidth.value = window.innerWidth;
  if (windowWidth.value <= 750) {
    mobile.value = true;
    return;
  }
  mobile.value = false;
  mobileNav.value = false;
  return;
};

const updateScroll = () => {
  if (window.scrollY > 50) {
    scrolledNav.value = true;
    return;
  }
  scrolledNav.value = false;
};

onMounted(() => {
  window.addEventListener("resize", checkScreen);
  window.addEventListener("scroll", updateScroll, true);
  checkScreen();
});

onBeforeMount(() => {});
</script>

<style lang="scss" scoped>
header {
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 99;
  top: 0;
  widows: 90%;
  position: sticky;
  transition: 0.5s ease all;
  color: #fff;

  nav {
    display: flex;
    flex-direction: row;
    padding: 12px 0;
    transition: 0.5s ease all;
    width: 100%;
    margin: 0 auto;

    @media (max-width: 750px) {
      flex-wrap: wrap;
    }

    ul,
    a {
      font-weight: 500;
      color: #fff;
      list-style: none;
      text-decoration: none;
      margin-bottom: 0;

      @media (max-width: 750px) {
        width: 100%;
        display: flex;
        flex-direction: column;
      }
    }

    li {
      text-transform: uppercase;
      padding: 16px;
      margin-left: 16px;

      @media (max-width: 750px) {
        text-align: center;
        margin-left: 0;
      }
    }

    .link {
      font-size: 14px;
      transition: 0.5s ease all;
      padding-bottom: 4px;
      border-bottom: 1px solid transparent;

      &:hover {
        color: #00afea;
        border-color: #00afea;
      }
    }

    .branding {
      display: flex;
      align-items: center;

      img {
        width: 50px;
        transition: 0.5s ease all;
      }

      @media (max-width: 750px) {
      }
    }

    .navigation {
      display: flex;
      align-items: center;
      flex: 1;
      justify-content: flex-end;
    }

    .icon {
      display: flex;
      align-items: center;

      position: absolute;
      top: 0;
      right: 24px;
      height: 100%;

      button {
        transition: 0.8s ease all;
      }

      @media (max-width: 750px) {
        display: block;
        top: 24px;
      }
    }

    .icon-active {
      transform: rotate(180deg);
    }

    .dropdown-nav {
      display: flex;
      flex-direction: column;
      position: fixed;
      width: 100%;
      max-width: 250px;
      height: 100%;
      background-color: #fff;
      top: 0;
      left: 0;

      li {
        margin-left: 0;

        .link {
          color: #000;
        }
      }
    }

    .dropdown-nav2 {
      @media (max-width: 750px) {
        padding: 16px 0;
      }
    }

    .mobile-nav-enter-active,
    .mobile-nav-leave-active {
      transition: 1s ease all;
    }

    .mobile-nav-enter-from,
    .mobile-nav-leave-to {
      transform: translatex(-250px);
    }

    .mobile-nav-enter-to {
      transform: translateX(0);
    }
  }
}

.scrolled-nav {
  background-color: #000;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);

  nav {
    padding: 8px 0;

    .branding {
      img {
        width: 40px;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
          0 2px 4px -1px rgba(0, 0, 0, 0.06);
      }
    }
  }
}

// header {
//   background-color: rgba(0, 0, 0, 0.8);
//   z-index: 99;
//   width: 100%;
//   position: fixed;
//   transition: 0.5s ease all;
//   color: #fff;
// }

// nav {
//   display: flex;
//   flex-direction: row;
//   padding: 12px 0px;
//   transition: 0.5s ease all;
//   width: 90%;
//   margin: 0 auto;
//   @media (min-width: 1140px) {
//     max-width: 1140px;
//   }

//   ul,
//   link {
//     font-size: 500;
//     color: #fff;
//     list-style: none;
//     text-decoration: none;
//   }

//   li {
//     text-transform: uppercase;
//     padding: 16px;
//     margin-left: 16px;
//   }

//   .link {
//     font-size: 14px;
//     transition: 0.5s ease all;
//     padding-bottom: 4px;
//     border-bottom: 1px solid transparent;
//     text-decoration: none;
//   }

//   &link:hover {
//     color: #00afea;
//     border-color: #00afea;
//   }

//   .branding {
//     display: flex;
//     align-items: center;
//   }
// }

// img {
//   width: 50px;
//   height: 50px;
//   transition: 0.5s ease all;
// }
</style>
