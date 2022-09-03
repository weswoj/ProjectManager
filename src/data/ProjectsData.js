let ProjectsData = [
  {
    id: 1,
    nameText: "Projekt 1",
    startDate: "2022-08-20",
    deadline: "2023-08-20",
    status: "Rozpoczęty",
    aboutText: "Projekt Testowy nr 1",
    createdByUserId: "T",
    teamMembers: ["A", "T"],
    comments: [
      {
        author: "Adam Administrator",
        date: [2022, 9, 2],
        id: "1",
        text: "Komentarz Testowy 1",
        time: [15, 38],
      },
      {
        author: "Ewa Nieistniejąca",
        date: [2022, 8, 2],
        id: "2",
        text: "Komentarz Testowy 2",
        time: [15, 37],
      },
      {
        author: "Pan Komentator",
        date: [2023, 8, 1],
        id: "3",
        text: "Komentarz Testowy 3",
        time: [15, 37],
      },
    ],
  },
  {
    id: 2,
    nameText: "Projekt 2",
    startDate: "2022-02-12",
    deadline: "2023-04-13",
    status: "Anulowany",
    aboutText: "Projekt Testowy nr 2",
    createdByUserId: "A",
    teamMembers: ["A", "E"],
  },
];

export default ProjectsData;
