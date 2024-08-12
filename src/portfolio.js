/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "I-Younas",
  title: "Hi all, I'm Ibrahim",
  subTitle: emoji(
    "A passionate Software Developer 🚀 experienced in Full Stack Development, Technical Writing, and Data Analytics."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1zRJsOUNwYyoazKReOxjjS4ARNcwnZI4E/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/I-Younas",
  linkedin: "https://www.linkedin.com/in/ibrahim-younas-13a02a159/",
  gmail: "ibrahimyounus55@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Skills",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web applications"
    ),
    emoji("⚡ Object-Oriented Programming to create Modular Structures "),
    emoji("⚡ Model Data using Pandas and PyTorch "),
    emoji("⚡ Write Technical Documentation for AI tools ")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "ruby",
      fontAwesomeClassname: "fas fa-gem"
    },
    {
      skillName: "bash",
      fontAwesomeClassname: "fas fa-terminal"
    },
     {
      skillName: "C++",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "C",
      fontAwesomeClassname: "fas fa-code"
    },

  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    
    {
      schoolName: "McGill University",
      logo: require("./assets/images/mcgillLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2020 - June 2024",
      desc: "Studied Data Structures & Algorithms, Operating Systems, Object Oriented Programming, Database Systems, Functional Programming.",
      descBullets: ["CGPA: 3.64"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Technical Writing",
      progressPercentage: "60%"
    },
    {
      Stack: "Data Analytics",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Technical Writer",
      company: "Coveo",
      companylogo: require("./assets/images/coveoLogo.png"),
      date: "May 2023 – May 2024",
      descBullets: [
        "Enhanced organizational skills by using Agile Project Management software Jira to plan, implement, and track projects with Asana and Github.",
        "Collaborated with Subject Matter Experts in the Machine Learning, Ecommerce, and UX departments to write Technical documentation for users that effectively communicated the complex integration of Coveo’s ecommerce AI tools in simple terms.",
      ]
    },
    {
      role: "Software Developer",
      company: "Rilancio",
      companylogo: require("./assets/images/rilancioLogo.png"),
      date: "May 2017 – May 2018",
      descBullets: [ "Used C++ for Dynamic Data Storage in 8 warehouses to cater to the supply chain management of one of the largest fashion retailers in the country",
        "Optimized by adding automation code for building 20+ pipelines, Kubernetes clusters, and cloud infrastructure, achieving 87% efficiency."
      ]
    },
    {
      role: "Data Analyst",
      company: "Standard Capital Securities Limited",
      companylogo: require("./assets/images/standardCapitalLogo.png"),
      date: "Jan 2015 – Sep 2015",
      descBullets: [ " Created and deployed a customer churn prediction model using PyTorch, achieving a 25% reduction in customer attrition",
        "Utilized Python libraries such as Pandas and NumPy for data analysis and preprocessing tasks",
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Passion Project",
  subtitle: "A SOCIAL ENTERPRISE I CO-FOUNDED",
  projects: [
    {
      image: require("./assets/images/accessPakistanLogo.png"),
      projectName: "Access Pakistan",
      projectDesc: "Social enterprise to enhance distance learning in Pakistani public schools during Covid-19",
      footerLink: [
        {
          name: "Visit Page",
          url: "https://www.facebook.com/accessappak"
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "",

  achievementsCards: [
    {
      
    },

    {
      
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Articles",
  subtitle:
    "",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      
    },
    {
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "😅"
  ),

  talks: [
    {
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("🎙️"),
  subtitle: "",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "",
  number: "+1-4389284722",
  email_address: "ibrahimyounus55@gmail.com"
};


// Twitter Section

const twitterDetails = {
  userName: "", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
