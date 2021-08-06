
const succulentData = [
    {
        id: "aloe_vera",
        image: "./images/aloe_vera.JPG",
        name: "aloe vera",
        matureSize: "24 inches (60cm)",
        water: "Below Average",
        sun: "Full sun, light shade, partial shade",
        hardiness: "Zone 9a : 20<span>&#176;</span>F (-6.6<span>&#176;</span>C)",
        pairsWith: "Echeveria imbricata",
        description: "Aloe vera is well known for its medicinal properties. If you break open one of its leaves, the clear gel within can be used to soothe minor cuts and burns. It grows well indoors, so it’s easy to take advantage of its healing abilities."
    },
        {
        id: "echeveria_black_prince",
        image: "./images/echeveria_black_prince.JPG",
        name: "Echeveria 'Black Prince'",
        matureSize: "6 inches (15cm)",
        water: "Average",
        sun: "Full sun",
        hardiness: "Zone 9b : 20<span>&#176;</span>F (-6.6<span>&#176;</span>C)",
        pairsWith: "Crassula ovata",
        description: "The dark color of this Echeveria is very appealing. It does surprisingly well indoors, although it can easily lose its color without enough light."
    },
        {
        id: "echeveria_imbricata",
        image: "./images/echeveria_imbricata.JPG",
        name: "Echeveria Imbricata",
        matureSize: "6 inches (15cm)",
        water: "Average",
        sun: "Full sun, partial shade",
        hardiness: "Zone 9a : 20<span>&#176;</span>F (-6.6<span>&#176;</span>C)",
        pairsWith: "Sedum morganianum",
        description: "This is one of the most popular Echeverias. It has a rich blue color, grows quickly, and clumps or produces offsets easily."
    },
        {
        id: "haworthia_coarctata",
        image: "./images/haworthia_coarctata.JPG",
        name: "haworthia coarctata",
        matureSize: "12 inches (30cm)",
        water: "Average",
        sun: "Full sun, partial shade",
        hardiness: "Zone 9b : 20<span>&#176;</span>F (-6.6<span>&#176;</span>C)",
        pairsWith: "Echeveria purpusorum",
        description: "Haworthia coarctata forms tight clusters and produces offsets easily. It can turn pink in the cold or with enough sunlight."
    },
        {
        id: "haworthia_reinwarditii",
        image: "./images/haworthia_reinwarditii.JPG",
        name: "haworthia reinwardtii",
        matureSize: "12 inches (30cm)",
        water: "Average",
        sun: "Partial shade",
        hardiness: "Zone 11 : 40<span>&#176;</span>F (4.5<span>&#176;</span>C)",
        pairsWith: "Gymnocalycium mihanovichii",
        description: "Haworthia reinwardtii clumps easily and creates tight and compact pointed forms. It does very well in low light and is slow to rot from overwatering."
    },
        {
        id: "sedum_clavatum",
        image: "./images/sedum_clavatum.JPG",
        name: "sedum clavatum",
        matureSize: "6 inches (15cm)",
        water: "Average",
        sun: "Full sun, partial shade",
        hardiness: "Zone 9a : 20<span>&#176;</span>F (-6.6<span>&#176;</span>C)",
        pairsWith: "Aloe haworthioides",
        description: "This succulent forms small stems with lots of rosettes. It can get a hint of pink on the edge of its leaves with enough sunlight."
    },


]


// Load in data dynamically
const itemsWrapper = document.querySelector(".succulent-items-wrapper");
const infoWrapper = document.querySelector(".succulent-info-wrapper");

// Run when the page loads
window.addEventListener("DOMContentLoaded", function () {
    displayGridItems();
    displayInfoItems();
    mouseEvents();
});


//Display images of succulents in a grid for user to click on
function displayGridItems(){
    let gridItemsHTML = succulentData.map(function(gridItem){
        return `<!-- Item -->
                <div class="succulent-item-wrapper" data-info=${gridItem.id}>
                    <div class="succulent-img-background" style="background-image: url(${gridItem.image})"></div>

                    <div class="img-text-wrapper">
                        <div class="subtitle">
                            ${gridItem.name}
                        </div>
                    </div>
                </div>
                <!-- End of Item -->`
    })

    //join the html together and set the inner html
    gridItemsHTML=gridItemsHTML.join("");
    itemsWrapper.innerHTML = gridItemsHTML;
}


// Display information on each succulent
function displayInfoItems(){
    let infoItemsHTML = succulentData.map(function(infoItem){

        return `<!-- INFO ITEM  -->
            <div class="info-title" id=${infoItem.id}>${infoItem.name}</div>
            <div class="info-item-wrapper">
                <div class="info-image-wrapper">
                    <img src=${infoItem.image} alt="succ_image" class="info-image">
                </div>

                <div class="info-text-wrapper">
                    <table>
                        <tr>
                            <td>Mature Size:</td>
                            <td>${infoItem.matureSize}</td>
                        </tr>
                        <tr>
                            <td>Water:</td>
                            <td>${infoItem.water}</td>
                        </tr>
                        <tr>
                            <td>Sun:</td>
                            <td>${infoItem.sun}</td>
                        </tr>
                        <tr>
                            <td>Hardiness:</td>
                            <td>${infoItem.hardiness}</td>
                        </tr>
                        <tr>
                            <td>Paris With:</td>
                            <td>${infoItem.pairsWith}</td>
                        </tr>
                    </table>
                    <div class="info-description">${infoItem.description}
                    </div>
                </div>
            </div>
            <!-- END OF INFO ITEM -->`
    })

    //join the html together and set the inner html 
    infoItemsHTML = infoItemsHTML.join("");
    infoWrapper.innerHTML = infoItemsHTML;
}


//Mouse event for css and scrolling when an image is clicked.
function mouseEvents(){
    
    const succulentItems = document.querySelectorAll('.succulent-item-wrapper')
    const succulentInfo = document.querySelectorAll('.info-title');
    
    succulentItems.forEach(function(item){
    item.addEventListener('mouseover',function(){
        item.childNodes[1].classList.add("img-darken");
    })

    item.addEventListener('mouseout',function(){
        item.childNodes[1].classList.remove("img-darken");
    })


    item.addEventListener('click',function(){
        succulentInfo.forEach(function(infoItem){
            if(infoItem.id ===item.getAttribute("data-info")){
                infoItem.scrollIntoView({behavior: "smooth"});
            }
        })
    })

})
}







