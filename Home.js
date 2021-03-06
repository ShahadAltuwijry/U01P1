const villains = JSON.parse(localStorage.getItem("villains")) || [
  {
    name: "Scar",
    id: 0,
    imgUrl: "./media/scar.jpg",
    fullImg: "./media/full scar.png",
    miniDes:
      "Scar is heavily sarcastic, frequently replying to attempts at conversation with sarcasm and subtle insults.",
    banner: "./media/scar banner.jpg",
    quoteHead: "“ Long live the king. ”",
    quoteCrid:
      "- Scar showing his true nature to his brother Mufasa before throwing him off the side of the gorge to the stampede below to his death and his most infamous quote.",
    description:
      "Askari, better known as Scar, is the main antagonist of Disney's The Lion King franchise. He is Mufasa's younger brother and Simba's uncle and arch-nemesis. The former leader of the Lion Guard, his desire to rule Pride Rock drives him to enact a regicidal plot to kill both his brother and nephew to leave himself the sole royal in line for the throne as the 'true' ruler. In the franchise itself, Scar serves as the main antagonist of Disney's thirty-second full-length animated feature film The Lion King, the posthumous overarching antagonist of its 1998 sequel The Lion King II: Simba's Pride, the overarching antagonist of both the 2004 prequel/parallel film The Lion King 1½ and the animated television series The Lion Guard (serving as the posthumous overarching antagonist of Season 1 and most of Season 3 and the main antagonist of Season 2 and the Season 3 premiere 'Battle for the Pride Lands'.), and a cameo character in The Lion King's Timon and Pumbaa.",
    clip: "./media/scar clip.mp4",
    isFav: false,
  },
  {
    name: "Ursula (The Sea Witch)",
    id: 1,
    imgUrl: "./media/ursula.jpg",
    fullImg: "./media/full Ursula.jpg",
    miniDes:
      "In tone, and by nature, Ursula was very dark with a wicked sense of humor. ",
    banner: "./media/ursula banner.png",
    quoteHead:
      "“Triton's daughter will be mine and then I'll make him writhe. I'll see him wriggle like a worm on a hook!”",
    quoteCrid: "- Ursula, 'The Little Mermaid'.",
    description:
      "Ursula (also known as the Sea Witch) is the main antagonist of Disney's 1989 animated feature film The Little Mermaid. She is a villainous Cecaelia (half-woman, half-octopus) who strikes deals with unfortunate merfolk with the promise of making their dreams come true. Ursula's contracts, however, are covertly designed to advance her own ambitions and cause general misery. In the past, Ursula was a resident of King Triton's palace, before being banished and exiled by order of the king. Scorned, she has since vowed to exact vengeance by harnessing the power of the king's trident and installing herself as ruler of all the ocean. Honestly I don't see Ursula as a Villain in this movie and that's because Ariel read the contract and signed it, agreeing to all the condetions so why is it Ursula's fault that she's following the laws and coming to take what's hers? Some people will just agree with the main character of the movie just because he is, but if we think logically Ursula wasn't at fault but a lot of people might not agree with me on that. ",
    clip: "./media/ursula clip.mp4",
    isFav: false,
  },

  {
    name: "Maleficent",
    id: 2,
    imgUrl: "./media/maleficent.jpg",
    fullImg: "./media/full maleficent.jpg",
    miniDes:
      "Maleficent represents pure evil. She is ruthless, dark, devious, and will do whatever it takes to achieve her evil goals.",
    banner: "./media/maleficent banner.jfif",
    quoteHead:
      "“ Now, shall you deal with ME, o Prince, and all the powers of HELL! (maniacal laugh) ”",
    quoteCrid:
      "- Maleficent's last words before her battle with Prince Phillip and her death.",
    description:
      "Maleficent is the main antagonist of Disney's 16th full-length animated feature film Sleeping Beauty (which is based on the 1697 classic fairytale of the same name by the late Charles Perrault and the late Peter Tchaikovsky), a supporting antagonist in Mickey's House of Villains, one of the main antagonists of the Kingdom Hearts franchise, and the titular main protagonist of the live-action films Maleficent and Maleficent: Mistress of Evil. In Sleeping Beauty, she is the arch-nemesis of the Three Good Fairies, Princess Aurora, and Prince Phillip. She is an evil witch who takes offense at not being invited to the christening of Princess Aurora and attempts to get revenge on King Stefan and his people by cursing Queen Leah and Stefan's beloved daughter, Princess Aurora.",
    clip: "./media/maleficent clip.mp4",
    isFav: false,
  },
  {
    name: "The Joker",
    id: 3,
    imgUrl: "./media/joker.jpg",
    fullImg: "./media/full joker.jpg",
    miniDes:
      "He has a malevolent, sadistic sense of humor and psychopathic tendency of murdering whoever he wants.",
    banner: "./media/joker banner.jpg",
    quoteHead:
      "“ All it takes is one bad day to reduce the sanest man alive to lunacy. That's how far the world is from where I am. Just one bad day. ”",
    quoteCrid: "-  The Joker's most famous quote.	",
    description:
      "The Joker is one of the main antagonists of DC Comics, most often pitted against his archenemy Batman, Superman, and occasionally the Justice League as a whole as a part of the Legion of Doom. In the comics, the Joker is portrayed as a master criminal whose characterization has varied. The original and currently dominant image is of a highly intelligent homicidal maniac with a twisted, sadistic sense of humor. His most prominent origin story is that he fell into a vat of chemicals, which bleached his skin white, turned his hair green and turned his lips bright red, giving him the appearance of a clown. His crazed grin, psychotic, clown-like appearance and sadistic practical jokes all make the Joker one of the most diabolical villains of DC Comics and of all time. ",
    clip: "./media/joker clip.mp4",
    isFav: false,
  },
  {
    name: "Harley Quinn",
    id: 4,
    imgUrl: "./media/harley.png",
    fullImg: "./media/full harley2.png",
    miniDes:
      "Bubbly, energetic, and charming, she often hides her demented mind behind a childish exterio. Blindly loyal to the Clown Prince of Crime",
    banner: "./media/harley banner.jpg",
    quoteHead:
      "“ My love for my Joker was stronger than their madhouse walls. ”",
    quoteCrid: "- Harley Quinn expressing her love of the Joker.	",
    description:
      "Dr. Harleen Quinzel, known more commonly as Harley Quinn is a major antagonist of the DC Animated Universe. She was originally the Joker's accomplice and on and off girlfriend, but eventually struck out on her own. She is often aided in her crimes by her best friend, Poison Ivy. She is the archenemy of Batgirl. She is a major antagonist in Batman: The Animated Series and its sequel The New Batman Adventures and one of the four main protagonists of the Gotham Girls spinoff web series. ",
    clip: "./media/harley clip.mp4",
    isFav: false,
  },
  {
    name: "Jack Sparrow",
    id: 5,
    imgUrl: "./media/jack.jpg",
    fullImg: "./media/full jack.jpg",
    miniDes:
      "A notorious and infamous pirate, pillager, brigand, and highwayman; that was how Captain Jack Sparrow would be described by himself.",
    banner: "./media/jack banner.gif",
    quoteHead:
      "“ Gentlemen, m'lady...you will always remember this as the day that you almost caught Captain Jack Sparrow! ”",
    quoteCrid: "- Jack Sparrow 'running away'	",
    description:
      "Jack Sparrow was a legendary pirate of the Seven Seas, and the irreverent trickster of the Caribbean. A captain of equally dubious morality and sobriety, a master of self-promotion and self-interest, Jack fought a constant and losing battle with his own best tendencies. Jack's first love was the sea, his second, his beloved ship the Black Pearl. A notorious and infamous pirate, pillager, brigand, and highwayman; that was how Captain Jack Sparrow would be described by himself. Sailing a fine line between piratical genius and mercurial madness, Jack had an enemy in every port. Even at young age, he was the biggest troublemaker on the Seven Seas. ",
    clip: "./media/jack clip.mp4",
    isFav: false,
  },
  {
    name: "Hades (The Lord of the Underworld)",
    id: 6,
    imgUrl: "./media/Hades.jpg",
    fullImg: "./media/full hades.jpg",
    miniDes:
      "Hades is a hot-headed fast talker who hates ruling the Underworld. His dream is to take over Mount Olympus.  ",
    banner: "./media/hades banner.webp",
    quoteHead: "“ Name's Hades, Lord of the Dead. Hi, how ya doin'? ”",
    quoteCrid: "― Hades, ' Hercules'.",
    description:
      "Hades is the main antagonist of Disney's Hercules franchise, serving as the main antagonist of Disney's thirty-fifth full-length animated feature film Hercules and Hercules: The Animated Series, one of the secondary antagonists in Mickey's House of Villains, and a recurring antagonist in the Kingdom Hearts franchise. He is the ruler of the Underworld, Pain and Panic's leader and boss, Hercules' uncle and arch-nemesis, and Zeus and Poseidon's brother. Also, unlike most villains, Hades really does not like arrogance, but he does have constant mood swings, being entertaining, comedic and laid-back one minute, cloaking his dark aspirations in sarcasm and misdirection, and then argumentative, short-tempered, impatient and angry the next as even the slightest inconvenience sends him into a fiery rage despite his humorous attempts to remain calm.",
    clip: "./media/hades clip.mp4",
    isFav: false,
  },
  {
    name: "Cruella De Vil",
    id: 7,
    imgUrl: "./media/cruella.jfif",
    fullImg: "./media/ful cruella.jpg",
    miniDes:
      "Cruella is known to be mean and rude, frequently barging into other people's homes unannounced and openly disrespecting others.",
    banner: "./media/cruella banner.jpg",
    quoteHead:
      "“ The thing is, I was born brilliant, born bad, and a little bit mad. I'm Cruella. ”",
    quoteCrid:
      "― Cruella De Vil's most famous quote as she makes peace with her foster mother and accept her cruel nature and current name.	",
    description:
      "Estella von Hellman, later known as Cruella De Vil is the titular protagonist of the 2021 black comedy crime film Cruella. She is a young aspiring fashion designer who seeks revenge against her birth mother Baroness von Hellman for the death of her adoptive mother Catherine. She is an adaptation of the character of the same name from Disney's 101 Dalmations. As Cruella, she was sadistic and ruthless, but also quite playful and eccentric, with an overenunciated manner of speaking and became far more bossy and rude than she was previously. Ultimately she was driven out of a desire for vengeance, and although upset when she learned of her true heritage and the deception of her adoptive mother, she relented out of love for her and still targeted her sights on her biological mother, the Baroness, who she grew to resent and hate as the film went on.",
    clip: "./media/cruella clip.mp4",
    isFav: false,
  },
  {
    name: "The Evil Queen",
    id: 8,
    imgUrl: "./media/evil queen.jpg",
    fullImg: "./media/full queen.jpg",
    miniDes:
      "Extremely sadistic, hateful, cold and sinister person. She is ruthless, jealous and obsessive.",
    banner: "./media/queen banner.png",
    quoteHead:
      "“ When she breaks the tender peel, to taste the apple in my hand, her breath will still, her blood congeal, then I'll be fairest in the land! ”",
    quoteCrid: "- The Evil Queen, ' Snow White'.",
    description:
      "The Evil Queen (also known as the Wicked Queen, or simply, the Queen) is the main antagonist of Disney's 1937 animated feature film, Snow White and the Seven Dwarfs, and the first Disney villain in the Disney animated features canon. Determined to remain the fairest one of all, the Queen becomes insanely jealous of Snow White, the only one whose beauty surpasses her own. She eventually disguises herself as an old woman to tempt Snow White into eating a poisoned apple, in a final attempt to do away with her only, unknowing rival. Depicted in early designs as a fat character, her appearance eventually evolved into a much more sinister, stately beauty. ",
    clip: "./media/queen clip.mp4",
    isFav: false,
  },
  {
    name: "Loki",
    id: 9,
    imgUrl: "./media/Loki.jpg",
    fullImg: "./media/full loki.jpg",
    miniDes:
      "Loki is the God of Mischief, and an expert liar. Though Loki tries to taking over Asgard and Earth, all he really wants is the approval of his father and brother.",
    banner: "./media/loki banner.jfif",
    quoteHead: "“ Your savior is here! Did you miss me? ”",
    quoteCrid: "- Loki arriving to rescue the Asgardians from Hela.	",
    description:
      "He is the main antagonist of both Thor and The Avengers, a cameo antagonist in Captain America: The First Avenger, the tritagonist of Thor: The Dark World, the deuteragonist of Thor: Ragnarok, a minor character in Avengers: Infinity War and a posthumous character in both Avengers: Endgame and the Loki television series. Variants of him also appear in the Marvel animated anthology series What If...?: the first version serves as a major character in 'What If... The World Lost Its Mightiest Heroes?' and a minor antagonist in 'What If... The Watcher Broke His Oath'; the second version as a full Frost Giant serves as a major character in 'What If... Thor Were an Only Child?'. He is the God of Mischief, the adoptive son of Odin and Frigga and the adoptive brother of Thor and Hela. ",
    clip: "./media/loki clip.mp4",
    isFav: false,
  },
  {
    name: "Venom",
    id: 10,
    imgUrl: "./media/venom.jpeg",
    fullImg: "./media/full venom.jpg",
    miniDes:
      "a malicious and controlling being that worked for Riot in wreaking havoc and conquering planets with life with their current target being Earth.",
    banner: "./media/venom banner.jpg",
    quoteHead:
      "“ You may call me Venom-- for that's what I'm paid to spew out these days! I'm your victim, Spider-Man-- I'm the innocent you ruined! ”",
    quoteCrid: "- Venom introducing himself to Spider-Man.	",
    description:
      "Venom is a major character in Marvel Comics, most commonly serving as a former archenemy and current rival of Spider-Man. The name has belonged to several different hosts over the years, which means that Venom is indeed the identity of this particular alien Symbiote. The Symbiote named itself Venom, as it considered itself a venom for Spider-Man. His archenemies are Carnage and Knull. Despite being Spidey's third archenemy, Venom's popularity integrated him as the mascot antagonist of the Spider-Man franchise in other media, appearing far more than the likes of Doc Ock and Green Goblin ",
    clip: "./media/venom clip.mp4",
    isFav: false,
  },
  {
    name: "Hela",
    id: 11,
    imgUrl: "./media/hela.jpg",
    fullImg: "./media/full hela.png",
    miniDes:
      "Hela is extremely wrathful, ambitious, sadistic, callous, and manipulative.",
    banner: "./media/hela banner.jpg",
    quoteHead:
      "“ We were once the seat of absolute power in the cosmos. Our supremacy was unchallenged. Yet, Odin stopped at Nine Realms. Our destiny is to rule over all others. And I am here to restore that power. ”",
    quoteCrid: "- Hela to Thor and Loki.	",
    description:
      "She was the first born daughter of Odin, which makes her the elder biological sister of Thor Odinson and adoptive elder sister to Loki Laufeyson. She was the Goddess of Death and heir to Asgard's throne who is bent on taking over Asgard with her own army of Berserkers at her side, rebuilding it in her own image and conquering the entire universe instead of simply Nine Realms. After her freedom, she immediately conquered Asgard and Heimdall himself said that she was so power-hungry that if she could access the Bifrost Bridge, she would conquer all of the Nine Realms and even all the Cosmos. Hela proved that Odin was wise to imprison her, rather than let her rule Asgard during peacetime. She quickly made it clear that she would exterminate her whole nation if they stood in the way of resuming her conquests. Hela was quite content to rule over a dead nation of dead soldiers completely loyal to her as she would conquer more worlds. ",
    clip: "./media/hela clip.mp4",
    isFav: false,
  },
];

//storing the array on local stoage
localStorage.setItem("villains", JSON.stringify(villains));

// $("#cards") dec page function
const render2 = (item) => {
  localStorage.setItem("item", JSON.stringify(item));
  location.replace("desc.html");
};

// const searchBar = document.getElementById("searchBar"); //the search div
// const searchBtn = document.getElementById("search"); //the search part in navigation
// searchBtn.onclick = function () {
//   $(".searchBar").toggle("slow");
// }; //only toggles, no function

// const searchFunc = () => {
//   let input = document.getElementById("searchInput");
//   let filter = input.value.toLowerCase();
// }

// const searchFunc = document.getElementById("searchInput");
// searchFunc.onchange = () => {
//   let
// };

/*main page cards function*/
const render1 = () => {
  $("#cards").html("");
  for (let i = 0; i < 6; i++) {
    $("#cards").append(
      `            <div class="card" id="card${i}"><img id="vilImg${i}" class ="vilImg" src="${
        villains[i].imgUrl
      }">
                <h3 class="vilName" id="vilName" >${villains[i].name}</h3>
                <p class="vilDes" id="vilDes">${villains[i].miniDes}</p>
                    <button class="favBtn" id="favBtn${i}" onclick='addToFav(${i})'>${
        !villains[i].isFav ? "❤" : "✘"
      }</button>
            </div>`
    );
    //
    $(`#vilImg${i}`).click(() => render2(villains[i]));

    $(`#favBtn${i}`).click(() => addFav(villains[i]));

    //end of the loop
  }
}; //end rander1

render1();

const addToFav = (i) => {
  villains[i].isFav = !villains[i].isFav;
  localStorage.setItem("villains", JSON.stringify(villains));
  render1();
};

// const logo = document.getElementById("logo");
// logo.onclick = () => {
//   location.replace("./Home.html");
// };

// $("#searchInput").click(function () {
//   const res = $("#searchInput").val();
//   if (res.length && res.trim().length) {
//     const lowRes = res.toLowerCase();
//     const searchVil = elem.villains.toLowerCase();
//     console.log(searchVil.includes(lowRes), elem);
//     const arr = works.filter(
//       (o) =>
//         o.villains.toLowerCase() === lowRes ||
//         o.villains.toLowerCase().includes(lowRes)
//     );
//     $("#show").html(``);
//     if (arr.length) {
//       for (let i = 0; i < 6; i++) {
//         $("#cards").append(
//           `            <div class="card" id="card${i}"><img id="vilImg${i}" class ="vilImg" src="${
//             villains[i].imgUrl
//           }">
//                 <h3 class="vilName" id="vilName" >${villains[i].name}</h3>
//                 <p class="vilDes" id="vilDes">${villains[i].miniDes}</p>
//                     <button class="favBtn" id="favBtn${i}" onclick='addToFav(${i})'>${
//             !villains[i].isFav ? "❤" : "✘"
//           }</button>
//             </div>`
//         );

//         $(`#vilImg${i}`).click(() => render2(villains[i]));
//       }
//     }
//   }
// });
//----------------------------------------
//if i want to have it showing on the same page

//         );
//         $('#show').append(`<p><a style="color: #8834ec;" href="/portfolio.html">Back to Portfolio</a></p>`)
//       }
//         else {
//           $('#show').append(`
// <p>Soory,no result.  <a style="color: #8834ec;" href="/portfolio.html">Back to Portfolio</a></p> `);
//         }

//
