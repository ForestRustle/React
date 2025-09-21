const generateRating = () => +(Math.random() * 40 + 6).toFixed(0);

export const dataFilms = [
  {
    id: 1,
    title: 'Black Widow',
    img: '/img/Black_Widow.png',
    rating: generateRating(),
  },
  {
    id: 2,
    title: 'Shang Chi',
    img: '/img/Schang Chi.png',
    rating: generateRating(),
  },
  {
    id: 3,
    title: 'Loki',
    img: '/img/Loki.png',
    rating: generateRating(),
  },
  {
    id: 4,
    title: 'How I Met Your Mother',
    img: '/img/How_I_Met_Your_Mother.png',
    rating: generateRating(),
  },
  {
    id: 5,
    title: 'Money Heist',
    img: '/img/Money Heist.png',
    rating: generateRating(),
  },
  {
    id: 6,
    title: 'Friends',
    img: '/img/Friends.png',
    rating: generateRating(),
  },
  {
    id: 7,
    title: 'The Big Bang Theory',
    img: '/img/The Big Bang Theory.png',
    rating: generateRating(),
  },
  {
    id: 8,
    title: 'Two And a Half Men',
    img: '/img/Two And a Half Men.png',
    rating: generateRating(),
  },
];

export default dataFilms;
