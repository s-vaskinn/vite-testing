import { Link } from 'react-router'; // so not to reload the page

const Header = () => {
    return (
        <div className="top-nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </div>
    );
};

export default Header;