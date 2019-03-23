import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class Content extends Component {
  render() {
    return (
      <div className="container">
        <div className="page-header">
          <h1 className="page-header-text">Content</h1>
        </div>
        <div class="services-training-videos top-section">
          <h1 className="title">Videos</h1>
          <div class="img__description_layer">
          <div className="training-descriptions">
            <div className="training">
              <h1 className="training-header">Videos</h1>
              <div className="ul-training1">
                <p className="training-text-centered">We feature free videos with swimmer relevant exercises in fun ways. This is our way of bringing you the latest research in innovative ways – enjoy.</p>
                <iframe className="mobile-video-page-video" title="ss1" width="555" height="312" src="https://www.youtube.com/embed/YKiZkgINMak" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <div className="training-descriptions">
                  <div className="az-training-button3">
                    <Link to="/videos" className="training-link-text3">See More Videos</Link>
                  </div>
                </div>
              </div>
            </div>
            <iframe className="video-page-video" title="ss1" width="555" height="312" src="https://www.youtube.com/embed/YKiZkgINMak" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          </div>
        </div>
        <div class="services-training-3">
           <h1 className="title">Blog</h1>
           <div class="img__description_layer">
             <div className="training-blog">
               <h1 className="training-header">Blog</h1>
               <div className="ul-training1">
                 <p className="training-text-centered">We feature free videos with swimmer relevant exercises in fun ways. This is our way of bringing you the latest research in innovative ways – enjoy.</p>
                 <div className="training-descriptions">
                   <div className="az-training-button3">
                     <Link to="/blog" className="training-link-text3">Blog</Link>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
      </div>
    );
  }
}

export default Content;
