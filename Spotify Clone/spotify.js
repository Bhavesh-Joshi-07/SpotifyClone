// initializing variables :

let songIndex = 0;
let playBut = document.getElementById('playButton');
let ProgressBar = document.getElementById('progressBar');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songIcon = Array.from(document.getElementsByClassName('fa-song'));

// songList stored in MD Array :
let songs = [
    {songName: "Kya Mujhe Pyar Hai", filePath: "SpotifyMedia/Kya Mujhe Pyar Hai.mp3", coverPath: "SpotifyImages/kk-1 kya mujhe pyar hai.jpg"},
    {songName: "Beete Lamhein", filePath: "SpotifyMedia/Beete Lamhe.mp3", coverPath: "SpotifyImages/kk-2 beete lamhen.jpg"},
    {songName: "Labon ko", filePath: "SpotifyMedia/Labon Ko.mp3", coverPath: "SpotifyImages/kk-3 labon ko.jpg"},
    {songName: "Dil Kyun Yeh Mera", filePath: "SpotifyMedia/dil kyun.mp3", coverPath: "SpotifyImages/kk-4 dil kyun ye mera.jpg"},
    {songName: "I'm in Love", filePath: "SpotifyMedia/I Am In Love.mp3", coverPath: "SpotifyImages/kk-5 I am in love.jpg"},
    {songName: "Zara Sa Dil mein", filePath: "SpotifyMedia/Zara Sa.mp3", coverPath: "SpotifyImages/kk-6 zara sa.jpg"},
    {songName: "Tu Hi Meri Shab Hai", filePath: "SpotifyMedia/Tu Hi Meri Shab Hai.mp3", coverPath: "SpotifyImages/kk-7 tu hi meri shab hai.jpg"},
    {songName: "Akhon Mein Teri", filePath: "SpotifyMedia/Aankhon Mein Teri Ajab Si.mp3", coverPath: "SpotifyImages/kk-8 akhon mein teri.jpg"},
    {songName: "Dil Ibadat", filePath: "SpotifyMedia/Dil Ibadat.mp3", coverPath: "SpotifyImages/kk-9 dil ibadat.jpg"},
    {songName: "Sach Keh Raha Hai Deewana", filePath: "SpotifyMedia/Sach Keh Raha hai Deewana.mp3", coverPath: "SpotifyImages/kk-10 sach keh raha hai deewana.jpg"}
];

let audioElement = new Audio(songs[0].filePath);
let currentSongIndex = 0;

document.getElementById('next').addEventListener('click', () => {
    currentSongIndex++;
    if(currentSongIndex >= songs.length){
        currentSongIndex = 0;
    }
    console.log(currentSongIndex);
    audioElement.src = `${songs[currentSongIndex].filePath}`;
    audioElement.currentTime = 0;
    audioElement.play();
    playBut.classList.remove('fa-circle-play');
    playBut.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click', () => {
    currentSongIndex--;
    if(currentSongIndex <= 0){
        currentSongIndex = songs.length - 1;
    }
    
    audioElement.src = `${songs[currentSongIndex].filePath}`;
    audioElement.currentTime = 0;
    audioElement.play();
    playBut.classList.remove('fa-circle-play');
    playBut.classList.add('fa-circle-pause');
})
// console.log(currenSongIndex);

// Play / Pause Song :
playBut.addEventListener('click', () => {
    if(audioElement.paused || audioElement.currentTime == 0){
        audioElement.play();
        playBut.classList.remove('fa-circle-play');
        playBut.classList.add('fa-circle-pause');
    }
    else{
        audioElement.pause();
        playBut.classList.remove('fa-circle-pause');
        playBut.classList.add('fa-circle-play');
    }
})


// Placing Events :
audioElement.addEventListener('timeupdate', () => {
    // Seeker update :
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    ProgressBar.value = progress;
})

ProgressBar.addEventListener('change', () => {
    audioElement.currentTime = (ProgressBar.value * audioElement.duration)/100;
});

songItems.forEach((element, i) => {
    element.getElementsByTagName('img')[0] = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
});



let makeAllPlays = () => {
    songIcon.forEach((element) => {
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');
    })
}
songIcon.forEach((elements) => {
    elements.addEventListener('click', (e) => {
        makeAllPlays();
        i = e.target.id;
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioElement.src = `${i}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        playBut.classList.remove('fa-circle-play');
        playBut.classList.add('fa-circle-pause');
    })
})

