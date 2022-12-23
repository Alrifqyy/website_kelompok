//song list
let All_song = [
    {
      name: "All Too Well (Taylor's Version)",
      path: "song/Taylor Swift - All Too Well (Taylor's Version).mp3",
      img: "image/All Too Well.jpg",
      singer: "Taylor Swift",
      
    },
    {
      name: "I Knew You Were Trouble",
      path: "song/Taylor Swift - I Knew You Were Trouble.mp3",
      img: "image/I_Knew You Were Trouble.jpg",
      singer: "Taylor Swift"
    },
    {
      name: "Red (Taylor's Version)",
      path: "song/Taylor Swift - Red (Taylor's Version).mp3",
      img: "image/Red T Y.jpg",
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