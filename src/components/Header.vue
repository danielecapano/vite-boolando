<script>
export default {
    data(){
        return {

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
              <ol class="menu__list">
                <li class="li__item"><a href="#">Donna</a></li>
                <li class="li__item"><a href="#">Uomo</a></li>
                <li class="li__item"><a href="#">Bambini</a></li>
              </ol>
            </div>

            <div class="logo">
              <img src="../assets/images/boolean-logo.png" alt="Logo" />
            </div>

            
              <ul class="icons__list">
                <li class="icons__item">
                  <a href=""><img src="../assets/icons/user.svg" alt="user"></a>
                </li>
                <li class="icons__item">
                  <a href="#"><img src="../assets/icons/heart.svg" alt=""></a>
                </li>
                <li class="icons__item">
                  <a href="#"><img src="../assets/icons/bag-shopping.svg" alt=""></a>
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