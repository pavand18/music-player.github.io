// NOW I CLICK album-poster TO GET CURRENT SONG ID
$(".album-poster").on('click', function(e){
    var dataSwitchId = $(this).attr('data-switch');
    //console.log(dataSwitchId);

    // and now i use aplayer switch function see
    ap.list.switch(dataSwitchId); //this is static id but i use dynamic 

    // aplayer play function
    // when i click any song to play
    ap.play();

    // click to slideUp player see
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
        name: 'Nang',  // SONG NAME
        artist: 'Iman Troye', //ARTIST NAME
        url: './music/Nang.mp3', // PATH NAME AND SONG URL
        cover: './pic/nang.jpg' // COVER IMAGE
    },
    {
        name: 'OK Not To Be OK',
        artist: 'Marshmello & Demi Lovato',
        url: './music/OK_Not_To_Be_OK.mp3',
        cover: './pic/Ok_Not_to_Be_Ok.png',
    },
    {
        name: 'Teman',
        artist: 'Iman Troye',
        url: './music/Teman.mp3',
        cover: './pic/teman.jpg',
    },
    {
        name: 'A-O-K',
        artist: 'Tai Verdes',
        url: './music/music_A-O-K.mp3',
        cover: './pic/a-o-k-tai-verdes.png',
    },
    {
        name: 'DO IT TO IT',
        artist: 'ACRAZE,Cherish',
        url: './music/music_Do-it-to-it.mp3',
        cover: './pic/do-it-to-it.jfif',
    },
    {
        name: 'EVERYTHING SUCKS',
        artist: 'Vaultboy',
        url: './music/music_vaultboy-everything-sucks.mp3',
        cover: './pic/everything-sucks.jfif',
    },
    {
        name: 'OVERWHELMED (RYAN MACK REMIX)',
        artist: 'Ryan Mack',
        url: './music/music_Overwhelmed-Ryan-Mack-Remix.mp3',
        cover: './pic/Overwhelmed-Ryan-Mack-Remix.jfif',
    },


    ]
});