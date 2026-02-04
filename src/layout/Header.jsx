import profileImg from '../assets/images/man.png'
const Header = () => {
    return (
        <header className=" header  ">

            {/* Left: optional page title or breadcrumbs */}
            <div className="header-left">
                <h5 className="m-0">Admin Panel</h5>
            </div>

            {/* Right: user profile */}
            <div className="d-flex align-items-center header-right">
                <img
                    src={profileImg}
                    alt="User Avatar"
                    className="rounded-circle"
                    style={{ width: "40px", height: "40px", objectFit: "cover" }}
                />
                <p className="ms-2 mb-0">Yogendra</p>

            </div>
        </header>
    );
};

export default Header;
