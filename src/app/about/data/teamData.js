// /app/about/data/teamData.js
import { FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';

export const teamData = [
  {
    name: "Pradeep Rana",
    role: "Expedition Guide",
    bio: "• BMC - NIM • 12 years experience",
    image: "/images/pradeep.jpg",
    socialLinks: [
      { name: "Facebook", url: "https://www.facebook.com/jasperevely808", icon: <FaFacebook /> },
      { name: "Instagram", url: "https://www.instagram.com/pradeeprana75/", icon: <FaInstagram /> }
    ]
  },
  
  {
    name: "Anuj Panwar",
    role: "Expedition Guide",
    bio: "Logistics expert • 10 years in adventure travel • Trekker since childhood",
    image: "/images/anuj.jpg",
    socialLinks: [
      { name: "Facebook", url: "https://www.facebook.com/ajpanwar.ajpanwar.33", icon: <FaFacebook /> },
      { name: "Instagram", url: "https://www.instagram.com/mountaineer_anuj_pnwr/", icon: <FaInstagram /> }
    ]
  },
  {
    name: "Gaurav Chauhan",
    role: "Mountain Guide",
    bio: "• Wilderness EMT • Fluent in 5 languages",
    image: "/images/bgww.jpg",
    socialLinks: [
      { name: "Facebook", url: "https://www.facebook.com/profile.php?id=100002276453077", icon: <FaFacebook /> },
      { name: "Instagram", url: "https://www.instagram.com/gauravchauhan677/", icon: <FaInstagram />},
      { name: "LinkedIn", url: "#", icon: <FaLinkedin /> }
    ]
  },
];