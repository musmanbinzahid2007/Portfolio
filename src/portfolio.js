/* Change this file to get your personal Portfolio */

// Website related settings
const settings = {
  isSplash: false, // Set to false so the original author's splash screen does not appear first.
};

// SEO Related settings
const seo = {
  title: "Muhammad Usman Bin Zahid's Portfolio",
  description:
    "A passionate Software Engineering undergraduate student and aspiring front-end developer eager to build clean, responsive, and impactful web applications.",
  og: {
    title: "Muhammad Usman Bin Zahid Portfolio",
    type: "website",
    url: "",
  },
};

// Home Page
const greeting = {
  title: "Muhammad Usman Bin Zahid",
  logo_name: "MuhammadUsmanBinZahid",
  nickname: "One Man Army",
  subTitle:
    "Aspiring Front-End Developer skilled in HTML, CSS, and JavaScript, passionate about building clean, responsive web pages and learning modern frameworks.",
  resumeLink:
    "https://drive.google.com/file/d/1nIUIBUEqf0W_65cYRdBknIsC9_61zaGU/view?usp=sharing",
  portfolio_repository: "https://github.com/musmanbinzahid2007/Portfolio",
  githubProfile: "https://github.com/musmanbinzahid2007",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/musmanbinzahid2007",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/muhammad-usman-bin-zahid",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Gmail",
    link: "mailto:m.usmanbinzahid2007@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
];

const skills = {
  data: [
    {
      title: "Front-End Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ I have learnt HTML and CSS to structure and style responsive web pages",
        "⚡ I have learnt JavaScript and I am continuing to build my skills with it",
        "⚡ I am eager to learn new front-end tools and techniques",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [],
};

const degrees = {
  degrees: [
    {
      title: "University of Engineering and Technology, Taxila",
      subtitle: "Bachelor of Science in Software Engineering",
      logo_path: "uet_taxila_logo.png", // Upload uet_taxila_logo.png into src/assests/images/
      alt_name: "UET Taxila",
      duration: "2025 - Present",
      descriptions: [
        "⚡ Currently pursuing a Bachelor's degree in Software Engineering at UET Taxila.",
        "⚡ Building a strong foundation in programming fundamentals, web development, and software engineering principles.",
        "⚡ Actively practicing front-end web development using HTML, CSS, and JavaScript.",
      ],
      website_link: "https://www.uettaxila.edu.pk/",
    },
  ],
};

const certifications = {
  certifications: [],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I am a new undergraduate student who has not worked with any company yet, so I am eager to gain hands-on experience and curious to learn new things. I know HTML, CSS, and JavaScript, and I am continuously improving my front-end development skills.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Learning & Practice",
      work: true,
      experiences: [
        {
          title: "Aspiring Front-End Web Developer",
          company: "Undergraduate Student — UET Taxila",
          company_url: "https://github.com/musmanbinzahid2007",
          logo_path: "github_logo.png",
          duration: "2025 - Present",
          location: "Islamabad, Pakistan",
          description:
            "Currently pursuing a Bachelor of Science in Software Engineering and building responsive front-end web projects using HTML, CSS, and JavaScript. Open to entry-level internships and collaborative learning opportunities.",
          color: "#0879bf",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Here are the web development projects I have built using HTML, CSS, and JavaScript as I continue growing as a front-end developer.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "usman_profile.png", // Upload usman_profile.png into src/assests/images/
    description:
      "I am available on GitHub, LinkedIn, and Email. Feel free to reach out to me—I will reply within 24 hours. I am always excited to connect, collaborate, and learn new front-end technologies.",
  },
  blogSection: {
    title: "Blogs",
    subtitle: "",
    link: "",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "AWT (Army Welfare Trust), Sector D-18, Islamabad",
    locality: "Islamabad",
    country: "Pakistan",
    region: "Islamabad Capital Territory",
    postalCode: "",
    streetAddress: "AWT, Sector D-18",
    avatar_image_path: "address_image.svg",
    location_map_link:
      "https://www.google.com/maps/search/?api=1&query=AWT+D-18+Islamabad",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};