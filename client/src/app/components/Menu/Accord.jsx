import { AccordionDetails, Link } from "@mui/material";

const Accord = (props) => {

    const { cater} = props;

  return (
      
    <>
       <AccordionDetails>
       <Link href="#" underline="none">{cater}</Link>
       </AccordionDetails>
     </>
    
  );
};

export default Accord;