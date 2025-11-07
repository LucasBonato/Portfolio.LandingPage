import {
  Code2,
  Database,
  Server,
  Boxes,
  Container,
  Cloud,
  GitBranch,
  Workflow,
} from "lucide-react";

const skills = [
  {
    title: "Languages",
    skills: [
      { name: "C#", icon: Code2 },
      { name: "Java", icon: Code2 },
      { name: "Dart", icon: Code2 },
      { name: "JavaScript", icon: Code2 },
      { name: "Python", icon: Code2 },
    ],
  },
  {
    title: "Frameworks",
    skills: [
      { name: ".NET", icon: Server },
      { name: "Spring Boot", icon: Server },
      { name: "Flutter", icon: Server },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", icon: Database },
      { name: "MySQL", icon: Database },
      { name: "SQLServer", icon: Database },
      { name: "MongoDB", icon: Database },
      { name: "Redis", icon: Database },
      { name: "DynamoDB", icon: Database },
    ],
  },
  {
    title: "Tools & DevOps",
    skills: [
      { name: "Docker", icon: Container },
      { name: "Kubernetes", icon: Boxes },
      { name: "AWS", icon: Cloud },
      { name: "GCP", icon: Cloud },
      { name: "CI/CD", icon: Workflow },
      { name: "Git", icon: GitBranch },
    ],
  },
];

export default skills;