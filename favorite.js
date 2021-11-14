let villains = JSON.parse(localStorage.getItem("villains"));



const render1 = () => {
  $(".cards").html("");
  villains = villains.filter((item) => item.isFav);

  villains.forEach((item, i) => {
    $(".cards").append(`
            <div class="cardL">
                <div class="imgDiv1">
                        <img src="${item.imgUrl}" alt="${
      item.vilName
    }" class="favImg1" id="favImg1">
                </div>
                <div class="descDiv1">
                    <h3 class="favName1">${item.name}</h3>
                    <p class="description1">
                        ${item.quoteHead}
                        <div class="crid"><i>${item.quoteCrid}</i>
                        </div>

                    </p>
                </div>
                <div class="star">
                          <button class="favBtn" id="favBtn${i}" onclick='addToFav(${i})'>${
      !item.isFav ? "❤" : "✘"
    }</button>
                </div>

            </div>

`);
  });
};

render1();

const addToFav = (i) => {
  villains[i].isFav = !villains[i].isFav;
  // localStorage.setItem("favs", JSON.stringify(villains));
  localStorage.setItem("villains", JSON.stringify(villains));
  render1();
};

for (let i = 0; i < villains.length; i++) {
  if (villains[i].isFav == true) {
    $(".noFav").hide();
  }
}

// const logo = document.getElementById("logo");
// logo.onclick = () => {
//   location.replace("./Home.html");
// };