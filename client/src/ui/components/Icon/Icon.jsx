import {SvgIcon} from "@mui/material";
import bundles from "./icons/bundles.svg";
import curlyLeaf from "./icons/curly-leaf.svg";
import flower from "./icons/flower.svg";
import leaf from "./icons/leaf.svg";
import strawberry from "./icons/strawberry.svg";
import supplies from "./icons/supplies.svg";
import tomato from "./icons/tomato.svg"

const Icon = (props) => {

    const {icon, ...other} = props;
 
    return (
        <SvgIcon {...other}>
            <use xlinkHref={`#${icon.id}`}/>
        </SvgIcon>
    )
}

Icon.icons = {
    bundles,
    curlyLeaf,
    flower,
    leaf,
    strawberry,
    supplies,
    tomato,
}
export default Icon;