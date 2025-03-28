import "./Resume.scss";

const experiences = [
  {
    title: "Frontend Development",
    skills: [
      { name: "HTML", level: "Experienced" },
      { name: "CSS", level: "Experienced" },
      { name: "SASS", level: "Experienced" },
      { name: "JavaScript", level: "Intermediate" },
      { name: "TypeScript", level: "Intermediate" },
      { name: "Material UI", level: "Intermediate" },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "PostgreSQL", level: "Experienced" },
      { name: "Node JS", level: "Intermediate" },
      { name: "Express JS", level: "Intermediate" },
      { name: "Git", level: "Intermediate" },
    ],
  },
];

function Resume() {
  return (
    <div className="resume">
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Experience</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          {experiences.map((category, index) => (
            <div className="details-container" key={index}>
              <h2 className="experience-sub-title">{category.title}</h2>
              <div className="article-container">
                {category.skills.map((skill, idx) => (
                  <article key={idx}>
                    <img src="checkmark.png" alt="Experience icon" className="icon" />
                    <div>
                      <h3>{skill.name}</h3>
                      <p>{skill.level}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Resume;
