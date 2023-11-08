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
            cards: store.products,
 
        }
    }
}
</script>

<template>
    <main>
        <div class="container">
            <div class="grid" >
                <div class="product" v-for="(card, i) in cards" :key="card.id">
                    <Card :item = card  n />
                </div>
            </div>
        </div>
        
    </main>
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
</style>