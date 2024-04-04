import React, { useContext, useEffect, useState } from "react";
import "./navbar.css";
import { MdApartment } from "react-icons/md";
import { FaWindowClose } from "react-icons/fa";
import { TbGridDots } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import Avatar from "../../../../Assets/avatar.png";
import { GlobalContext } from "../../../../provide";

const navbarItems = {
  guest: [
    { pathname: "/", title: "Home" },
    { pathname: "/faqs", title: "How it works" },
    { pathname: "/list-timeshare", title: "BOOK NOW" },
  ],
  user: [
    { pathname: "/", title: "Home" },
    { pathname: "/history", title: "Booking History" },
    { pathname: "/payment-history", title: "Payment History" },
    { pathname: "/faqs", title: "How it works" },
    { pathname: "/list-timeshare", title: "BOOK NOW" },
  ],
  owner: [
    { pathname: "/", title: "Home" },
    { pathname: "/post-timeshare", title: "Post Timeshare" },
    { pathname: "/timeshare-management", title: "Manage Booking" },
    { pathname: "/faqs", title: "How it works" },
  ],
  staff: [
    { pathname: "/", title: "Home" },
    { pathname: "/staff", title: "Dashboard" },
    { pathname: "/faqs", title: "How it works" },
  ],
  admin: [
    { pathname: "/", title: "Home" },
    { pathname: "/admin", title: "Dashboard" },
    { pathname: "/faqs", title: "How it works" },
  ],
};

const Navbar = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState("navBar");
  const [navbarType, setNavbarType] = useState(navbarItems.guest);
  const loginContext = useContext(GlobalContext);
  const { isLogin, setIsLogin, userInformation, setUserInformation } =
    loginContext;

  const handleShowProfile = () => {
    // navigate("/view-profile");
    setIsLogin(false);
    setUserInformation({});
    navigate("/");
  };
  const showNav = () => {
    setActive("navBar activeNavbar");
  };

  const removeNavbar = () => {
    setActive("navBar");
  };

  useEffect(() => {
    if (isLogin) {
      let navbarInformation =
        userInformation[
          "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
        ] === "ADMIN"
          ? navbarItems.admin
          : userInformation[
              "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
            ] === "STAFF"
          ? navbarItems.staff
          : userInformation[
              "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
            ] === "OWNER"
          ? navbarItems.owner
          : userInformation[
              "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
            ] === "USER"
          ? navbarItems.user
          : navbarItems.guest;
      setNavbarType(navbarInformation);
    }
  }, [isLogin]);

  return (
    <section className="navBarSection">
      <header className="navbarHeader flex">
        <div class="logoDiv">
          <Link to="/" class="navbarLogo flex">
            <img
              src="https://scontent.xx.fbcdn.net/v/t1.15752-9/432813694_1585955775525907_3594031435206372588_n.png?stp=cp0_dst-png&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=fuD2b3Oxu38AX_TB8dJ&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdRSWt2nyll1Ky3fH-SzDWXZwFpF26K_8zDrV1JHDgMy8Q&oe=662B8F4E"
              alt=""
              class="logo"
            />
            <h1>Timeshare</h1>
          </Link>
        </div>

        <div className={active}>
          <ul className="navbarLists flex">
            {navbarType?.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  {item?.title === "BOOK NOW" ? (
                    <button className="btn">
                      <Link to={item?.pathname} className="nav-link">
                        {item?.title}
                      </Link>
                    </button>
                  ) : (
                    <li className="navbarItem">
                      <Link to={item?.pathname} className="nav-link">
                        {item?.title}
                      </Link>
                    </li>
                  )}
                </React.Fragment>
              );
            })}
            {!isLogin ? (
              <li className="navbarItem loginItem">
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              </li>
            ) : (
              <li
                className="btn"
                style={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                }}
                onClick={handleShowProfile}
              >
                <img
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                  }}
                  alt="avatar"
                  src={Avatar}
                />
                &nbsp;
                <p style={{ color: "#000000" }}> {userInformation?.Name}</p>
              </li>
            )}
          </ul>

          <div
            onClick={removeNavbar}
            className="closeNavbar actionNavbarbutton"
          >
            <FaWindowClose className="icon" />
          </div>
          <div onClick={showNav} className="toggleNavbar actionNavbarbutton">
            <TbGridDots className="icon" />
          </div>
        </div>
      </header>
    </section>
  );
};

export default Navbar;
