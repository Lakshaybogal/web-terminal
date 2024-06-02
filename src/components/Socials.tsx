const Socials = ({ type }: { type: string }) => {
    const socialLinks = [
        {
            type: 'github',
            name: 'github.com/Lakshaybogal',
            link: 'https://github.com/Lakshaybogal',
        },
        {
            type: 'linkedin',
            name: 'linkedin.com/in/lakshay-bogal',
            link: 'https://www.linkedin.com/in/lakshaybogal/',
        },
        {
            type: 'twitter',
            name: 'twitter.com/Lakshaybogal',
            link: 'https://twitter.com/Lakshaybogal',
        },
    ]

    if (type.toLowerCase().includes('all')) {
        return (
            <div className="flex flex-col ">
                {socialLinks.map((social, index) => (
                    <a
                        key={index}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {social.name}
                    </a>
                ))}
            </div>
        )
    }

    const selectedSocial = socialLinks.find((social) =>
        type.toLowerCase().includes(social.type)
    )
    const socialLink = selectedSocial ? selectedSocial : null

    if (!socialLink) {
        return <p>{`Command '${type}' not recognized`}</p>
    }

    if (socialLink.link !== '#') {
        window.open(socialLink.link, '_blank')
    }
    return (
        <a href={socialLink.link} target="_blank" rel="noopener noreferrer">
            {socialLink.name}
        </a>
    )
}

export default Socials
