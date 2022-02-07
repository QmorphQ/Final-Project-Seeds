import {
  Box,
  Divider,
  Paper,
  MenuList,
  MenuItem,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Link,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchAppBar from "../../../ui/components/SearchAppBar/SearchAppBar.jsx";
// import fetchCategories from "../../../store/thunks/catalog.thunks";
// import { allCategoriesSelector } from "../../../store/selectors/selectors";

const MenuMobile = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchCategories());
  // }, []);

  // const allCategories = useSelector(allCategoriesSelector);
  // console.log(allCategories);

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
  // const result = process(allCategories);
  // const subArr = result.filter((e) => e.parentId !== "null");
  const arrCat = result.filter((e) => e.parentId === "null");
  const [{ name }] = arrCat;
// ---------------------------------------------------------------------------------------
const filterBy = (a, b) => a.filter((e) => !b.find((item) => item.parentId === e) && e);
// --------------------------------------------------------------------------------------- MVP change
  const parentArr = filterBy(name, subArr);

  const categoriesWithoutСhildren = parentArr.map((e) => (
    <>
      <MenuItem key={Math.random() * 100}>
        <Link
          key={Math.random() * 100}
          href={`/${e}`}
          underline="none"
          sx={{ pl: "16px", color: "#1F2533", fontWeight: "400" }}
        >
          {e === "all"
            ? `${e.charAt(0).toUpperCase()}${e.slice(1)}vegetables`
            : `${e.charAt(0).toUpperCase()}${e.slice(1)}`}
        </Link>
      </MenuItem>
      <Divider />
    </>
  ));

  const cardsList = subArr.map((e) => (
    <>
      {/* <Accordion key={`${e.parentId}${i}`} sx={{ boxShadow: "none", my: "0px" }}> */}
      <Accordion
        key={(Math.random() + 1).toString(36).substring(7)}
        sx={{ boxShadow: "none", my: "0px" }}
      >
        <AccordionSummary
          key={(Math.random() + 1).toString(36).substring(7)}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <MenuItem
            key={(Math.random() + 1).toString(36).substring(7)}
            sx={{ color: "#1F2533", fontWeight: "700" }}
          >
            <ListItemText key={(Math.random() + 1).toString(36).substring(7)}>
              {e.parentId.charAt(0).toUpperCase() + e.parentId.slice(1)}
            </ListItemText>
          </MenuItem>
        </AccordionSummary>
        {e.name.map((item) => (
          <>
            <AccordionDetails
              key={(Math.random() + 1).toString(36).substring(7)}
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
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </AccordionDetails>
          </>
        ))}
      </Accordion>
      <Divider />
    </>
  ));

  return (
    <>
      <Box
        display={{ xs: "flex", sm: "block", md: "flex" }}
        sx={{ flexWrap: "wrap" }}
      >
        <Paper
          sx={{
            p: 2,
            width: "50%",
            maxWidth: "100%",
            position: "absolute",
            zIndex: "3",
            left: "45%",
            boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.2)",
          }}
        >
          <SearchAppBar />
          <MenuList>
            <>
              {categoriesWithoutСhildren}
              {cardsList}
            </>
          </MenuList>
        </Paper>
      </Box>
    </>
  );
};

export default MenuMobile;
