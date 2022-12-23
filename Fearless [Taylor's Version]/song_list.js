//song list
let All_song = [
    {
      name: "Fearless (Taylor's Version)",
      path: "song/Taylor Swift - Fearless (Taylor's Version).mp3",
      img: "image/fearless.jpg",
      singer: "Taylor Swift",
      
    },
    {
      name: "Love story (Taylor's Version)",
      path: "song/Taylor Swift - Love Story (Taylors Version).mp3",
      img: "image/Love Story.jpg",
      singer: "Taylor Swift"
    },
    {
      name: "White Horse (Taylor's Version)",
      path: "song/Taylor Swift - White Horse (Taylor's Version).mp3",
      img: "image/White Horse.jpg",
      singer: "Taylor Swift"
    }
 ];
 
 
 /*tracks*/
 let tracks = document.querySelector('.tracks');
 
 //creating a list or generating Html
 for (let i = 0; i < All_song.length; i++) {
 
   let Html = ` <div class="song">
       <div class="img">
       <img src="${All_song[i].img}"/>
       </div>
       <div class="more">
       <audio src="${All_song[i].path}" id="music"></audio>
       <div class="song_info">
          <p id="title">${All_song[i].name}</p>
          <p>${All_song[i].singer}</p>
       </div>
       <button id="play_btn"><i class="fa fa-angle-right" aria-hidden="true"></i></button>
       </div>
     </div>`;
 
   tracks.insertAdjacentHTML("beforeend", Html);
 };