import {getImageUrl} from "../utils"

const skills = [
  {
    icon: getImageUrl("skills_icons/front.png"),
    title: "Frontend",
    skills: [
      { HTML: getImageUrl("skills/html.png")},
      { CSS: getImageUrl("skills/css.png") },
      { JavaScript: getImageUrl("skills/javascript.png") },
      { React: getImageUrl("skills/react.png") },       
      { 'Next.js': getImageUrl("skills/next.png") },
      {Redux: getImageUrl("skills/redux.png") },
    ],
  },
  {
    icon: getImageUrl("skills_icons/back.png"),
    title: "Backend",
    skills: [
      { NodeJS: getImageUrl("skills/node.png") },
      { 'Express.js' : getImageUrl("skills/express.png") },
      { Django: getImageUrl("skills/django.png") },
      { PostgreSQL: getImageUrl("skills/postgress.png") },
      { MySQL: getImageUrl("skills/mysql.png") },
      { MongoDB: getImageUrl("skills/mongodb.png") },
    ],
  },
  {
    icon: getImageUrl("skills_icons/tools.png"),
    title: "Tools & Technologies",
    skills: [
      { Git: getImageUrl("skills/git.png") },
      { GitHub: getImageUrl("skills/github.png") },
      { Docker: getImageUrl("skills/docker.png") },
      { "IntelliJ": getImageUrl("skills/intellij-idea-96.png") },
      { "VS Code": getImageUrl("skills/vscode.png") },      
      { 'Visual Studio': getImageUrl("skills/visual_studio.png") },
    ],
  },
];

export default skills;