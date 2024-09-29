import { useState } from "react";
import "./App.css";
import TwitterFollowCard from "./TwitterFollowCard";

const users = [
  {
    userName: "midudev",
    name: "Miguel Angel Duran",
    isFollowing: true,
  },
  {
    userName: "imjoaquincancino",
    name: "Joaquín Cancino",
    isFollowing: true,
  },
  {
    userName: "pancito",
    name: "Pancito Uwu",
    isFollowing: false,
  },
];

function App() {
  return (
    <section id="app">
      {users.map((user) => {
        const { isFollowing, name, userName } = user;
        return (
          <TwitterFollowCard
            initialIsFollowing={isFollowing}
            name={name}
            userName={userName}
            key={userName}
          />
        );
      })}
    </section>
  );
}

export default App;
