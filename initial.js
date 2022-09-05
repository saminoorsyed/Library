const addSong = document.querySelectorAll('.add-song');
const form = document.querySelector('form');
const titleIn = document.getElementById ('title');
const artistIn = document.getElementById ('artist');
const albumIn = document.getElementById ('album');
const urlIn = document.getElementById ('url');
const songs = document.querySelector('.songs');

class Song {
    constructor ( 
        title = 'unknown',
        artist = 'unknown',
        album = 'unknown',
        url = 'unknown',
    ) {
        this.title = title
        this.artist = artist
        this.album = album
        this.url = url
    }
}

class Playlist {
    constructor() {
        this.songs = []
    }
    addSong(newSong) {
        this.songs.push(newSong)
    }

    removeSong(title) {
        this.songs.filter((song) => song.title !== title)
    }

    getSong(title) {
        return this.songs.find((song) => song.title === title)
    }

    isInPlaylist(newSong) {
        return this.songs.some((song)=> song.title === newSong.title)
    }
}

const songDivMaker = function(title, artist, album, url) {
    // declare newSong with inputs, a dive to place a link inside and the link + a button to remove that song
    const newSong = new Song(title, artist, album, url);
    const songDiv = document.createElement('div');
    const a = document.createElement('a');
    const removeBut = document.createElement('button');
    const songClass = newSong.title.replace(/\s/g,'-');
    songDiv.classList.add(`${songClass}`);
    songDiv.dataset.name = newSong.title;
    a.href = newSong.url;
    // populate the text of the link to include the info from the song
    a.textContent = `${newSong.title} by ${newSong.artist} on the album ${newSong.album}`;
    removeBut.textContent = 'remove song';
    removeBut.addEventListener('click', removeSong);
    songs.appendChild(songDiv);
    songDiv.appendChild(a);
    songDiv.appendChild(removeBut);
    
}

const clear = function() {

} 

const removeSong = function(e){
    e.target.parentNode.innerHTML = '';
    // const songToRemove = document.querySelector(`${title}`);
    // songToRemove.innerHTML = '';
}


// form listeners
form.addEventListener('submit', function(e) {
    e.preventDefault();
    songDivMaker(titleIn.value, artistIn.value, albumIn.value, urlIn.value);
});

/* <button class="play-album"><img src="./images/play.png" alt=""></button>
<button class="add-song"><img src="./images/add.png" alt=""></button>
<button class="share-album"><img src="./images/share.png" alt=""></button>
<button class="delete album"><img src="./images/delete.png" alt=""></button> */



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

const addPlaylist = document.querySelector('.add-playlist');
const playlistForm = document.querySelector('.playlist-form');
const removeFormButt = document.querySelectorAll('.close-form');
const playlistName = document.getElementById('playlistName');
const submitName = document.getElementById('submit-name');
const contentDiv = document.querySelector('.content');

const songForm = document.querySelector('song-form');
const titleIn = document.getElementById ('title');
const artistIn = document.getElementById ('artist');
const albumIn = document.getElementById ('album');
const urlIn = document.getElementById ('url');
const songs = document.querySelector('.songs');

// constructors
class Song {
    constructor ( 
        title = 'unknown',
        artist = 'unknown',
        album = 'unknown',
        url = 'unknown',
    ) {
        this.title = title
        this.artist = artist
        this.album = album
        this.url = url
    }
}

class Playlist {
    constructor() {
        this.songs = []
    }
    addSong(newSong) {
        this.songs.push(newSong)
    }

    removeSong(title) {
        this.songs.filter((song) => song.title !== title)
    }

    getSong(title) {
        return this.songs.find((song) => song.title === title)
    }

    isInPlaylist(newSong) {
        return this.songs.some((song)=> song.title === newSong.title)
    }
}

// Functions!

// add songs to playlist and adjust appropriate div




function askTitle(){
    playlistForm.classList.add('front-center');
}

function askSong(){
    songForm.classList.add('front-center')
}

const removeForm = function(e){
    const formEl = e.target.parentNode.parentNode
    formEl.classList.remove('front-center');
}

const makeCard = function(name){
    const playlist = document.createElement('div');
    const playlistClass = name.replace(/\s/g,'-');
    console.log(playlistClass);
    playlist.classList.add('playlistClass');
    playlist.innerHTML = `
            <div class="card">
                <h2 class="playlist-title"> ${name}</h2>
                <div class="${playlistClass} actions">
                </div>
                <div class="${playlistClass} songs"></div>
            </div>
    `
    contentDiv.appendChild(playlist);

    addButts(playlistClass)

}

const addButts = function(playlistClass){
    const addSongAction = document.createElement('button');
    const deleteListAction = document.createElement('button');
    const shareListAction = document.createElement('button');
    const addImg = document.createElement('img');
    const deleteImg = document.createElement('img');
    const shareImg = document.createElement('img');

    addImg.src = './images/add.png';
    deleteImg.src = './images/delete.png';
    shareImg.src = './images/share.png';

    addSongAction.appendChild(addImg);
    deleteListAction.appendChild(deleteImg);
    shareListAction.appendChild(shareImg);



}


playlistForm.addEventListener('submit', function(e){
    e.preventDefault();
    makeCard(playlistName.value);
})

// listener for removing a form
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