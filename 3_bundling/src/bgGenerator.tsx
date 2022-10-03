import React from "react";
import { getBackground } from "./bgService";

export const BgGenerator = () => {
    const sizes: Object = {
        width: window.innerWidth,
        height: window.innerHeight
    }
    const bg:string = getBackground(sizes)
  
    React.useEffect(() => {
        document.body.style.backgroundImage = `url(${bg})`
    }, []);

    return (
        <div>
            <p>Image generated with Picsum <br /><small>Resolution based on client's window width and height</small></p>
        </div>
    );
};
