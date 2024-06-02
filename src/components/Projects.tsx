const Project = ({ type }: { type: string }) => {
    const projects = [
        {
            type: '-compusys',
            name: 'Compusys',
            technologyStack:
                'React.js, React-Lottie, Vercel, Vite, Bun, Tailwind, Figma',
            description:
                'Led the development and launch of the Compusys website using React, ensuring seamless functionality. Took charge of designing the website interface, focusing on creating an intuitive layout and incorporating engaging animations to enhance user interaction. Conducted thorough SEO optimizations to improve the website’s search engine visibility, including keyword research and on-page optimization.',
            projectLink: 'https://csecompusys.co',
            sourceCodeLink: null,
        },
        {
            type: '-gfgrcoem',
            name: 'GFG Rcoem',
            technologyStack:
                'React.js, Node.js, Express.js, MongoDB, React-Lottie, Netlify, Vite, Bun, MaterialUI, Figma',
            description:
                'Designed and developed the Event pages, focusing on user-friendly interface design and seamless user experience. Developed backend functionality to facilitate on-site registration and authentication, ensuring secure access for participants. Enhanced backend performance by optimizing routing and functions, resulting in a 20% increase in speed and efficiency.',
            projectLink: 'https://gfgrcoem.com',
            sourceCodeLink: null,
        },
        {
            type: '-FinanceTracker',
            name: 'Finance Tracker',
            technologyStack:
                'React.js, Node.js, Express.js, MongoDB, Bun, Vite',
            description:
                'Developed a full-stack MERN (MongoDB, Express.js, React.js, Node.js) application for daily finance tracking, allowing users to monitor their expenses and income efficiently. Implemented user authentication to ensure secure access, enabling multiple users to track their finances independently. Designed a user-friendly interface.',
            projectLink: 'https://financetracker.com',
            sourceCodeLink: 'https://github.com/financetracker',
        },
    ]

    if (type.toLowerCase().includes('-all')) {
        return (
            <div className="text-white">
                <h2>Projects</h2>
                {projects.map((project, index) => (
                    <div key={index}>
                        <p>
                            <strong>{project.name}</strong>
                        </p>
                        <p>Technology Stack: {project.technologyStack}</p>
                        <p>Description: {project.description}</p>
                        {project.projectLink && (
                            <p>
                                Project Link:{' '}
                                <a
                                    href={project.projectLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {project.projectLink}
                                </a>
                            </p>
                        )}
                        {project.sourceCodeLink && (
                            <p>
                                Source Code Link:{' '}
                                <a
                                    href={project.sourceCodeLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {project.sourceCodeLink}
                                </a>
                            </p>
                        )}
                        <br />
                    </div>
                ))}
            </div>
        )
    }

    const selectedProject = projects.find((project) =>
        type.toLowerCase().includes(project.type.toLowerCase())
    )

    if (!selectedProject) {
        return <p>{`Project '${type}' not found`}</p>
    }

    if (selectedProject.projectLink !== '#') {
        window.open(selectedProject.projectLink)
    }

    return (
        <div className="text-white">
            <h2>{selectedProject.name}</h2>
            <p>Technology Stack: {selectedProject.technologyStack}</p>
            <p>Description: {selectedProject.description}</p>
        </div>
    )
}

export default Project
