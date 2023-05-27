import React from "react";
import {useParams} from "react-router-dom";

function Home() {
    // 👇️ get ID from url
//     const params = useParams();
//     const id = params.id.split('-').slice(-1).pop();
//     window.location.href = "http://likeshowbiz.com/?p=" + id;


//     return <div/>;
    
    var referrer = document.referrer;
         console.log(referrer);
    return 
        <div class="wrapper">
          <div class="content"> Some Content </div>
        </div>
      
}

export default Home;
