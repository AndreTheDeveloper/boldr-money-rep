import React, { Component } from "react";
import featured from "../Images/featured.png";

class FeaturedPost extends Component {
    render() {
      return (
        <>
        <div className = "featuredPost">
            <img src = {featured} alt ={'featured post'} />
        </div>
        </>
      );
    }
  }
  
  export default FeaturedPost;