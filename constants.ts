
import { HighlightItem, Review, ImageAsset } from './types';

export const GALLERY_IMAGES: ImageAsset[] = [
  {
    src: "https://raw.githubusercontent.com/jakedean9903/Power-Plant-Images/main/The%20Power%20Plant%20euipment%20%20Warrior.webp",
    alt: "Warrior Equipment",
    title: "Warrior Zone"
  },
  {
    src: "https://raw.githubusercontent.com/jakedean9903/Power-Plant-Images/main/The%20Power%20Plant%20euipment%203%20Lion.webp",
    alt: "Lion Strength",
    title: "Lion Strength"
  },
  {
    src: "https://raw.githubusercontent.com/jakedean9903/Power-Plant-Images/main/The%20Power%20Plant%20euipment%203.jpg",
    alt: "Main Floor",
    title: "Main Floor"
  },
  {
    src: "https://raw.githubusercontent.com/jakedean9903/Power-Plant-Images/main/The%20Power%20Plant%20euipment%204.webp",
    alt: "Training Zone",
    title: "Training Zone"
  },
  {
    src: "https://raw.githubusercontent.com/jakedean9903/Power-Plant-Images/main/The%20Power%20Plant%20euipment%205.webp",
    alt: "Free Weights",
    title: "Free Weights"
  },
  {
    src: "https://raw.githubusercontent.com/jakedean9903/Power-Plant-Images/main/The%20Power%20Plant%20euipment%206%20Sauna.webp",
    alt: "Sauna",
    title: "Sauna"
  },
  {
    src: "https://raw.githubusercontent.com/jakedean9903/Power-Plant-Images/main/The%20Power%20Plant%20euipment%20Posing%20Room.webp",
    alt: "Posing Room",
    title: "Posing Room"
  }
];

export const LOGO_URL = "https://raw.githubusercontent.com/jakedean9903/Power-Plant-Images/main/Power%20Plant%20Logo.jpg";

export const CROW_LEFT_URL = "https://raw.githubusercontent.com/jakedean9903/Power-Plant-Images/main/ChatGPT%20Image%20Nov%2025,%202025,%2007_49_34%20PM.png";
export const CROW_RIGHT_URL = "https://raw.githubusercontent.com/jakedean9903/Power-Plant-Images/main/ChatGPT%20Image%20Nov%2025,%202025,%2007_49_37%20PM.png";

export const HIGHLIGHTS: HighlightItem[] = [
  { icon: 'schedule', label: 'Open 24/7', color: 'lime' },
  { icon: 'fitness_center', label: 'Powerlifting Friendly', color: 'cyan' },
  { icon: 'hot_tub', label: 'Sauna Room', color: 'orange' },
  { icon: 'settings', label: 'Modern Equipment', color: 'pink' },
  { icon: 'payments', label: 'Fair Pricing', color: 'lime' },
  { icon: 'accessibility_new', label: 'Expert Training', color: 'cyan' },
  { icon: 'photo_camera', label: 'Posing Room', color: 'pink' },
  { icon: 'stairs', label: 'Two-Level Gym', color: 'orange' },
];

export const REVIEWS: Review[] = [
  {
    id: 1,
    author: "Kevin Farris",
    rating: 5,
    text: "Great gym. Wanna feel like you're lifting in the 90s when everyone wasn’t so soft? Just come by here. This gym has been filled previously with testosterone-filled firefighters — the strength comes from the walls themselves. You're not going to hear any top 40s music either. As I write this review Rage Against the Machine is coursing through my ear canals while I stare into the eyes of Sub-Zero and Scorpion telling me to push my medium-sized 170-pound body to certain failure. Good times."
  },
  {
    id: 2,
    author: "Marie Nelson",
    rating: 5,
    text: "I am new at working out in a gym. This is a great place and a great location for anyone looking for a gym. Jeremy has been awesome helping me with my workouts and showing me how to use the equipment. Can’t recommend this place enough!!! Come and join the fun!!"
  },
  {
    id: 3,
    author: "Luke Dixon",
    rating: 5,
    text: "Awesome gym with a dope atmosphere. The owner is super nice and he's hand picked some great machines with great range of motion. Highly recommend checking it out!"
  },
  {
    id: 4,
    author: "Don Johnson",
    rating: 5,
    text: "This is one of the best gyms I have ever been to. The gym itself is nothing substantial in size but it uses the space really well with really well thought out machines. I workout at gyms all over the country and this is by far my favorite."
  },
  {
    id: 5,
    author: "Darrious Patterson",
    rating: 5,
    text: "Love the machines and the free weights. The deadlift platform is sick along with belt squat and isolation chest press. Good vibes and had a great session my first time there. The owner is a chill guy. Shows you around and gives great guidance."
  },
  {
    id: 6,
    author: "Casey Ramey",
    rating: 5,
    text: "An awesome old school style gym with an incredible selection of equipment including machines and weights I have not seen at any other gyms in the surrounding area."
  },
  {
    id: 7,
    author: "Amy Hart",
    rating: 5,
    text: "Great place!! I’m new to working out and Jeremy has been extremely helpful guiding me in the right direction!! Can’t recommend this place enough!"
  },
  {
    id: 8,
    author: "Brandi Downs",
    rating: 5,
    text: "Love this gym. Has everything and more I could need from a gym!"
  },
  {
    id: 9,
    author: "Jayden Fernandez",
    rating: 5,
    text: "Amazing gym and great location."
  },
  {
    id: 10,
    author: "Tori Blankenship",
    rating: 5,
    text: "Very cool gym with a unique style that you don’t see everywhere. Down-to-earth owner and a safe place to work out with fair monthly prices which means a lot these days. Definitely would recommend!!"
  }
];
