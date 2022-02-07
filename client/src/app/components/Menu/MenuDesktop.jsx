// import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { Box, Paper, MenuList, MenuItem, Link } from "@mui/material";
import MoreIcon from "@mui/icons-material/MoreVert";
// import fetchCategories from "../../../store/thunks/catalog.thunks";
// import {
//   downloadRequestStateSelector,
//   allCategoriesSelector,
//   mainCategoriesSelector,
// } from "../../../store/selectors/selectors";

const MenuDesktop = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchCategories());
  // }, []);

  // const allCategories = useSelector(allCategoriesSelector);

  // console.log(allCategories);

  const [dropDownOpen, setDropDownOpen] = useState(null);

  const showDropdown = (e) => {
    // -----------------------------------------------------------------------------
    // let dropDown;
    // e.target.id === dropDownOpen ? dropDown = null : dropDown = e.target.id;
    
    // return setDropDownOpen(dropDown);
    const { id } = e.target;
    return setDropDownOpen((prevState) => id !== prevState && id || null)
    // ------------------------------------------------------------------------------ MVP change
  };

  const result = [
    {
      parentId: "null",
      name: ["all", "bundles", "herbs", "vegetables", "flowers"],
    },
    {
      parentId: "herbs",
      name: ["herbs-mono", "herbs-mix"],
    },
    {
      parentId: "vegetables",
      name: ["vegetables-mono", "vegetables-mix"],
    },
    {
      parentId: "flowers",
      name: ["flowers-mono", "flowers-mix"],
    },
  ];

  const subArr = [
    {
      parentId: "herbs",
      name: ["herbs-mono", "herbs-mix"],
    },
    {
      parentId: "vegetables",
      name: ["vegetables-mono", "vegetables-mix"],
    },
    {
      parentId: "flowers",
      name: ["flowers-mono", "flowers-mix"],
    },
  ];

  // const process = (arr) => {
  //   const res = {};

  //   arr.forEach(({ parentId, name }) => {
  //     res[parentId] ??= { parentId, sub: [] };
  //     res[parentId].sub.push(name);
  //   });
  //   return Object.values(res).map(({ parentId, sub }) => ({
  //     parentId,
  //     name: sub,
  //   }));
  // };
  //  const result = process(allCategories);
  // const subArr = result.filter((e) => e.parentId !== "null");
  const arrCat = result.filter((e) => e.parentId === "null");
  const [{ name }] = arrCat;
// -----------------------------------------------------------------------------------------
  const filterBy = (a, b) => a.filter((e) => !b.find((item) => item.parentId === e) && e);
// ----------------------------------------------------------------------------------------- MVP change
   
 
  const parentArr = filterBy(name, subArr);

  // const process = (arr) => {
  //   const res = {};

  //   arr.forEach(({ parentId, name }) => {
  //     res[parentId] ??= { parentId, sub: [] };
  //     res[parentId].sub.push(name);
  //   });
  //   return Object.values(res).map(({ parentId, sub }) => ({
  //     parentId,
  //     name: sub,
  //   }));
  // };
  // const result = process(allCategories);

  // const subArr = result.filter((e) => e.parentId !== "null");
  // const arrCat = result.filter((e) => e.parentId === "null");
  // const [{ name }] = arrCat;

  // const filterBy = (a, b) => {
  //   let typedArr = a.filter(function (a) {
  //     console.log(a);
  //     if (!b.find((item) => item.parentId === a)) {
  //       return a;
  //     }
  //   });
  //   return typedArr;
  // };

  // const parentArr = filterBy(name, subArr);

  const categoriesWithoutСhildren = parentArr.map((e) => (
    <>
      <Box
        key={(Math.random() + 1).toString(36).substring(7)}
        display="flex"
        sx={{ alignItems: "flex-start" }}
      >
        <MenuItem
          key={(Math.random() + 1).toString(36).substring(7)}
          sx={{ pt: 0 }}
        >
          <Link
            key={(Math.random() + 1).toString(36).substring(7)}
            href={`/${e}`}
            underline="none"
            sx={{
              mr: "3vw",
              color: "#70737C",
              fontWeight: "500",
              display: "flex",
              fontSize: "14px",
            }}
          >
            {e.toUpperCase()}
          </Link>
        </MenuItem>
      </Box>
    </>
  ));

  const cardsList = subArr.map((e) => (
    <>
      <Box
        key={(Math.random() + 1).toString(36).substring(7)}
        sx={{ boxShadow: "none", mr: "3vw", }}
      >
        <Box
          key={(Math.random() + 1).toString(36).substring(7)}
          id={e.parentId}
          sx={{ boxShadow: "none", my: "0px", position: "relative" }}
        >
          <MenuItem
            key={(Math.random() + 1).toString(36).substring(7)}
            fontWeight="700"
            sx={{
              color: "#70737C",
              fontSize: "14px",
              pt: 0,
              position: "relative",
            }}
          >
            <Link
              key={(Math.random() + 1).toString(36).substring(7)}
              href={`/${e.parentId}`}
              underline="none"
              sx={{ color: "#70737C", fontWeight: "500" }}
            >
              {e.parentId.toUpperCase()}
            </Link>
            <MoreIcon id={e.parentId} onClick={showDropdown} />
          </MenuItem>
          <Box
            key={(Math.random() + 1).toString(36).substring(7)}
            sx={{ position: "absolute", zIndex: 3 }}
          >
            {e.name.map((item) => (
              <>
                {dropDownOpen === e.parentId && (
                  <>
                    <Box
                      key={(Math.random() + 1).toString(36).substring(7)}
                      sx={{ position: "relative" }}
                    >
                      <Paper
                        key={(Math.random() + 1).toString(36).substring(7)}
                        sx={{
                          border: "none",
                          borderRadius: 0,
                          boxShadow: "none",
                        }}
                      >
                        <MenuItem
                          key={(Math.random() + 1).toString(36).substring(7)}
                          sx={{
                            position: "relative",
                            color: "#70737C",
                            fontWeight: "300",
                            fontFamily: "Lexend",
                            fontSize: "14px",
                          }}
                        >
                          <Link
                            key={(Math.random() + 1).toString(36).substring(7)}
                            href={`${e.parentId}/${item}`}
                            underline="none"
                            sx={{
                              color: "#70737C",
                              fontWeight: "300",
                              fontFamily: "Lexend",
                            }}
                          >
                            {`${item.charAt(0).toUpperCase()}${item.slice(1)}`}
                            
                          </Link>
                          
                        </MenuItem>
                      </Paper>
                    </Box>
                  </>
                )}
              </>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  ));

  return (
    <>
      <Box
        display="flex"
        sx={{
          flexGrow: 1,
          alignItems: "baseline",
          justifyContent: "flex-start",
          justifyItems: "flex-start",
          width: "100%",
          pl: "calc((100vw - 1000px)/2)",
        }}
      >
        <MenuList
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "45%",
            pt: "14px",
          }}
        >
          <>
            {categoriesWithoutСhildren}
            {cardsList}
          </>
        </MenuList>
      </Box>
    </>
  );
};

export default MenuDesktop;
