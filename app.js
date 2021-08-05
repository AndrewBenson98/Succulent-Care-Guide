
const succulentItems = document.querySelectorAll('.succulent-item-wrapper')

succulentItems.forEach(function(item){
    item.addEventListener('mouseover',function(){
        item.childNodes[1].classList.add("img-darken");
    })

    item.addEventListener('mouseout',function(){
        item.childNodes[1].classList.remove("img-darken");
    })



})