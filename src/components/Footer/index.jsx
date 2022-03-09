import React from "react"
import { Link } from "@mui/material";
import '../Assets/styles/index.scss';
import img from '../Assets/img/footer.png';
import { Container } from "@mui/material";
import { Box } from "@mui/system";

const Footer = () => {
    return(
    <Box>
        <div className="footer2">
            <div className="imgfooter">     
                       
                <Link href="https://github.com/Nicoclos/immocoin_back"><h2>@GitHub Back</h2></Link>
                <h2>-Copyright @ImmoCoin-</h2>
                <Link href="https://github.com/Nicoclos/immocoin_front"><h2>@GitHub Front</h2></Link>
            </div>
            
            <div className="footer">  
                <img src={img}>
                    
                    </img>
            </div>
        </div>
    </Box>
    
    )
};

export default Footer 