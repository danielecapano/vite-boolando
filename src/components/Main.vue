<script>
import Card from './Card.vue';
import { store } from "../store"
// import Products from '../db.json'
export default {
    components: {
        Card
    },
    data() {
        return {
            store: store,
            open: false,
            selectedProduct: {},

 
        }
    },
    methods: {
        showModal(product){
            this.selectedProduct = product;
            this.open = true;
            console.log('Open Modal', this.selectedProduct);
        },
        closeModal(){
            this.open = false;
            this.selectedProduct = {};
            console.log('Close Modal');
        },
        getImagePath: function(imgPath) {
            return new URL(imgPath, import.meta.url).href;
        },
    
    }
}
</script>

<template>
    <main>
        <div class="container">
            <div class="grid" >
                <div class="product" v-for="(card, i) in store.products" :key="card.id">
                    <Card @show="showModal" :item = "card" />
                </div>
            </div>
        </div>
        
    </main>
    <div class="modal" v-if="open">
        <div class="modal-content">
            <span @click="closeModal" class="modal-close"><font-awesome-icon icon="fa-solid fa-circle-xmark" /></span>
            <figure class="product-image"><img :src="getImagePath(`../assets/images/${selectedProduct.frontImage}`)" alt="Image" /></figure>
            <div class="product-info">
                <p>{{ selectedProduct.brand }}</p>
                <p>{{ selectedProduct.name }}</p>
                <p>{{ selectedProduct.price }}</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

main {
    padding: 5rem 1rem 2rem;
}

.grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2.5rem 1rem;
}

.modal {
    

    .modal-content {
        opacity: 1;
        transform: scale(1);
        transition: all 0.3s ease-in-out;
        position: fixed;
        display: flex;
        gap: 1rem;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        max-width: 500px;
        background-color: #FFF;
        padding: 2rem;
        border-radius: 1rem;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
        z-index: 50;
        &.hide {
            opacity: 0;
            transform: scale(0);
}

        .product-image {
            flex-basis: 50%;
        }

        .modal-close {
            display: block;
            position: absolute;
            top: 1rem;
            right: 1rem;
            font-size: 20px;
            cursor: pointer;
        }

}

&::after {
        content: "";
        position: fixed;
        inset: 0;
        background: rgba($color: #000000, $alpha: 0.7);
        z-index: 40;

    }


    
}
    
</style>