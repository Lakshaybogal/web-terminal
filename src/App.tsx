import React, { useEffect, useState } from 'react'
import About from './components/About'
import Help from './components/Help'
import Skill from './components/Skill'
import Projects from './components/Projects'
import Socials from './components/Socials'

interface Command {
    command: string
    output: React.ReactNode // Changed to accept JSX
}

const Terminal: React.FC = () => {
    const [input, setInput] = useState<string>('')
    const [history, setHistory] = useState<Command[]>([])

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value)
    }

    const handleInputSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (input.trim() === '') return

        // Process command
        const output = processCommand(input)

        // Update history
        setHistory((prevHistory) => [
            ...prevHistory,
            { command: input, output },
        ])

        // Clear input
        setInput('')
    }

    const processCommand = (command: string): React.ReactNode => {
        if (command.toLowerCase() === 'clear') {
            setHistory([])
            return ''
        }
        if (command.toLowerCase() === 'about') {
            return <About /> // Return JSX directly
        }
        if (command.toLowerCase() === 'help') {
            return <Help /> // Return JSX directly
        }
        if (command.toLowerCase() === 'skills') {
            return <Skill /> // Return JSX directly
        }
        if (command.toLowerCase().includes('projects')) {
            return <Projects type={command.toLowerCase()} /> // Return JSX directly
        }
        if (command.toLowerCase().includes('socials')) {
            return <Socials type={command.toLowerCase()} /> // Return JSX directly
        }
        // Implement other command processing logic here
        return `Command '${command}' not recognized`
    }

    return (
        <div className="flex w-screen justify-center ">
            <div className="terminal text-md w-full rounded-md md:p-4 md:text-xl">
                {history.map((cmd, index) => (
                    <div key={index} className="text-[#C5C8C6]">
                        <span className="text-[#DE935F]">
                            LakshayBogal@Portfolio:
                        </span>
                        <span className="px-2">{cmd.command}</span>
                        <div>{cmd.output}</div>
                    </div>
                ))}
                <form onSubmit={handleInputSubmit} className="flex">
                    <span className="text-[#DE935F]">
                        LakshayBogal@Portfolio:
                    </span>
                    <input
                        type="text"
                        value={input}
                        onChange={handleInputChange}
                        placeholder="Type 'help' to Know More"
                        autoFocus
                        className="flex-1 border-none bg-transparent px-2 text-[#C5C8C6] outline-none"
                    />
                </form>
            </div>
        </div>
    )
}

export default Terminal
