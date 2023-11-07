<script>
export default {
    data() {
        return {

        }
    },
    props: {
        item: {
            type: Object,
            required: true
        }
    },
    methods: {
        getImagePath: function(imgPath) {
            return new URL(imgPath, import.meta.url).href;
        }
    },
}
</script>

<template>
    <div class="card">
              <figure class="card__image">
                <img :src="getImagePath(`../assets/images/${item.frontImage}`)" alt="Image" />
                <img class="card__image--hover" :src="getImagePath(`../assets/images/${item.backImage}`)" alt="Image" />

                <div class="banner">
                    <span class="discount">-50%</span>
                    <span class="discount green">Sostenibilità</span>
                  </div>
                  <span class="heart" :class="item.isInFavorites ? 'favorites' : ''">&#9829;</span>
              </figure>
              
              <div class="card__content">
                <p class="brand">{{ item.brand }}</p>
                <p class="description">{{ item.name }}</p>
                <p class="price">14,99 &euro; <span>{{ item.price }} &euro;</span></p>
              </div>
              
            </div>
</template>

<style lang="scss" scoped>

.card {

    .card__image {
    position: relative;
        .card__image--hover {
        position: absolute;
        top: 0;
        left: 0;
        inset: 0;
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
        }

            &:hover {
                .card__image--hover {
                opacity: 1;
                }
        }

        .banner {
        display: flex;
        gap: 0.25rem;
        position: absolute;
        left: 0;
        bottom: 50px;
            .discount {
            display: inline-block;
            background-color: #ff0000;
            color: #FFF;
            font-size: 0.625rem;
            font-weight: 700;
            line-height: 20px;
            padding: 0 0.375rem;
                &.green {
                background-color: #008000;
                }
            }
            
        }
        .heart {
        position: absolute;
        width: 40px;
        top: 10px;
        right: 0rem;
        aspect-ratio: 1 / 1;
        background-color: #fff;
        font-size: 2rem;
        text-align: center;
        line-height: 40px;
        cursor: pointer;
        transition: color 0.2s ease-in-out;

            &:hover,
            &.favorites {
                color: #ff0000;
            }
        }
    }

    .card__content {
        .brand {
        font-size: 0.75rem;
}

        .description {
            font-weight: 600;
            font-size: 0.875rem;
            text-transform: uppercase;
        }

        .price {
            font-weight: 700;
            color: #ff0000;
            font-size: 0.75rem;

            span {
                font-weight: 400;
                color: #000;
                text-decoration: line-through;
            }
        }

    }
}

</style>