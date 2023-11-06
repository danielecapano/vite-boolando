<script>
import Card from './Card.vue';
export default {
    components: {
        Card
    },
    data() {
        return {

        }
    }
}
</script>

<template>
    <main>
        <div class="container">
            <div class="grid" >
                <div class="product" v-for="n in 6" :key="n">
                    <Card />
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