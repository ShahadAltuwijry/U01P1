const item = JSON.parse(localStorage.getItem("item"));

$(".desc").append(`
     <div class="card" id="card${i}">

            <div class="banner">
            <img src="${item.banner}" id="banner${i}" >
            <h1 class="quoteHead">${item.quoteHead}</h1>
            <p class="quoteCrid">${item.quoteCrid}</p>
        </div>

        <h2 class="vilName">${item.name}</h2>

        <div class="content">
            <div class="imgDiv">
                <img id="vilImg${i}" class="vilImg" src="${item.imgUrl}">
            </div>

            <div class="desContent">
                <p class="description" id="description">
                </p>
            </div>
        </div>
    </div>
`);
//^ didn't add the photo Gallery yet
