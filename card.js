Vue.component('card', {
    data() {
        return {
            isLiked: false,
        }
    },
    methods: {
        closeCard: function(event) {
            let card = event.target.parentNode.parentNode.parentNode;
            card.style.display = 'none';
          },
        // addToVafourite: function(event) {
        //     let card = event.target.parentNode.parentNode;
        //     let id = card.id;
        //     let btn = card.querySelector('.catalog__card__btnLike');
        //     if(!btn.classList.contains("liked")){
        //       parent.allCardsList[id-1].favourite = true;
        //       btn.classList.add("liked");
        //       parent.favouriteCardsList = parent.allCardsList.filter(product => product.favourite == true);
        //       console.log(parent.favouriteCardsList);
        //     } else {
        //       parent.allCardsList[id-1].favourite = false;
        //       btn.classList.remove("liked");
        //       parent.favouriteCardsList = parent.favouriteCardsList.filter(card => card.favourite == true);
        //       console.log(parent.favouriteCardsList);
        //     }
        //   },
    },
    props: ['product', 'addToFavourite'],
    template: `<li>
    <div class="catalog__card" :id="product.id">
    <button class="catalog__card__btnClose" @click="closeCard">
    <img src="img/close-circle-svgrepo-com.svg" alt="close btn" width="40px">
    </button>
    <button class="catalog__card__btnLike"  :class="{'liked': product.favourite}" @click="addToFavourite">
    <img src="img/like-svgrepo-com.svg" alt="like btn" width="40px">
    </button>
    <a class="catalog__card__link" href=#>
    <div class="catalog__card__img">
    <img :src="product.image" alt="product picture">
    </div>
    <h3 class="catalog__card__title"> {{product.title}} </h3>
    <p class="catalog__card__price"> {{product.price}} </p>
    </a>
</div>
</li>`
})