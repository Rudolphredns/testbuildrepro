import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectsData = [
  {
    id: 1,
    title: "Petchy Bank (Python)",
    description: "Pecthy Bank is a program designed to allow users to manage their personal finances conveniently and securely. It has main functions such as login registration, deposit and withdrawal transactions, as well as detailed balance checking and transaction history.",
    image: "/report/petchybank1.png",
    tag: ["All", "Web"]
  },
  {
    id: 2,
    title: "Petchy Bank (GUI)",
    description: "Pecthy Bank is a program designed to allow users to manage their personal finances conveniently and securely. It has main functions such as login registration, deposit and withdrawal transactions, as well as detailed balance checking and transaction history.",
    image: "/report/petchybank.png",
    tag: ["All", "Web"]
  },
  {
    id: 3,
    title: "Petchy Hotel",
    description: "Petchy Hotel is a program that helps manage hotel rooms. The program will check the customer's date of birth. and check age If the customer is under 18 years of age, they will not be able to make a reservation. and must be 18 years of age or older in order to reserve a room in multiple rates as desired by the customer.",
    image: "/report/petchybank.png",
    tag: ["All", "Web"]
  },
  {
    id: 4,
    title: "Dream My Libary",
    description: "The Dream My Libary program is a program that helps manage book borrowing in the library. This program checks member information and the member's book borrowing history. You can check the status of the book whether it is ready to lend or not. They can also set the borrowing period and manage the return of books efficiently. So that members can borrow books easily and quickly.",

    image: "/report/DreamyLibary.png",
    tag: ["All", "Web"]
  },
  {
    id: 5,
    title: "Koala Food Delivery",
    description: "Koala Food Delivery program is a program that helps users order healthy food easily and conveniently. This program offers a variety of healthy food menus to choose from. With clear nutritional information Users can choose the menu according to their own needs and health restrictions. You can also track your food order history. and receive advice on choosing the right foods for maintaining health and losing weight.",

    image: "/report/koala.png",
    tag: ["All", "Web"]
  },
  {
    id: 6,
    title: "Shiba dog farm (UX/UI)",
    description: "Shiba dog farm is a program UX/UI design by figma that allows you to manage a dog farm that sells puppies of various breeds and ages. along with selling animal food The program can store and track information about each dog on the farm, such as name, age, breed, and health information. Including vaccinations and annual health examinations. It can also track mating. Birth of puppies, selling of dogs and efficient management of pet food stocks. In order to provide systematic and complete care and management of the farm.",

    image: "/report/shiba.png",
    tag: ["All", "Web"]
  },
  
];

const ProjectSection = () => {
  return (
    <div id='projects' className="mt-[170px]">
      <h2 className="text-4xl font-bold text-white mb-6 text-center">My Projects</h2>
      <div className="grid grid-cols-2 mt-[100px]  px-[250px] md:grid-cols-4 gap-3 justify-items-center">
        {ProjectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
