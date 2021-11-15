let villains = JSON.parse(localStorage.getItem("villains"));
console.log(villains);

const render1 = () => {
  $(".cards").html("");
  let villains = JSON.parse(localStorage.getItem("villains"));
  favVillains = villains.filter((item) => item.isFav);

  favVillains.forEach((item, i) => {
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
                          <button class="favBtn" id="favBtn${i}" onclick='addToFav(${
      item.id
    })'>${!item.isFav ? "❤" : "✘"}</button>
                </div>

            </div>

`);
  });
};

render1();

const addToFav = (id) => {
  let villains = JSON.parse(localStorage.getItem("villains"));

  villains.forEach((vil, index) => {
    if (id == vil.id) {
      vil.isFav = false;
      console.log(vil);
    }
  });

  localStorage.setItem("villains", JSON.stringify(villains));
  render1();
};

for (let i = 0; i < villains.length; i++) {
  if (villains[i].isFav == true) {
    $(".noFav").hide();
  }
}

