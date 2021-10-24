const villains = [
  { name: "Ursula (Sea Witch)", imgUrl: "./ursula.jpg", dis: "BackStory" },
  { name: "Scar", imgUrl: "./scar.jpg", dis: "BackStory" },
  { name: "Maleficent", imgUrl: "./maleficent.jpg", dis: "BackStory" },
  { name: "Ursula (Sea Witch)", imgUrl: "./ursula.jpg", dis: "BackStory" },
  { name: "Scar", imgUrl: "./scar.jpg", dis: "BackStory" },
  { name: "Maleficent", imgUrl: "./maleficent.jpg", dis: "BackStory" },
];

// $("#cards")
const render2 = (item) => {
  localStorage.setItem("item", JSON.stringify(item));
  location.replace("desc.html");
  console.log(item);
};
const render1 = () => {
  villains.forEach((item, i) => {
    $("#cards").append(
      `            <div class="card" id="card${i}"><img id="vilImg${i}" class ="vilImg" src="${item.imgUrl}">
                <h3 class="vilName">${item.name}</h3>
                <p class="vilDes">${item.dis}</p>
                    <button class="favBtn" id="favBtn${i}" >Favorite</button>
            </div>`
    );
    //
    $(`#card${i}`).click(() => render2(item));

    //end of the loop
  });
}; //end rander1
render1();
