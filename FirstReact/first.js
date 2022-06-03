function MainContent() {
    return (
        <h1>I'm learning React!</h1>
    )
}


const navbar = (
    <nav>
        <h1>Joey's Portfolio of JS React Rendering</h1>
        <h2>Below you can find pricing by the hour</h2>
        <ul>
            <li>New website build 50$</li>
            <li>Website makeover 40$</li>
            <li>Webiste advice 10$</li>
        </ul>
    </nav>
)

const root = document.getElementById("root")

ReactDOM.render(navbar, root)

// ReactDOM.render(<MainContent/>, root)