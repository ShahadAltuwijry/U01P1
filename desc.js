const item = JSON.parse(localStorage.getItem("item"));

const searchBar = document.getElementById("searchBar");
const searchBtn = document.getElementById("search");
searchBtn.onclick = function () {
  $(".searchBar").toggle("slow");
};

$(".wrapper").append(`
            <div class="banner">
            <img src="${item.banner}" id="banner" >
            <h1 class="quoteHead">${item.quoteHead}</h1>
            <p class="quoteCrid">${item.quoteCrid}</p>
        </div>

        <h2 class="vilName">${item.name}</h2>

        <div class="content">
            <div class="imgDiv">
                <img id="vilImg" class="vilImg" src="${item.fullImg}">
            </div>

            <div class="desContent">
                <h3 class="h3Head">Details and Backstory</h3>
                <p class="description" id="description">
                ${item.description}
                </p>
            </div>
        </div>
        <h2>Short Clip</h2>
        <div class = "vid"><video controls loop width = "600px" >
                            <source src="${item.clip}" type="video/mp4">Your browser does not support the video player.</video></div>

    </div>
`);

//still didnt add all the clips only the maleficent one

const phArr = [];
item.photos.forEach((item) => {
  phArr.push(item);
});
console.log(phArr);

//^ didn't add the photo Gallery yet
//<script type=“text/javascript”>document.getElementByClass("photos").innerHTML = JSON.stringify(phArr);</script>
