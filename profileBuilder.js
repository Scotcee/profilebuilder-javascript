const developers = [
  {
    id: 1,
    name: "Amara Johnson",
    track: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    projects: { completed: 8, ongoing: 2 },
    isAvailable: true,
    mentor: { name: "Sarah Chen", specialty: "React" },
  },
  {
    id: 2,
    name: "Chidi Okafor",
    track: "Backend",
    skills: ["Python", "Django", "SQL"],
    projects: { completed: 5, ongoing: 3 },
    isAvailable: false,
    mentor: { name: "James Udo", specialty: "System Design" },
  },
  {
    id: 3,
    name: "Fatima Hassan",
    track: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "Vue", "TypeScript"],
    projects: { completed: 10, ongoing: 1 },
    isAvailable: true,
    mentor: null,
  },
  {
    id: 4,
    name: "Emeka Nwosu",
    track: "Mobile",
    skills: ["Dart", "Flutter"],
    projects: { completed: 3, ongoing: 1 },
    isAvailable: true,
    mentor: { name: "Femi Adeyemi", specialty: "Mobile Architecture" },
  },
  {
    id: 5,
    name: "Zara Ahmed",
    track: "Backend",
    skills: ["Node.js", "Express", "MongoDB", "GraphQL"],
    projects: { completed: 7, ongoing: 2 },
    isAvailable: true,
    mentor: null,
  },
  {
    id: 6,
    name: "Grace Eze",
    track: "Frontend",
    skills: [],
    projects: { completed: 0, ongoing: 0 },
    isAvailable: false,
    mentor: { name: "Sarah Chen", specialty: "React" },
  },
];

const buildProfileCard = ({
  name,
  track,
  skills,
  projects,
  isAvailable,
  mentor,
}) => {
  const availability = isAvailable ? "Available " : "Not Available";
  const mentorName = mentor?.name ?? "No Mentor Assigned";
  const skillsList = skills.length > 0 ? skills.join(", ") : "No skills listed";
  return `Developer: ${name}
     Track: ${track}
     Skills: ${skillsList}
     Projects: Completed - ${projects.completed}, Ongoing - ${projects.ongoing}
    Availability: ${availability}
    Mentor: ${mentorName}`;
};
developers.map(buildProfileCard).forEach((card) => console.log(card));

const allAvailableSkills = developers.flatMap((dev) => dev.skills);

const uniqueSkills = [...new Set(allAvailableSkills)].sort();

console.log("Unique Skills for all developers:", uniqueSkills);

// step 3 task
const uniqueTracks = [...new Set(developers.map((dev) => dev.track))].sort();

const summaryOfTracks = uniqueTracks.map((track) => {
  const trackDevelopers = developers.filter((dev) => dev.track === track);
  const availableCount = trackDevelopers.filter(
    (dev) => dev.isAvailable,
  ).length;

  const totalCompletedProjects = trackDevelopers.reduce(
    (total, dev) => total + dev.projects.completed,
    0,
  );

  return `Track: ${track}
   Developers: ${trackDevelopers.length}
   Available Developers: ${availableCount}
   Completed Projects: ${totalCompletedProjects}`;
});

summaryOfTracks.forEach((summary) => console.log(summary));

const addDeveloper = (developersArray, newDeveloper) => {
  return [...developersArray, newDeveloper];
};

const newDev = {
  id: 7,
  name: "Ajemba Joseph",
  track: "Data Science",
  skills: ["Python", "Pandas", "Machine Learning"],
  projects: { completed: 4, ongoing: 2 },
  isAvailable: true,
  mentor: { name: "Dr. Ada", specialty: "Data Science" },
};

const updateDevelopers = addDeveloper(developers, newDev);

console.log("Original Length:", developers.length);
console.log("Updated Length:", updateDevelopers.length);
console.log("Updated Developers List:", updateDevelopers);

const updateDeveloper = (developersArray, id, updatedFields) => {
  return developersArray.map((developer) => {
    return developer.id === id ? { ...developer, ...updatedFields } : developer;
  });
};

const updatedDevelopersList = updateDeveloper(developers, 4, {
  skills: ["HTML", "CSS", "JavaScript", "React"],
  isAvailable: false,
});

const updatedDeveloper4 = updatedDevelopersList.find((dev) => dev.id === 4);
console.log("Updated Developer 4:", updatedDeveloper4);

// step 6 mentor workload

const mentorWorkload = developers.reduce((accumulator, developer) => {
  const mentorName = developer.mentor?.name ?? "Unassignrd";

  accumulator[mentorName] = (accumulator[mentorName] ?? 0) + 1;
  return accumulator;
}, {});

console.log("Mentor Workload:", mentorWorkload);

// step 7 ranking

const rankedDevelopers = [...developers]
  .sort(
    (
      { projects: { completed: completedA, ongoing: ongoingA } },
      { projects: { completed: completedB, ongoing: ongoingB } },
    ) => completedB + ongoingB - (completedA + ongoingA),
  )
  .map((developer, index) => {
    const totalProjects =
      developer.projects.completed + developer.projects.ongoing;

    const medal =
      index === 0 ? "🥇" : index === 1 ? "🥈" : index === 2 ? "🥉" : "";

    return `${medal} ${index + 1}. ${developer.name} - ${totalProjects} total projects`;
  });

rankedDevelopers.forEach((rank) => console.log(rank));
