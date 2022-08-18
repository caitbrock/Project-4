import React, { useEffect, useState } from "react";
import Images from "../Images/Images";
import DeletableChips from "../DeletableChips/DeletableChips";

function Feed(props) {
  const [posts, setPosts] = useState(false);

  useEffect(() => {
    async function fetchData() {
      let data = await fetch("/api/posts");
      console.log(data);
      let postData = await data.json();
      setPosts(postData);
    }
    fetchData();
  }, []);

  return (
    <>
      <DeletableChips user={props.user} />
      <div className="inpsoimages">
        {posts.map((c) => (
          <Images title={c.title} destination={c.destination} />
        ))}
      </div>
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
