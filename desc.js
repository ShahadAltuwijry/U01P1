const item = JSON.parse(localStorage.getItem("item"));

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
        <h2>Photo Gallery</h2>

    </div>
`);
//^ didn't add the photo Gallery yet
