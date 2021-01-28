<template>


<div class="container">
  <header class="header">
   <router-link :to="{ name: 'Main' }"><img src="@/assets/logo.png" alt="osprey logo" class="logo"></router-link>

    <nav class=user-nav>
      <div class="user-nav__icon-box"> 

        <svg class="user-nav__icon">
                        <use xlink:href="@/assets/spritesocial.svg#icon-telegram"></use>
                    </svg>
              </div>

      <div class="user-nav__icon-box">
                       <svg class="user-nav__icon">
                        <use xlink:href="@/assets/spritesocial.svg#icon-vk"></use>
                    </svg>
              </div>

      <div class="user-nav__icon-box">
                       <svg class="user-nav__icon">
                        <use xlink:href="@/assets/spritesocial.svg#icon-instagram"></use>
                    </svg>
              </div>
      <div class="user-nav__icon-box">
                       <svg class="user-nav__icon">
                        <use xlink:href="@/assets/spritesocial.svg#icon-facebook"></use>
                    </svg>
              </div>
      <div class="user-nav__icon-box">
                    <svg class="user-nav__icon">
                        <use xlink:href="@/assets/sprite.svg#icon-chat"></use>
                    </svg>
                </div>

      </nav>
  </header>

  <div class="content">
      <nav class="sidebar">
    Navigation
    </nav>

  <main class="osrey-view"> 
    Osprey View
  </main>
  </div>
</div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Header',
  components: {
  
  }
}
</script>

<style lang="scss" >

.container {
  max-width: 120rem;
  margin: 8rem auto;
  background-color: var(--color-grey-light-2);
  box-shadow: var(--shadow-dark);
  min-height: 50rem;
}


.content {
    display: flex;

    @media only screen and (max-width: $bp-medium) {
        flex-direction: column;
    }
}

.header {
    font-size: 1.4rem;
    height: 7rem;
    background-color: #fff;
    border-bottom: var(--line);

    display: flex;
    justify-content: space-between;
    align-items: center;

    @media only screen and (max-width: $bp-smallest) {
        flex-wrap: wrap;
        align-content: space-around;
        height: 11rem;
    }
}

.sidebar {


}

.osrey-view
 {


 }




// LOGO
.logo {
  height: 4.25rem;
}



//  USER NAVIGATION

.user-nav {
  &__icon-box {

  }

  &__icon {

  }

}

</style>
