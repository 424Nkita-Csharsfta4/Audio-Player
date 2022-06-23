let songs = [
  {
    name: "Phonk",
    cover:
      "https://d3wo5wojvuv7l.cloudfront.net/t_square_limited_720/images.spreaker.com/original/45b6ea5b370f678e854c5fa171a272be.jpg",
    artist: "School Jungle",
    audio: null,
    id: 0,
  },
  {
    name: "Phonk",
    cover:
      "https://www.meme-arsenal.com/memes/61d475297c76d54aa11cf9740470f752.jpg",
    artist: "zxc psychomane",
    audio: null,
    id: 1,
  },
  {
    name: "Phonk",
    cover:
      "https://sun9-29.userapi.com/sun9-53/s/v1/ig2/TqXOXUCRfQPdMcP7DFlTrLJYN5JsL-MEkyWhfQ1V62-TYrqBwWo67Ekz6vn2LSZhwdcvGC1rxapG4UzTQ7cB8n3L.jpg?size=400x400&quality=96&crop=0,0,2048,2048&ava=1",
    artist: "Drift",
    audio: null,
    id: 2,
  },
  {
    name: "Phonk",
    cover:
      "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/fe/41/93/fe419304-156f-2243-770c-61116497d503/196292392296.jpg/400x400cc.jpg",
    artist: "Supra",
    audio: null,
    id: 3,
  },
  {
    name: "Phonk",
    cover:
      "https://i.scdn.co/image/ab67616d0000b27371550d362b7e31d1684c4bac",
    artist: "Adlink - Deade Indside",
    audio: null,
    id: 4,
  },
  {
    name: "Phonk",
    cover:
      "https://resources.tidal.com/images/37e0b917/2f29/41ed/a052/ac08c247cc09/640x640.jpg",
    artist: "Anime - Hikigaya",
    audio: null,
    id: 5,
  },
];
storageRef
  .child("default")
  .child("quran.mp3")
  .getDownloadURL()
  .then((url) => {
    songs[0].audio = url;
  });

storageRef
  .child("default")
  .child("quran1.mp3")
  .getDownloadURL()
  .then((url) => {
    songs[1].audio = url;
  });
storageRef
  .child("default")
  .child("quran2.mp3")
  .getDownloadURL()
  .then((url) => {
    songs[2].audio = url;
  });
storageRef
  .child("default")
  .child("quran3.mp3")
  .getDownloadURL()
  .then((url) => {
    songs[3].audio = url;
  });
storageRef
  .child("default")
  .child("quran4.mp3")
  .getDownloadURL()
  .then((url) => {
    songs[4].audio = url;
  });
storageRef
  .child("default")
  .child("quran5.mp3")
  .getDownloadURL()
  .then((url) => {
    songs[5].audio = url;
  });
