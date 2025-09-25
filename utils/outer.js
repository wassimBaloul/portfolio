import { openLink } from "./methods"

const outer = {
    title1: `Hello, I'm`,
    title2: 'Wassim Baloul,',
    decrypTexts: [
        'A Software Engineer',
        'A Full Stack Developer',
        'A Cybersecurity Enthusiast',
        'I build secure web and mobile apps',
        'A Web3 Explorer',
        'A Tech Traveler',
    ],
    desciption: `A dedicated Full Stack Developer and Cybersecurity specialist with over 4 years of experience. I build secure and scalable web and mobile applications, delivering projects to clients locally and internationally. My background in cloud technologies and cybersecurity allows me to create robust, efficient, and safe solutions.`,
    button: {
        label: 'Contact me!',
        onClick: () => openLink('mailto:wassimbaloul16@example.com?subject=Hello') 
    }
}

export default outer
