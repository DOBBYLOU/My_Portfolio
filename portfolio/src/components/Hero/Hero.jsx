import Styles from "./Hero.module.css"

function Hero() {
    return (
        <div className={`${Styles.hero}`}>
            <h1>Front-End Development That Delivers Results</h1>
            <p>I build modern, fast, and responsive web interfaces using React, with a strong focus on UX and performance.</p>
            <h1>UI Implementation</h1>
            <p>UI implementation based on Figma / Adobe XD designs with pixel-perfect accuracy. Ensuring responsive layouts, cross-browser compatibility, and strong attention to detail.</p>
            <h1>Performance Optimization</h1>
            <p>Application performance optimization, including reducing load times, implementing lazy loading, code splitting, and improving rendering efficiency.</p>
            <h1>API Integration</h1>
            <p>Integration of REST APIs and handling asynchronous data using Axios and Fetch. Implementation of proper error handling, loading states, and data state management.</p>
            <h1>State Management</h1>
            <p>Configuration and management of application state using Redux Toolkit, Context API, and other modern state management solutions.</p>
            <h1>Bug Fixing & Refactoring</h1>
            <p>Identifying and fixing bugs, improving code structure, and refactoring existing projects.</p>
            <h1>Responsive Design</h1>
            <p>Creating interfaces that work seamlessly across all devices, including mobile, tablet, and desktop.</p>
            <h1>Code Review & Consulting</h1>
            <p className={`${Styles.endP}`}>Conducting code reviews and providing recommendations for improving architecture and development best practices.</p>
        </div>
    )
}

export default Hero