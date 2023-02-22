import './Header.css'


export const Header = () => {
    return (
        <div className="header">
            <h1 style={{borderStyle:"none none solid none",padding: "0px 0px 8px 0px",margin: "0px 0px 0px 0px"}}>My Website</h1>
            <p style={{borderStyle:"none",margin: "8px 0px 0px 0px"}}>A <b>responsive</b> website created by me.</p>
        </div>
    )
}