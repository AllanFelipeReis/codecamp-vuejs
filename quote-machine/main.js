const { createApp } = Vue;
import quoteCard from './components/quote-card/quote-card.js';

createApp({
    components: {
        quoteCard
    },
    created()
    {
        this.max = this.quotes.length;
        this.newQuote()
    },
    data() {
        return {
            currentQuote: "",
            quotes: quotes
        }
    },
    methods: {
        getRandomInt(max)
        {
            return Math.floor(Math.random() * max);
        },
        getRandomQuote() {
            return this.quotes[this.getRandomInt(this.max)]
        },
        newQuote()
        {
            this.currentQuote = this.getRandomQuote();
        }
    },
}).mount("#app");