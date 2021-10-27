const villains = JSON.parse(localStorage.getItem("villains"));

// $("#cards") dec page function
const render2 = (item) => {
  localStorage.setItem("item", JSON.stringify(item));
  location.replace("desc.html");
};

//adding to fav page
const addFav = (item) => {
  localStorage.setItem("item", JSON.stringify(item));
};

/*main page cards function*/
const render1 = () => {
  $("#cards").html("");
  villains.forEach((item, i) => {
    $("#cards").append(
      `            <div class="card" id="card${i}"><img id="vilImg${i}" class ="vilImg" src="${
        item.imgUrl
      }">
                <h3 class="vilName">${item.name}</h3>
                <p class="vilDes">${item.miniDes}</p>
                     <button class="favBtn" id="favBtn${i}" onclick='addToFav(${i})'>${
        !item.isFav ? "❤" : "✘"
      }</button>
            </div>`
    );
    //
    $(`#vilImg${i}`).click(() => render2(item));

    $(`#favBtn${i}`).click(() => addFav(item));

    //end of the loop
  });
}; //end rander1
render1();

const addToFav = (i) => {
  villains[i].isFav = !villains[i].isFav;
  localStorage.setItem("villains", JSON.stringify(villains));
  render1();
};
