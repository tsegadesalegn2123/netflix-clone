import scream7 from "../assets/image/scream7.webp";
import youngSherlock from "../assets/image/youngSherlock.webp";
import theBride from "../assets/image/TheBride.webp";
import warMachine from "../assets/image/WareMachine.webp";
import vladimir from "../assets/image/vladimir.webp";
import monarch from "../assets/image/monarchLegacyOfMonsters.webp";
import hamnet from "../assets/image/hamnet.webp";
import hoppers from "../assets/image/hoppers.webp";
import marshals from "../assets/image/marshals.webp";
import pursuitOfJade from "../assets/image/pursuitOfJade.webp";
import coldStorage from "../assets/image/coldStorage.webp";
import bannerImg from "../assets/image/banner.jpeg";

import img10061 from "../assets/image/10061.jpg";
import img10066 from "../assets/image/10066.jpg";
import img10067 from "../assets/image/10067.jpg";
import img10069 from "../assets/image/10069.png";
import img10072 from "../assets/image/10072.jpg";
import img10075 from "../assets/image/10075.png";
import img10076 from "../assets/image/10076.jpg";
import img10077 from "../assets/image/10077.jpg";
import img10078 from "../assets/image/10078.jpg";
import img10079 from "../assets/image/10079.jpg";
import img10080 from "../assets/image/10080.jpg";
import img10081 from "../assets/image/10081.png";
import img10082 from "../assets/image/10082.jpg";
import img10083 from "../assets/image/10083.jpg";
import img10084 from "../assets/image/10084.jpg";
import img10085 from "../assets/image/10085.jpg";
import img10086 from "../assets/image/10086.jpg";
import img10092 from "../assets/image/10092.jpg";

const movie = (id, title, image) => ({
  id,
  title,
  name: title,
  overview: "",
  backdrop_path: image,
  poster_path: image,
});

export const bannerMovie = movie(1, "Hamnet", hamnet);

export const movies = {
  trending: [
    movie(1, "Scream 7", scream7),
    movie(2, "Young Sherlock", youngSherlock),
    movie(3, "The Bride", theBride),
    movie(4, "War Machine", warMachine),
    movie(5, "Vladimir", vladimir),
    movie(6, "Monarch: Legacy of Monsters", monarch),
    movie(7, "Hoppers", hoppers),
    movie(8, "Marshals", marshals),
    movie(9, "Cold Storage", coldStorage),
    movie(10, "Pursuit of Jade", pursuitOfJade),
    movie(11, "Dark Waters", img10061),
    movie(12, "Broken Arrow", img10066),
    movie(13, "Silent Night", img10067),
    movie(14, "Shadow Protocol", img10069),
    movie(15, "Iron Divide", img10072),
  ],
  netflixOriginals: [
    movie(16, "Hamnet", hamnet),
    movie(17, "Vladimir", vladimir),
    movie(18, "Marshals", marshals),
    movie(19, "The Bride", theBride),
    movie(20, "Young Sherlock", youngSherlock),
    movie(21, "Neon City", img10075),
    movie(22, "Last Horizon", img10076),
    movie(23, "Wild Fire", img10077),
  ],
  topRated: [
    movie(24, "Cold Storage", coldStorage),
    movie(25, "Scream 7", scream7),
    movie(26, "War Machine", warMachine),
    movie(27, "Monarch: Legacy of Monsters", monarch),
    movie(28, "Pursuit of Jade", pursuitOfJade),
    movie(29, "Hoppers", hoppers),
    movie(30, "Midnight Run", img10078),
    movie(31, "Glass Empire", img10079),
    movie(32, "Red Canyon", img10080),
    movie(33, "Fallen Kingdom", img10081),
    movie(34, "Night Moves", img10082),
    movie(35, "Steel Heart", img10083),
  ],
  action: [
    movie(36, "War Machine", warMachine),
    movie(37, "Marshals", marshals),
    movie(38, "Scream 7", scream7),
    movie(39, "Pursuit of Jade", pursuitOfJade),
    movie(40, "Cold Storage", coldStorage),
    movie(41, "Vladimir", vladimir),
    movie(42, "Blowback", img10084),
    movie(43, "Kill Zone", img10085),
    movie(44, "Rogue Target", img10086),
    movie(45, "Zero Hour", img10092),
    movie(46, "Blackout", img10061),
    movie(47, "Hard Impact", img10066),
  ],
  comedy: [
    movie(48, "Cold Storage", coldStorage),
    movie(49, "Hoppers", hoppers),
    movie(50, "Young Sherlock", youngSherlock),
    movie(51, "Pursuit of Jade", pursuitOfJade),
    movie(52, "Hamnet", hamnet),
    movie(53, "Party Crashers", img10067),
    movie(54, "Oops! Again", img10069),
    movie(55, "Room Mates", img10072),
    movie(56, "Funny Business", img10075),
    movie(57, "Camp Chaos", img10076),
    movie(58, "Total Mixup", img10077),
  ],
  horror: [
    movie(59, "Scream 7", scream7),
    movie(60, "The Bride", theBride),
    movie(61, "Vladimir", vladimir),
    movie(62, "Cold Storage", coldStorage),
    movie(63, "Dark Waters", img10061),
    movie(64, "Whispers", img10078),
    movie(65, "Hollow Ground", img10079),
    movie(66, "The Attic", img10080),
    movie(67, "Blood Moon", img10081),
    movie(68, "Shadows", img10082),
  ],
  romance: [
    movie(69, "The Bride", theBride),
    movie(70, "Hamnet", hamnet),
    movie(71, "Hoppers", hoppers),
    movie(72, "Marshals", marshals),
    movie(73, "Pursuit of Jade", pursuitOfJade),
    movie(74, "Love Letters", img10083),
    movie(75, "Summer Fling", img10084),
    movie(76, "Forever Yours", img10085),
    movie(77, "Heartstrings", img10086),
    movie(78, "The Proposal", img10092),
    movie(79, "Second Chance", img10066),
    movie(80, "Moonlit Kiss", img10067),
  ],
  documentaries: [
    movie(81, "Deep Blue", img10061),
    movie(82, "Cosmic Journey", img10066),
    movie(83, "Wild Planet", img10067),
    movie(84, "Ancient World", img10069),
    movie(85, "Ocean Depths", img10072),
    movie(86, "Mountain Life", img10075),
    movie(87, "City Stories", img10076),
    movie(88, "Human Nature", img10077),
    movie(89, "Lost Civilizations", img10078),
    movie(90, "Future Tech", img10079),
    movie(91, "Frozen Worlds", img10080),
    movie(92, "Inner Space", img10081),
    movie(93, "Rising Seas", img10082),
    movie(94, "Desert Mysteries", img10083),
    movie(95, "Bird Kingdom", img10084),
    movie(96, "Volcano", img10085),
    movie(97, "Jungle Trail", img10086),
    movie(98, "Night Sky", img10092),
  ],
};

export const banner = bannerImg;
