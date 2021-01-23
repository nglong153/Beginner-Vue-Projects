const app = Vue.createApp({
    // template :`<h2> The Book is: {{tilte}} </h2> 
    // <p>The author is {{author}}, and his age is {{age}}</p>`,
    data(){
        return {
            books : [
                {
                    tilte:'The Final Empire',
                    author : 'Brandon Snaderson',
                    isFav : true
                },
                {
                    tilte:'The Way Of Kings',
                    author: 'BrandonSnaderson',
                    isFav : false
                },
                {
                    tilte:'Name Of The Wind',
                    author : 'Patrick Rothfuss',
                    isFav : true
                }
            ]
            
        }
    },
    methods: {
        toggleFav : function(book){
            book.isFav = !book.isFav
        }
    }
})

app.mount('#app')