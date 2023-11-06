<script>
export default {
    data(){
        return {
            items: ['Donna', 'Uomo', 'Bambino'],
            icons: ["src/assets/icons/user.svg",
                    "src/assets/icons/heart.svg",
                    "src/assets/icons/bag-shopping.svg"
                ]

        }
    }
}
</script>

<template>
    <header class="main-header">
      <div class="container">
        <nav class="navbar">
          <div class="row space-between">
            <div class="menu">
              <ul class="menu__list">
                <li  v-for="item in items" class="li__item"><a href="#">{{item}}</a></li>
              </ul>
            </div>

            <div class="logo">
              <img src="../assets/images/boolean-logo.png" alt="Logo" />
            </div>

            
              <ul class="icons__list">
                <li class="icons__item" v-for="icon in icons">
                  <a href=""><img :src="icon" alt="user"></a>
                </li>
            
              </ul>
            
          </div>
        </nav>
      </div>
    </header>
</template>

<style lang="scss" scoped>
.main-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
    background-color: #ff6900;
    color: #FFF;
    box-shadow: 0 2px 6px 2px rgba(0, 0, 0, 0.15), 0 1px 2px rgba(0, 0, 0, 0.30);
}

.navbar {
    padding: 1rem 0;

}

.menu__list {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-weight: 700;
}

.logo img {
    max-width: 100px;
}

.icons__list {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    img {
        height: 1rem;
    }
}
</style>