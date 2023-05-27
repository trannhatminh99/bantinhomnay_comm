import React from "react";
import {useParams} from "react-router-dom";
import MetaTags from 'react-meta-tags';


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
        <div className="wrapper">
          <MetaTags>
            <title>Page 1</title>
            <meta name="description" content="Some description." />
            <meta property="og:title" content="MyApp" />
            <meta property="og:image" content="https://likeshowbiz.net/wp-content/uploads/2023/05/t5-1479115814974.jpg" />
          </MetaTags>
          <div className="content"> Some Content </div>
        </div>
     
      
}

export default Home;
