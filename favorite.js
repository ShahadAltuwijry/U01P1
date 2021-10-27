const addFav = JSON.perse(locationStorage.getItem("item"));



$(".wrapper").append(`
        <div class="cards">
            <div class="cardL">
                <div class="imgDiv1">
                        <img src="${item.imgUrl}" alt="${item.vilName}" class="favImg1" id="favImg1">
                </div>
                <div class="descDiv1">
                    <h3 class="favName1">${item.vilName}</h3>
                    <p class="description1">
                        ${item.quoteHead}
                        <div class="crid"><i>${item.quoteCrid}</i>
                        </div>

                    </p>
                </div>
                <div class="star">
                        <a class="removeStar">Remove From Favorite.</a>
                </div>

            </div>
        </div>
`);

addFav();

// function emptyPage() {
//     $(“.emptyFav”).hide();
//         $(“.addFav”).append(`<div>
//             <h1>WELCOME</h1>
//             <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam excepturi earum sit dolorum harum, possimus exercitationem odit dicta soluta in. Non molestias dolorem, libero consequuntur repellat iusto fugit vel dolore!
//             </p>
//             </div>`);
// };