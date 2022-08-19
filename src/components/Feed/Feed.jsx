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

  const handleBoard = async (e) => {
    e.preventDefault();
    try {
      let jwt = localStorage.getItem("token");
      let fetchResponse = await fetch("/api/boards", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + jwt,
        },
        body: JSON.stringify({
          board_name: "Board 1",
          Destinations: props.destination,
        }), // <-- send this object to server
      });
      let serverResponse = await fetchResponse.json(); // <-- decode fetch response
      console.log("Success:", serverResponse); // <-- log server response
      this.setState({ title: "", description: "", destination: "" }); // if order sent without errors, set state to empty
    } catch (err) {
      console.error("Error:", err); // <-- log if error
    }
  };

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
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            flexWrap: "wrap",
          }}
        >
          {posts.map((c) => (
            <Images
              title={c.title}
              destination={c.destination}
              handleBoard={handleBoard}
            />
          ))}
        </div>
      ) : (
        false
      )}
    </>
  );
}

export default Feed;
