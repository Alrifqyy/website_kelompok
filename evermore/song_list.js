//song list
let All_song = [
    {
      name: "Coney Island",
      path: "song/Taylor Swift - coney island ft. The National.mp3",
      img: "image/coney island.jpg",
      singer: "Taylor Swift ft. The National",
      
    },
    {
      name: "No body, No crime",
      path: "song/Taylor Swift - no body, no crime ft. HAIM.mp3",
      img: "image/no body no crime.jpg",
      singer: "Taylor Swift ft. HAIM"
    },
    {
      name: "Willow",
      path: "song/Taylor Swift - willow.mp3",
      img: "image/willow.jpg",
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