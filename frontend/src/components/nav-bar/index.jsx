import React, { useEffect, useState } from "react";
import "./index.css";
import toyotaImage from "../../assets/Toyota-logo.png";
import DownArrowIcon from "../../assets/icons/down-arrow-icon";
import SettingsIcon from "../../assets/icons/settings-icon";
import { Link } from "react-router-dom";
import CustomBreadCrum from "../custom-bread-crum";
import { router } from "../../routes/routes";
import { useDispatch, useSelector } from "react-redux";
import {
  setNavbarDropDownIndex,
  setNavbarDropDownChildIndex,
} from "../../redux-slices/navbar";
import { NavLink } from "react-router-dom";
import Timers from "./Timers";

export default function NavBar() {
  const navbarDropDownIndex = useSelector((store) => store.navbar.index);
  const navbarDropDownChildIndex = useSelector(
    (store) => store.navbar.childIndex
  );
  const [navBarItems, setNavBarItems] = useState(
    router.map((item, index) => {
      const isDropDown = navbarDropDownIndex === index;
      const childItems =
        item?.child &&
        item.child.map((child, childIndex) => ({
          ...child,
          background:
            isDropDown && childIndex === navbarDropDownChildIndex
              ? "#303841"
              : "none",
        }));

      return {
        ...item,
        showDropDown: isDropDown,
        background:isDropDown ? "#202125":"none",
        child: childItems,
      };
    })
  );
  const dispatch = useDispatch();
  const toggleDropdown = (index) => {
    const updatedNavBarItems = [...navBarItems];

    for (let i = 0; i < updatedNavBarItems.length; i++) {
      if (i !== index) {
        updatedNavBarItems[i].showDropDown = false;
      }
    }

    updatedNavBarItems[index].showDropDown =
      !updatedNavBarItems[index].showDropDown;

    setNavBarItems(updatedNavBarItems);
    dispatch(setNavbarDropDownIndex(index));
    localStorage.setItem("p", index);
  };

  const changeBackGround = (index) => {
    dispatch(setNavbarDropDownChildIndex(index));
    localStorage.setItem("c", parseInt(index));
  };
  const withoutChildElement = (index) => {
    dispatch(setNavbarDropDownIndex(index));
    localStorage.setItem("p", index);
  }

  useEffect(()=>{
setNavBarItems(  router.map((item, index) => {
  const isDropDown = navbarDropDownIndex === index;
  const childItems =
    item?.child &&
    item.child.map((child, childIndex) => ({
      ...child,
      background:
        isDropDown && childIndex === navbarDropDownChildIndex
          ? "#303841"
          : "none",
    }));

  return {
    ...item,
    showDropDown: isDropDown,
    background:isDropDown ? "#202125":"none",
    child: childItems,
  };
}))
  },[navbarDropDownChildIndex])
  return (
    <>
      <nav className="navbar bg-theme">
        <ul className="navbar-nav">
          <li className="logo">
            <Link to="/" className="nav-link">
              <img src={toyotaImage} width={40} height={30} alt="" />
              <span
                className="link-text logo-text"
                style={{
                  position: "relative",
                  marginLeft: "1em",
                  fontSize: "1.4rem",
                }}
              >
                RTLS
              </span>
            </Link>
          </li>
          {navBarItems.map((item, index) => {
            if (item?.child && item.child.length > 0) {
              return (
                <li className="nav-item" key={index}>
                  <Link
                    to="#"
                    onClick={(e) => {
                      e.preventDefault();
                      toggleDropdown(index);
                    }}
                    className="nav-link"
                    style={{background:item.background}}
                  >
                    <item.icon size="1.3em" />
                    <div className="link-text-container">
                      <span className="link-text">
                        {item.title.split(" ").map((string, textIndex) => (
                          <span key={textIndex}>{string}&nbsp;</span>
                        ))}
                      </span>
                      <DownArrowIcon size="1em" />
                    </div>
                  </Link>
                  {item.showDropDown && (
                    <ul style={{ listStyle: "none", width: "100%", }}>
                      {item.child.map((childItem, childIndex) => {
                        return (
                          <li className="nav-item" key={childIndex} >
                            <NavLink
                              to={childItem.path}
                              className="nav-link child-nav-link"
                              style={{
                                background: childItem.background
                                  ? childItem.background
                                  : "none",
                                borderRadius: "6px",
                              }}
                              onClick={() => changeBackGround(childIndex)}
                            >
                              <childItem.icon size="1.4em" />
                              <div className="link-text-container">
                                <span className="link-text">
                                  {childItem.title
                                    .split(" ")
                                    .map((string, textIndex) => (
                                      <span key={textIndex}>
                                        {string}&nbsp;
                                      </span>
                                    ))}
                                </span>
                              </div>
                            </NavLink>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
              );
            }
            return (
              <li className="nav-item" key={index} style={{background:item.background}}>
                <NavLink to={item.path} className="nav-link" onClick={()=>withoutChildElement(index)}>
                  <item.icon size="1.3em" />
                  <span className="link-text">
                    {item.title.split(" ").map((string, textIndex) => (
                      <span key={textIndex}>{string}&nbsp;</span>
                    ))}
                  </span>
                </NavLink>
              </li>
            );
          })}

          <li className="nav-item" id="themeButton">
            <a href="#" className="nav-link">
              <SettingsIcon size="1.3em" />
              <span className="link-text">Settings</span>
            </a>
          </li>
        </ul>
      </nav>
   <Timers/>
      <CustomBreadCrum />
    </>
  );
}
