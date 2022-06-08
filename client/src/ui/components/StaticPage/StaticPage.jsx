import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import parse from "html-react-parser";
// import axios from "axios";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import { fetchStaticPage } from "../../../store/thunks/staticPage.thunks";

const StaticPage = (props) => {
  const dispatch = useDispatch();
  const customId = useSelector((state) => state.staticPage.customId);
  const loading = useSelector((state) => state.staticPage.loading);
  const { page } = props;
  // const [customIDD] = customId;
  // console.log(customIDD);
  useEffect(() => {
    dispatch(fetchStaticPage(page));
  }, []);

 

  return (
    loading && (
    <div>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridRowGap: "1em",
          gridColumnGap: "1em",
          gridAutoColumns: "min-content",
        }}
      >
        {parse(
          `<img src=${customId.images[0]} alt="" style="max-width:100%; height:auto"></img>`
        )}
        {parse(
          `<img src=${customId.images[1]} alt="" style="max-width:100%; height:auto"></img>`
        )}
        {parse(
          `<img src=${customId.images[2]} alt="" style="max-width:100%; height:auto"></img>`
        )}
        {parse(
          `<img src=${customId.images[3]} alt="" style="max-width:100%; height:auto"></img>`
        )}
      </Box>
      {parse(customId.htmlContent)}
    </div>

    )
        

  );
};

StaticPage.propTypes = {
  page: PropTypes.string,
};

export default StaticPage;

