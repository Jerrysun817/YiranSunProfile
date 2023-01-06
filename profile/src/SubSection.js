import React from "react";
import Experience from "./Experience";
import data from "./data.json";
import "./SubSection.css";

function SubSection() {
    
    return (
        <div>
            {
                data.map((item) => {
                    return (
                        <Experience 
                            name={item.name}
                            role = {item.role}
                            location = {item.location}
                            website = {item.website}/>
                    )
                })
            }
        </div>
    )
}

export default SubSection;