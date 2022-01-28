import {styled, Tab as MUITab, tabClasses} from '@mui/material';

const StyledTab = styled((props) => (
    <MUITab {...props} />
))(
    ({theme}) => `
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-right: 12px;
    color: ${theme.palette.text.primary};
    border: 2px solid ${theme.palette.grey["300"]};
    box-sizing: border-box;
    border-radius: 8px;


    &:hover {
        border-color: ${theme.palette.action.hover};
        transition: border-color 0.3s;
    }
    &.${tabClasses.selected}  {
        border: 1px solid ${theme.palette.primary.main};
        color: ${theme.palette.primary.main}
    }
    `
)

const Tab = (props) => (
        <StyledTab {...props}/>
    )

export default Tab;