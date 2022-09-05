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