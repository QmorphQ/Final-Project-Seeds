import PropTypes from "prop-types";
// import { Box, MenuList } from "@mui/material";
// import MenuItemNoChildrenDesktop from "./NavMenuComponents/MenuItemNoChildrenDesktop.jsx";
// import MenuItemWithChildrenDesctop from "./NavMenuComponents/MenuItemWithChildrenDesctop.jsx";
import MenuDesktop from './NavMenuComponents/MenuDesktop/MenuDesktop.jsx';
import MenuMobile from './NavMenuComponents/MenuMobile.jsx';
// import classes from "./HeaderNavMenuStyles.jsx";

export default function HeaderNavMenu({
  parentsListWithoutChildren,
  parentsListWithChildren,
  resolution,
  login
}) {
  // ------------------------------- RENDER -----------------------------
  switch(resolution) {
  case 'desctop': 
   return (
    <MenuDesktop />
  );
  case 'mobile':
      return(<MenuMobile  login={login}/>)
  ;
   default:
      return (<h1>TEST</h1>)
   }
}

// ====================================================================================
HeaderNavMenu.default = {
  parentsListWithChildren: [
    { parentId: "bundles", name: ["herbs-mono", "herbs-mix"] },
    { parentId: "vegetables", name: ["vegetables-mono", "vegetables-mix"] },
    { parentId: "flowers", name: ["flowers-mono", "flowers-mix"] },
  ],
  parentsListWithoutChildren: [
    ["products", "all"],
    ["preview", "bundles"],
  ],
  resolution: "desctop",
};

HeaderNavMenu.propTypes = {
  resolution: PropTypes.string,
  parentsListWithChildren: PropTypes.array,
  parentsListWithoutChildren: PropTypes.array,
  login: PropTypes.bool,
};
