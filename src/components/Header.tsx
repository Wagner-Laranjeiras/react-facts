import reactLogo from "/home/laranjeiras/Desktop/Projects/React/react-facts/src/assets/react-logo.png";

const Header = () => {
    return (    
        <>
            <header className="flex">
                <div className="flex logo">
                    <img src={reactLogo} alt="React Logo" className="logo-img"/>
                    <span>React Facts</span>
                </div>
                <nav>
                    <ul className="nav-list flex">
                        <li className="nav-list-item">Pricing</li>
                        <li className="nav-list-item">About</li>
                        <li className="nav-list-item">Contact</li>
                    </ul>
                </nav>
            </header>
        </>
     );
}
 
export default Header;
 