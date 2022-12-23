//song list
let All_song = [
    {
      name: "Bejeweled",
      path: "song/Taylor Swift - Bejeweled.mp3",
      img: "image/Bejeweled.jpeg",
      singer: "Taylor Swift",
      
    },
    {
      name: "Lavender Haze",
      path: "song/Taylor Swift - Lavender Haze.mp3",
      img: "image/Lavender.jpg",
      singer: "Taylor Swift"
    },
    {
      name: "Maroon",
      path: "song/Taylor Swift - Maroon.mp3",
      img: "image/Maroon.jpg",
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