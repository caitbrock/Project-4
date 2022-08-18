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
          // const postsList = post.map((post) => post.title, post.destination);
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

//store mongoose url use a base s3 url, after that it is slash

// class Feed extends React.Component {
//   state = {
//     user: null,
//     currentTab: 1,
//   };

//   fetchData = async () => {
//     const dataFetch = await fetch("api/posts");
//     const stringData = await dataFetch.json;
//     console.log(stringData);
//   };

//   fetchData()

//   render() {
// <Images />
// <Images />
// <Images />

// {posts.map((c) => (
//   <Images title={c.title} destination={c.destination} />
// ))}
