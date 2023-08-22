var app = new Vue({
    el: '#app',
    data: {
      cardsList: [],
      favouriteCardsList: [],
      allCardsList: [],
      isLiked: false,
      filterMessage: "Показать избранные",
      filter: false
    },
    methods: {
      async loadData() {
        let response = await fetch('https://fakestoreapi.com/products');
        let result = await response.json();
        this.cardsList = result;
        this.allCardsList = this.cardsList;
        for (const product of this.allCardsList) {
          product.favourite = false;
        }
      },
      addToFavourite: function(event) {
        let card = event.target.parentNode.parentNode;
        let id = card.id;
        let btn = card.querySelector('.catalog__card__btnLike');
        if(!btn.classList.contains("liked")){
          this.allCardsList[id-1].favourite = true;
          btn.classList.add("liked");
          this.favouriteCardsList = this.allCardsList.filter(product => product.favourite == true);
          console.log(this.favouriteCardsList);
        } else {
          this.allCardsList[id-1].favourite = false;
          btn.classList.remove("liked");
          this.favouriteCardsList = this.favouriteCardsList.filter(card => card.favourite == true);
          console.log(this.favouriteCardsList);
        }
      },
      showFavourites() {
        if(!this.filter){
          this.cardsList = this.favouriteCardsList;
          this.filter = true;
          this.filterMessage = "Показать все";
        } else {
          this.cardsList = this.allCardsList;
          this.filter = false;
          this.filterMessage = "Показать избранные";
        }
      },
    },
    mounted() {
      this.loadData();
    },
  });