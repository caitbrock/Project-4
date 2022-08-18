import React, { useEffect, useState } from "react";
import Images from "../Images/Images";
import header from "../../Header-IM.jpg";
import DeletableChips from "../DeletableChips/DeletableChips";

function Feed(props) {
  const [posts, setPosts] = useState(false);

  useEffect(() => {
    async function fetchData() {
      let data = await fetch("/api/posts")
        .then((response) => response.json())
        .then((posts) => {
          setPosts(posts);
        });
    }
    fetchData();
  }, []);

  console.log(posts);

  return (
    <>
      <div
        className="bannerheader"
        style={{ backgroundImage: `url(${header})` }}
      ></div>
      <DeletableChips user={props.user} updateInterest={props.updateInterest} />
      
      {posts ? (
        <div
          className="FeedImages"
          style={{ display: "flex", justifyContent: "center" }}
        >
          {posts.map((c) => (
            <Images title={c.title} destination={c.destination} />
          ))}
        </div>
      ) : (
        false
      )}
      
    </>
  );
}

export default Feed;

