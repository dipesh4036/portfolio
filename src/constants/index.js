import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";


export const HERO_CONTENT = `Hi, I'm Dipesh!
Full-stack developer aspired to build dynamic, scalable, and user-centric web applications. Skilled in modern technologies such as React, Next.js, Node.js, and databases such as MySQL and MongoDB, I help develop innovative solutions to drive business growth and deliver seamless experiences for users.
Let's shape the future of web development!`;

export const ABOUT_TEXT = `I'm a dedicated and versatile aspiring full-stack developer with a passion for creating efficient and user-friendly web applications. I've been developing my skills with technologies like React, Next.js, Node.js, MySQL, and MongoDB. My journey in web development began with a deep curiosity about how things work, and I'm eager to build a career where I can continue learning and adapting to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

// export const EXPERIENCES = [
//   {
//     year: "Nov 2024 - present",
//     role: "Front End Developer",
//     company: "Unified Mentor",
//     description: `Designed and developed responsive web interfaces for industrial projects using FE frameworks. Adhered to agile methodologies to ensure smooth project workflows and iterative improvements.`,
//     technologies: ["HTML", "CSS", "JavaScript", "React"],
//   },
//   {
//     year: "Oct 2021 - Nov 2021",
//     role: "Graphic Designer",
//     company: "Sportsbae",
//     description: `Increased social media engagement by 50% during IPL 2021 and grew followers by 20% through targeted campaigns, innovative branding strategies, and leveraging analytics, all while maintaining high-quality standards and consistently meeting tight deadlines to ensure effective project delivery and client satisfaction.`,
//     technologies: ["Adobe Photoshop", "After Effects"],
//   }
// ];

export const PROJECTS = [
  {
    "title": "Random Feedback",
    "image": project1,
    "description": "A simple and intuitive feedback collection platform that allows users to share opinions anonymously, making it easy to gather insights for improvements.",
    "technologies": ["Next.js", "Tailwind CSS", "ShadCN","NextAuth.js"],
    "link": "https://randomfeedback.vercel.app/"
  },
  {
    "title": "ImageKit Reel",
    "image": project2,
    "description": "A media library built with ImageKit, offering optimized image and video storage with seamless retrieval and sharing features.",
    "technologies": ["Next.js", "Tailwind CSS", "ImageKit","NextAuth.js"],
    "link": "https://imagekit-reel.vercel.app/"
  }
];



export const CONTACT = {
  address: "Ahmedabad,Gujarat",
  phoneNo: "+91 8320096546",
  email: "dipeshsojitra11@gmail.com",
};
