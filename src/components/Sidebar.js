import classNames from "classnames";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import HomeIcon from "../assets/images/dropdown/home.svg";

const NAV_ITEMS = [
  {
    page: "Home",
    icon: HomeIcon,
    link: "/"
  }
]

const CustomLink = ({ children, to, ...props }) => {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });
  const linkClassnames = classNames("flex text-base p-2 box-border rounded-lg items-center transition hover:bg-[#EEEEEE]",
    match ? "font-bold bg-[#EEEEEE]" : '');
  return (<Link className={linkClassnames}
    to={to}
    {...props}>
        {children}
    </Link>
  );
}

const Sidebar = () => {
  const sidebarItems = NAV_ITEMS.map((item) => {
    const { page, icon, link } = item;
    return (<li key={page}>
        <CustomLink to={link} >
          <img className="block mr-2" src={icon} alt={page} />
          <span>{page}</span>  
        </CustomLink>
    </li>)
  });

  return (<div className="xl:w-[296px] w-[232px] shrink-0	 bg-white p-6 box-border">
    <nav>
      <ul>{sidebarItems}</ul>
    </nav>
  </div>)
}

export default Sidebar;