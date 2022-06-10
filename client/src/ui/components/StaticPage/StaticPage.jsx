import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import parse from "html-react-parser";
// import axios from "axios";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import { fetchStaticPage } from "../../../store/thunks/staticPage.thunks";
import Preloader from "../Preloader/Preloader.jsx";

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

 const testHtml = 
 {
"html": "<style>@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@300;600&display=swap')</style><style>h2{width: 75%; margin: 0px 0px 19px; padding-top: 30px;font-size: 22px;line-height: 34px;}h3{font-size: 18px;line-height: 28px;text-align: center;}h2.title_team{width: 100%; text-align: center; margin: 0px 0px 40px}p{margin: 20px 0px;font-weight: 300;line-height: 28px};span{font-weight: 300;font-size: 14px;}.member_team{display: flex;flex-direction: column;align-items: center;padding: 0px 0px 49px;}.photo{margin: 0 auto;padding: 19px 19px;overflow: hidden;}.photo_border{margin: 0 auto; padding: 19px 19px; overflow: hidden; border-radius: 50%; border: solid 11px #6bb173;}.personPhoto {width: 100%;height: auto;margin: 0 auto;}</style><style media='(min-width: 600px)'>h2{padding: 60px 0px 0px;width: 100%;font-size: 36px;line-height: 54px;}.photo.photo_member{width: 90%; padding: 19px}.personPhoto{width: 100%;height: auto;margin: 0 auto;}.wrapper {margin: 0px 0px 93px;display: flex;align-items: center;justify-content: space-between;}.title {width: 50%;}.story {order: 1;}.wrapper_story {align-items: stretch;}.wrapper_team{display: flex; justify-content: space-between;}.photo_story{width: 45%;}</style><body><div style='display: flex; flex-direction: column; padding: 30px 15px 49px; font-family: Lexend, sans-serif;'><picture style='max-width:100%; display: flex'><source srcset='https://res.cloudinary.com/danbeavers/image/upload/v1654802707/image1_lppbar.png' media='(min-width: 600px)'><img style='max-width:100%; flex-grow: 1;' src='https://res.cloudinary.com/danbeavers/image/upload/v1654802694/image1_mob_owr3n4.jpg' alt='AboutUS'></picture><div><div class='wrapper'><div class='title'><h2>Seedra helps to grow fast and efficiant</h2><p>SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional instructions created by PhD Helga George</p><p>Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings. Your easy growing experience is our guarantee. Spinach commom culinary uses: salads, soups, smoothies, lasagne, pizza, pies, risotto, and more</p><p> Proudly sourced in the USA - our garden seeds are grown, harvested, and packaged in the USA. Wesupport local farmers and are happy to produce this American-made product</p></div><div class='photo photo_border' style='margin: 0 auto; padding: 19px 19px; overflow: hidden; border-radius: 50%; border: solid 11px #6bb173;'><img class='personPhoto' src='https://res.cloudinary.com/danbeavers/image/upload/v1654802721/image3_v52vj7.jpg' alt='HelgaGeorge'></div></div><div class='wrapper wrapper_story'><div class='title story'><h2>Our story</h2><p>SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional instructions created by PhD Helga George</p><p> Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings. Your easy growing experience is our guarantee. Spinach commom culinary uses: salads, soups, smoothies, lasagne, pizza, pies, risotto, and more</p><p> Proudly sourced in the USA - our garden seeds are grown, harvested, and packaged in the USA. We support local farmers and are happy to produce this American-made product</p></div><div class='photo_story'><img style='width: 100%;' src='https://res.cloudinary.com/danbeavers/image/upload/v1654802729/image4_txqpfu.jpg' alt='OurStory'></div></div><h2 class='title_team'>Meet our team</h2><div class='wrapper_team'><div class='member_team'><div class='photo  photo_member'><img class='personPhoto' src='https://res.cloudinary.com/danbeavers/image/upload/v1654802736/image5_sadoml.jpg' alt='LeslieAlexander'></div><h3>Leslie Alexander</h3><span>Nursing Assistant</span></div><div class='member_team'><div class='photo  photo_member'><img class='personPhoto' src='https://res.cloudinary.com/danbeavers/image/upload/v1654802743/image6_k5wvvl.jpg' alt='RobertFox'></div><h3>Robert Fox</h3><span>Dog Trainer</span></div><div class='member_team'><div class='photo  photo_member'><img class='personPhoto' src='https://res.cloudinary.com/danbeavers/image/upload/v1654802749/image7_nggval.jpg' alt='FloydMiles'></div><h3>Floyd Miles</h3><span>Web Designer</span></div><div class='member_team'><div class='photo photo_member'><img class='personPhoto' src='https://res.cloudinary.com/danbeavers/image/upload/v1654802757/image8_looncn.jpg' alt='WadeWarren'></div><h3>Wade Warren</h3><span>Medical Assistant</span></div></div></div></body>"

 }

  
  return (
    loading ? (
    <div>
      {/* <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridRowGap: "1em",
          gridColumnGap: "1em",
          gridAutoColumns: "min-content",
        }}
      >
        {parse(
          `<img src=${customId.images[0]} alt="" style="max-width:100%; height:auto"></img>
          <img src=${customId.images[1]} alt="" style="max-width:100%; height:auto"></img>
          <img src=${customId.images[2]} alt="" style="max-width:100%; height:auto"></img>
          <img src=${customId.images[3]} alt="" style="max-width:100%; height:auto"></img>`
        )}
      </Box>
      {parse(customId.htmlContent)} */}
      {parse(testHtml.html)}
    </div>

    )
    :
    <Preloader />
        

  );
};

StaticPage.propTypes = {
  page: PropTypes.string,
};

export default StaticPage;

