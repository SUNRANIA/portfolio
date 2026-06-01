import project1 from "../assets/Builderapp.jpeg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/portfapp.jpeg";
import project4 from "../assets/jewapp.jpeg";


export const HERO_CONTENT = `I am an enthusiastic web developer with one year of hands-on experience specializing in both front-end and back-end technologies. On the front-end, I work extensively with React.js and Tailwind CSS to create responsive, intuitive user interfaces. On the back-end, I build robust server-side applications using Node.js, MongoDB, and MySQL. I am passionate about learning new technologies and improving my skills to create efficient, scalable web applications that provide seamless user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2024",
    image:project1,
    role: "internship full stack developer ",
    company: "Sane Agency.",
    description: `Led a partener in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
   
  },
 
];

export const PROJECTS = [
  {
    title: "Platforme Builder",
    image: project1,
    description:
      "focuses on building dynamic, interactive, and highly customizable websites and web apps using the React.js library. By integrating drag-and-drop libraries, Tailwind CSS, and JSX syntax,.",
    technologies: ["React js", "CSS", "Node.js", "MongoDB"],
  },
  {
    title: "Weather APP",
    image: project2,
    description:
      " The app fetches real-time weather data from a public API (like OpenWeatherMap), allowing users to search for any city and view temperature, weather conditions, humidity, wind speed, and more.",
    technologies: ["React", "CSS", "tailwind"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, experience, and contact information.",
    technologies: ["CSS", "React", "framer motion"],
  },
  {
    title: "Jewelery E-commerce  ",
    image: project4,
    description:
      " A modern, responsive Jewelry E-commerce Website, offering users a smooth shopping experience with elegant  secure user authentication, product filtering, and an integrated shopping cart. Ideal for selling rings, necklaces.",
    technologies: ["React.js", "CSS", "Mongo DB", "Express", "Node.js", "mySQL"],
  },
];

export const CONTACT = {
  address: "Sousse-Tunisia ",
  phoneNo: "+216 99 576 233 ",
  email: "rania.jabnouni2021@gmail.com",
};
