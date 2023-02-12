import React, { useState, useEffect } from "react";

const Nav = () => {
  const [nav, setnav] = useState();
  const link = [
    {
      name: "home",
      link: "/",
    },
    {
      name: "color",
      link: "/color",
    },
    {
      name: "mode",
      link: "/mode",
    },
    {
      name: "setting",
      link: "/setting",
    },
  ];

  useEffect(() => {
    const reltivePath = window.location.pathname;

    setnav(
      link.map((val) => {
        const className = reltivePath == val.link ? "existPage" : ""
        return <a href={val.link} className={className}>{val.name}</a>;
      })
    );
  }, []);
  return (
    <div>
      <div className="navigation-container">{nav}</div>
    </div>
  );
};

export default Nav;
