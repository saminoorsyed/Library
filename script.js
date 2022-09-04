const addPlaylist = document.querySelector('.add-playlist');
const playlistForm = document.querySelector('.playlist-form');
const removeFormButt = document.querySelectorAll('.close-form');
const playlistName = document.getElementById('playlistName');
const submitName = document.getElementById('submit-name');


// Functions!

function askTitle(){
    playlistForm.classList.add('front-center');
}

const removeForm = function(e){
    const formEl = e.target.parentNode.parentNode
    formEl.classList.remove('front-center');
}

const makeCard = function(name){
    console.log(name);
}


playlistForm.addEventListener('submit', function(e){
    e.preventDefault();
    makeCard(playlistName.value);
})

submitName.addEventListener('click', removeForm);

// listeners for adding a playlist
addPlaylist.addEventListener('click', askTitle);
removeFormButt.forEach(butt => butt.addEventListener('click', removeForm))











// let myLibrary = [];

// function Song(title, artist, time, album){
//     this.title = title;
//     this.artist = artist;
//     this.time = time;
//     this.album = false
//     this.info = function (){
//         return `${title} by ${artist}, ${time}time, ${(album)?"finished":"not album yet"}`;
//     }
// }

// Book.prototype.readIt = function () {this.album = true}
// const sami = new Book( 'sami','Sami', 'too many', false);

// console.log(sami.album);

// sami.readIt();

// console.log(sami.album);