import "../navbar/navbar.css";

const Navbar = () => {
    return (
    <div className="navbar">
        <div className="navbar--container">
            <a className="btn btn--About" href="#">About Us</a> 
            <a className="btn btn--For" href="#">For You</a> 
            <a className="btn btn--Serv" href="#">Services</a> 
            <a className="btn btn--Blog" href="#">Blog</a> 
            <a className="btn btn--Vlog" href="#">Vlog</a> 
            <a className="btn btn--Contact" href="#">Contact</a> 
        </div> 
    </div>
)};

export default Navbar;