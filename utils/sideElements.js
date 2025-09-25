import { openLink } from "./methods"

const handleIconClick = (icon) => {
    const links = {
        'github': 'https://github.com/wassimBaloul',
        'instagram': 'https://www.instagram.com/wass_bal/',
        'twitter': 'https://twitter.com/wass_bal',
        'linkedin': 'https://www.linkedin.com/in/wassim-baloul-3ba190293/',
    }
    openLink(links[icon])
}

const sideElements = {
    emailButton: {
        label: 'wassimbaloul16@gmail.com',
        onClick: () => openLink('mailto:wassimbaloul16@gmail.com?subject=Hello')
    },
    handleIconClick,
}

export default sideElements