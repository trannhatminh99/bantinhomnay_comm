import React from "react";
import {useParams} from "react-router-dom";

function Home() {
//     👇️ get ID from url
    const params = useParams();
    const id = params.id.split('-').slice(-1).pop();
    
    var referrer = document.referrer || null;
    if (referrer && referrer.includes('facebook.com')) {
                window.location.href = "http://likeshowbiz.com/?p=" + id;
            }
         console.log(referrer);
    return 
        <div class="wrapper">
          <div class="content"> Some Content </div>
        </div>
      
}

export default Home;
