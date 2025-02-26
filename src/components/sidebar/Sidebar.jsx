import "./sidebar.scss";
import Links from "./links/Links";
import ToggleButton from "./toggleButton/ToggleButton";
import { useState } from "react";


const Sidebar = () => {

    const [open, setOpen] = useState(false);

    return(
        <div className="sidebar">
            <div className="bg">
                <Links/>
            </div>
            <ToggleButton/>
        </div>
    )
}

export default Sidebar;