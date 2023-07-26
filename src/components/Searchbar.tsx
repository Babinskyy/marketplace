import SearchIcon from "@mui/icons-material/Search";

import '../App.scss';
const Searchbar = ():JSX.Element => {

    
    return (
        <div className="searchbar-container">
            
            <div className="icon-holder"></div><input type="search" name="search" placeholder="search" className="searchbar" />
        </div>
    )
}

export default Searchbar;