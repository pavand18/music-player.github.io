// NOW I CLICK album-poster TO GET CURRENT SONG ID
// click event listener .. 
$(".album-poster").on('click', function(e){
    // to get the data switch value of song of the clicked poster.. 
    var dataSwitchId = $(this).attr('data-switch');
    //console.log(dataSwitchId);

    // and now i use aplayer switch function see
    // this helps in selecting to the song corresponding to the data-switch value of the song.. 
    ap.list.switch(dataSwitchId); //this is static id but i use dynamic 

    // aplayer play function
    // when i click any song to play ,, 
    // song will be played 
    ap.play();

    // click to slideUp player see ,, this makes the audio player visible ,, after playing the song...
    $("#aplayer").addClass('showPlayer');
});                     

const ap = new APlayer({
    container: document.getElementById('aplayer'),
    listFolded: true,
    audio: [
    {
        name: "I Ain't Worried",
        artist: 'OneRepublic',
        url: './music/IAintWorried.mp3',
        cover: "./pic/I-AIN'T-WORRIED.jfif"
    },
    {
        name: 'Alone',
        artist: 'Alan walker',
        url: './music/Alone.mp3',
        cover: './pic/alone.jpeg',
    },  
    {
        name: 'Arcade',
        artist: 'Alan walker',
        url: './music/Arcade.mp3',
        cover: './pic/arcade.jpeg',
    },  

    {
        name: 'Blank Space',
        artist: 'Taylor Swift',
        url: './music/Blank Space.mp3',
        cover: './pic/bs.jpeg',
    },  
    {
        name: 'On My Way',
        artist: 'Alan Walker',
        url: './music/onw.mp3',
        cover: './pic/onw.jpeg',
    }, 
    {
        name: 'Snap',
        artist: 'Rosa Linn',
        url: './music/snap.mp3',
        cover: './pic/snap.jpeg',
    }, 
    {
        name: 'Cest la vie',
        artist: 'Khaled',
        url: './music/cest.mp3',
        cover: './pic/cest.jpeg',
    },  
    {
        name: 'Counting Stars',
        artist: 'One Republic',
        url: './music/cs.mp3',
        cover: './pic/cs.jpeg',
    },    
    {
        name: 'Dandelions',
        artist: 'Ruth',
        url: './music/ddd.mp3',
        cover: './pic/dand.jpeg',
    },
    {
        name: 'Stay',
        artist: 'justin Beiber',
        url: './music/stay.mp3',
        cover: './pic/stay.jpeg',
    },
    {
        name: 'Nang',  
        artist: 'Iman Troye', 
        url: './music/Nang.mp3', 
        cover: './pic/nang.jpg'
    },
    {
        name: 'OK Not To Be OK',
        artist: 'Marshmello & Demi Lovato',
        url: './music/OK_Not_To_Be_OK.mp3',
        cover: './pic/Ok_Not_to_Be_Ok.png',
    },
    {
        name: 'A-O-K',
        artist: 'Tai Verdes',
        url: './music/music_A-O-K.mp3',
        cover: './pic/a-o-k-tai-verdes.png',
    },
    {
        name: 'OVERWHELMED (RYAN MACK REMIX)',
        artist: 'Ryan Mack',
        url: './music/music_Overwhelmed-Ryan-Mack-Remix.mp3',
        cover: './pic/Overwhelmed-Ryan-Mack-Remix.jfif',
    },

    ]
});