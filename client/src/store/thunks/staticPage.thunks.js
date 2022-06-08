import axios from "axios";
import {
    receivedHtmlStaticPage,
    requestedHtmlStaticPage,
    receivedFailureHtmlStaticPage,
    // RECEIVED_HTML_STATIC_PAGE,
    // REQUESTED_HTML_STATIC_PAGE,
    // RECEIVED_FAILURE_HTML_STATIC_PAGE
  } from "../actions/staticPage.actions";
  import { API } from "../../app/constants";



// export const  fetchStaticPage = function(page) {
//     return (dispatch, getState) => {
//       dispatch(requestedHtmlStaticPage(page));
      // axios("/staticPage.json")
     
      
export const fetchStaticPage =
  (page) =>
  (dispatch) => {
    dispatch(requestedHtmlStaticPage());
       axios
      .get(`${API}pages/${page}`)
        .then((res) => {
            console.log(res.data);
        //   throw new Error('received error!');
        // const customId = res.data.find(item => item.customId === "terms");
        // console.log(customId);
        // dispatch(receivedHtmlStaticPage(customId));
          setTimeout(() => {
            // dispatch(receivedHtmlStaticPage(customId));
            dispatch(receivedHtmlStaticPage(res.data));
          }, 1500);
          
        })
        .catch((err) => {
          console.log(err);
          dispatch(receivedFailureHtmlStaticPage(err.message));
        });
    };
  

 
//   receivedHtmlStaticPage = (items) => ({
//     type: RECEIVED_HTML_STATIC_PAGE,
//     payload: items,
//   });
  
//   requestedHtmlStaticPage = () => ({
//     type: REQUESTED_HTML_STATIC_PAGE,
//   });
  
//   receivedFailureHtmlStaticPage = (error) => ({
//     type: RECEIVED_FAILURE_HTML_STATIC_PAGE,
//     payload: {
//       error,
//     },
//   });