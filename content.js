/* =====================================================================
   YOUR PORTFOLIO CONTENT
   This is the only file you need to edit.
   Change the text between the quotes "like this", save, and refresh.
   Every style (theme) reads from this file, so you only fill it in once.
   ===================================================================== */

window.PORTFOLIO = {

  /* ---------- STYLE ----------
     Pick your look: "terminal", "clean", or "story".
     showThemePicker: true shows the style switcher in the corner.
     Set it to false once you've picked your favorite.            */
  theme: "terminal",
  showThemePicker: false,

  /* ---------- ABOUT YOU ---------- */
  name: "Juan Villa",
  initials: "JV",                       // shown if you don't add a photo
  photo: "",                            // optional: "images/headshot.jpg"
  headline: "Electrical and Computer Engineer building cloud systems and developer tools.",
  tagline: "I like building things people actually use.",   // used by the Story style
  school: "ECE at UT Austin, class of 2030",
  location: "Austin, TX",
  status: "Looking for Summer 2027 internships",             // leave "" to hide

  about: "I've worked on AI evaluation at AWS, a browser-based compiler at a startup, and the platform my SHPE chapter runs on. Before all that, I built an online store for my family's candy business.",

  /* ---------- CONTACT ---------- */
  email: "jcv.jjv@icloud.com",
  resume: "resume.pdf",                 // upload your resume with this exact name, or "" to hide
  links: [
    { label: "LinkedIn", url: "https://linkedin.com/in/juan-villa2622" },
    { label: "GitHub",   url: "https://github.com/Slitsterr" },
  ],

  /* ---------- EXPERIENCE ----------
     Newest first. Copy a { ... }, block to add another.
     Jobs, internships, research, org leadership, and your own
     business all count.                                           */
  experience: [
    {
      role: "Captain",
      org: "DCHS Robotics Team",
      place: "", // TODO: city, ST for your high school
      dates: "Aug 2022 – May 2026",
      summary: "Led a 4-time state-qualifying team, designing, programming, testing, and improving competition robots with 100+ hours each of Java and CAD.",
      tags: ["Java", "Onshape", "Tinkercad", "Leadership"],
    },
    {
      role: "Captain",
      org: "DCHS Computer Science Team",
      place: "", // TODO: same as above
      dates: "Aug 2022 – May 2026",
      summary: "Ran after-school practices and competition strategy, qualifying for regionals 3 times and state once while writing Java tools like scoreboards and graders.",
      tags: ["Java", "Eclipse", "Competitive programming"],
    },
    {
      role: "Trumpet Section Leader",
      org: "DCHS Marching Band",
      place: "", // TODO: same as above
      dates: "Aug 2022 – May 2026",
      summary: "Led the trumpet section for 2 years and mentored younger players. Earned 2 All-Region and 2 State Solo & Ensemble qualifications, plus a state qualification with the band.",
      tags: ["Leadership", "Mentoring", "1,000+ hours"],
    },
    {
      role: "Cook",
      org: "Pizza Hut",
      place: "Seminole, TX",
      dates: "Jun 2025 – Aug 2026",
      summary: "Handled multiple high-volume orders at once while keeping accuracy, quality, and safety standards under tight time limits.",
      tags: ["Teamwork", "Time management"],
    },
  ],
 
  /* ---------- PROJECTS ---------- */
  projects: [
    {
      name: "Autonomous Pathing",
      when: "DCHS Robotics",
      stack: ["Java", "Odometry", "Bezier curves"],
      summary: "A motion-planning and path-following system that uses pose estimation, Bezier-curve trajectories, and closed-loop feedback to drive a robot along predefined paths.",
      result: "Tracks position with 3 odometry pods and corrects error in real time", // TODO: add a measured result if you have one (e.g. accuracy in inches)
      url: "", // TODO: GitHub repo or demo video
    },
    {
      name: "Competition Robot",
      when: "DCHS Robotics",
      stack: ["Java", "Onshape", "Tinkercad"],
      summary: "Designed, programmed, tested, and iterated on robots for competitive events across four seasons as team captain.",
      result: "4-time state qualifier", // TODO: name the specific robot/season if you want
      url: "", // TODO: photos or CAD renders
    },
    {
      name: "Scoreboard & Grading Programs",
      when: "DCHS CS Team",
      stack: ["Java", "Eclipse"],
      summary: "Java programs that automate scoring and grading, written and debugged for programming challenges and competition prep.",
      result: "Led the team to qualify for regionals 3 times and state once",
      url: "", // TODO: GitHub, if you still have the code
    },
  ],
 
  /* ---------- SKILLS ---------- */
  skills: [
    { group: "Languages", items: ["Java"] },
    { group: "Tools", items: ["Eclipse", "Android Studio", "Onshape", "Tinkercad"] },
    { group: "Concepts", items: ["Pose estimation", "Path planning", "Feedback control", "CAD design"] },
    { group: "Leadership", items: ["Team leadership", "Project management", "Mentoring"] },
  ],
 
  /* ---------- AWARDS ---------- */
  awards: [
    "4-Time State Qualifier, Robotics",
    "1-Time State & 3-Time Regionals Qualifier, Computer Science",
    "2-Time All-Region Band",
    "State Qualifier, Marching Band",
    "2-Time State Solo & Ensemble Qualifier",
  ],
};
 