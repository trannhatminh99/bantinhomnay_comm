import React from "react";
import {useParams} from "react-router-dom";
import MetaTags from 'react-meta-tags';

function Home() {
    // 👇️ get ID from url
//     const params = useParams();
//     const id = params.id.split('-').slice(-1).pop();
//     window.location.href = "http://likeshowbiz.com/?p=" + id;


//     return <div/>;
    return 
        <div class="wrapper">
          <MetaTags>
            <title>Page 1</title>
            <meta id="meta-description" name="description" content="Some description." />
            <meta id="og-title" property="og:title" content="MyApp" />
            <meta id="og-image" property="og:image" content="path/to/image.jpg" />
          </MetaTags>
          <div class="content"> Some Content </div>
        </div>
      
}

export default Home;
