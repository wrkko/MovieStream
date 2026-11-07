const photo = (id, width = 520) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=82`;

export const titles = [
  { name: 'Stranger Things', year: 2016, genre: 'Sci-Fi · Mystery', rating: '8.7', description: 'When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.', image: 'https://image.tmdb.org/t/p/w500/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg', badge: 'TOP 10' },
  { name: 'Breaking Bad', year: 2008, genre: 'Crime · Drama', rating: '9.5', description: 'A chemistry teacher turned kingpin navigates a dangerous double life in this acclaimed story of ambition, family, and consequences.', image: 'https://image.tmdb.org/t/p/original/pbEAxyuVzApIShO9VLQ2loPKYcM.jpg', badge: '#1 SERIES' },
  { name: 'Inception', year: 2010, genre: 'Sci-Fi · Action', rating: '8.8', description: 'A skilled thief who steals secrets through dream-sharing technology is given the chance to erase his past with one impossible mission.', image: 'https://www.movieposters.com/cdn/shop/products/7dfddd911b8040729896c5be83f8e139_6e2f4149-8cb4-414c-a33b-9e0065c55af3_grande.jpg?v=1762491665' },
  { name: 'Interstellar', year: 2014, genre: 'Adventure · Sci-Fi', rating: '8.7', description: 'A team of explorers travels beyond this galaxy to discover whether mankind has a future among the stars.', image: 'https://cdn.ome.lt/legacy/images/galerias/Interstellar/Interstellar-Poster-18Set2014-1.jpg' },
  { name: 'The Dark Knight', year: 2008, genre: 'Action · Crime', rating: '9.0', description: 'Batman faces his greatest psychological and physical test as a criminal mastermind plunges Gotham into chaos.', image: 'https://cdn.shopify.com/s/files/1/1416/8662/products/dark_knight_english_original_film_art_spo_5000x.jpg?v=1568854010' },
  { name: 'The Queen’s Gambit', year: 2020, genre: 'Drama', rating: '8.5', description: 'An orphaned chess prodigy fights addiction and isolation on her journey to become the greatest player in the world.', image: 'https://cdn.hk01.com/di/media/images/dw/20201029/398488814651183104521980.jpeg/0-M-hqBnW15hLQYIP90pZ19FbXYcHXJRjM_MFIzPzBQ?v=w1920' },
  { name: 'The Witcher', year: 2019, genre: 'Fantasy · Action', rating: '8.0', description: 'A solitary monster hunter struggles to find his place in a world where people often prove more wicked than beasts.', image: 'https://imgix.bustle.com/inverse/9e/ec/ed/0e/7df8/472c/97b1/3b1a6ae045f6/yennefer-geralt-and-ciri-in-the-witcher-on-netflix.jpeg' },
  { name: 'The Crown', year: 2016, genre: 'Drama · History', rating: '8.6', description: 'The life of Queen Elizabeth II unfolds across decades of change, duty, and the people closest to the crown.', image: 'https://www.impawards.com/intl/uk/tv/posters/crown_ver24_xlg.jpg' },
  { name: 'Wednesday', year: 2022, genre: 'Comedy · Mystery', rating: '8.1', description: 'Wednesday Addams investigates a murder spree while making new friends and enemies at Nevermore Academy.', image: 'https://www.thetrainline.com/cms/media/12092/wednesday-show-poster.jpg' },
  { name: 'The Rookie', year: 2018, genre: 'Crime · Comedy', rating: '8.0', description: 'Starting over at an age when most are settling down, John Nolan pursues his dream of becoming an LAPD officer.', image: 'https://image.tmdb.org/t/p/w500/wbeqBUFydztHDQ4h7dZqnknh5HE.jpg' },
  { name: '9-1-1', year: 2018, genre: 'Drama · Action', rating: '7.9', description: 'First responders race toward emergencies while balancing the intense pressures of life in Los Angeles.', image: 'https://es.web.img3.acsta.net/pictures/18/08/30/09/32/0133553.jpg' },
  { name: 'The Mentalist', year: 2008, genre: 'Crime · Mystery', rating: '8.2', description: 'A sharp observer and former psychic uses his extraordinary insight to help the California Bureau of Investigation solve crimes.', image: 'https://image.tmdb.org/t/p/original/e4y1NffN78NaZb20mDzt1C8Ir8r.jpg' },
  { name: 'Ozark', year: 2017, genre: 'Crime · Thriller', rating: '8.5', description: 'A financial adviser relocates his family to the Ozarks and must launder money to appease a dangerous cartel.', image: 'https://cdn.collider.com/wp-content/uploads/2017/07/ozark-poster.jpg' },
  { name: 'Dark', year: 2017, genre: 'Mystery · Sci-Fi', rating: '8.7', description: 'A missing child sets four families on a frantic hunt for answers as they uncover a mind-bending mystery spanning generations.', image: 'https://cloudfront-eu-central-1.images.arcpublishing.com/madsack/ZCJ2CKQCVAJF32DGCW4DQPLRDI.jpg' },
  { name: 'Mindhunter', year: 2017, genre: 'Crime · Thriller', rating: '8.6', description: 'In the late 1970s, two FBI agents expand criminal science by delving into the psychology of murder.', image: 'https://static.rogerebert.com/redactor_assets/pictures/5d573630b8b50d0dc4ea310e/content_Mindhunter_S2_Vertical_Main_RGB_EN.jpg' },
  { name: 'Sherlock', year: 2010, genre: 'Crime · Mystery', rating: '9.1', description: 'A brilliant but eccentric detective and his loyal partner solve baffling crimes in modern London.', image: 'https://cdn1.naekranie.pl/media/cache/amp/2014/12/Sherlock-poster.jpg' },
  { name: 'The Night Agent', year: 2024, genre: 'Action · Thriller', rating: '7.8', description: 'A vigilant agent answers a midnight call and is plunged into a conspiracy that reaches the highest levels of power.', image: 'https://static1.srcdn.com/wordpress/wp-content/uploads/2023/03/the-night-agent-poster.jpg' },
  { name: 'The Bear', year: 2022, genre: 'Drama · Comedy', rating: '8.6', description: 'A young chef returns to Chicago to run his family sandwich shop, finding a kitchen full of challenges and heart.', image: 'https://d32qys9a6wm9no.cloudfront.net/images/tvs/poster/49/570eea88888d3dc85027add640c2efa4_original.jpg?t=1657833014' },
  { name: 'Lupin', year: 2021, genre: 'Crime · Adventure', rating: '7.5', description: 'Inspired by the adventures of Arsène Lupin, a gentleman thief sets out to avenge his father.', image: 'https://image.tmdb.org/t/p/w500/sgxawbFB5Vi5OkPWQLNfl3dvkNJ.jpg' },
];

export const artwork = (title) => title.image;
export const shelves = [
  { title: 'Trending now', ids: ['Stranger Things', 'The Rookie', 'Inception', 'The Night Agent', 'Wednesday', 'The Witcher', 'Interstellar', 'The Bear'] },
  { title: 'Popular on MovieStream', ids: ['Breaking Bad', 'The Dark Knight', 'The Queen’s Gambit', 'The Crown', '9-1-1', 'Lupin', 'Dark', 'The Mentalist'] },
  { title: 'Crime & mystery', ids: ['The Mentalist', 'Mindhunter', 'Ozark', 'Sherlock', 'Breaking Bad', 'The Rookie', 'Lupin', 'The Night Agent'] },
];
export const featured = titles.find((title) => title.name === 'The Night Agent');





