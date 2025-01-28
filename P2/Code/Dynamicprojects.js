const projects = [
    {
        name: "SECURING E-VOTING SYSTEM USING BLOCKCHAIN BASED SOLIDITY TECHNOLOGY",
        description: "Developed a blockchain-based electronic voting system using Ethereum blockchain technology. The system is designed to provide a secure and transparent voting process. The system allows voters to cast their votes securely and view the voting results in real-time. The system is built using Java, MySQL, Metamask and Ganache Truffle Suit technologies.",
        link: "https://drive.google.com/file/d/1E1FqE8tLhXUpOLUbxLh8kvbQMcKXrQBQ/view?usp=sharing"
    },
    {
        name: "Kotak Cherry",
        description: "Worked on a project called Kotak Cherry, a web-based application that provides a platform for users to invest in fintech products. I have a hands-on experience as an Application supporting consultant in this project. I collaborated with front-end developers to test their developed features and functionalities.  I also worked on the Adobe Analytics tool to analyze API response codes and optimize application performance.",
        link: "https://www.kotakcherry.com/mutual-funds/explore/"
    }
];
function renderProjects() {
    const projectsList = document.getElementById('projects-list');

    projects.forEach(project => {
        // Create project container
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project');

        // Create project title
        const projectTitle = document.createElement('h3');
        projectTitle.textContent = project.name;

        // Create project description
        const projectDescription = document.createElement('p');
        projectDescription.textContent = project.description;

        // Create project link
        const projectLink = document.createElement('a');
        projectLink.href = project.link;
        projectLink.textContent = "View Project";
        projectLink.target = "_blank";

        // Append elements to project container
        projectDiv.appendChild(projectTitle);
        projectDiv.appendChild(projectDescription);
        projectDiv.appendChild(projectLink);

        // Append project container to projects list
        projectsList.appendChild(projectDiv);
    });
}

// Call renderProjects function when the DOM content is loaded
document.addEventListener('DOMContentLoaded', renderProjects);