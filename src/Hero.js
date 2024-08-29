import { useState } from "react";
import axios from "axios";

function Hero() {
  const [searchQuery, setSearchQuery] = useState("");

  async function handleSearchQuery() {
    try {
      const res = await axios({
        method: "GET",
        url: `https://helpcenter-55u7.onrender.com/api/cards/${searchQuery}`,
      });
      console.log(res);
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <section className="hero">
      <div>
        <h1>How can we help?</h1>
        <div className="input-container">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="search-icon"
            onClick={handleSearchQuery}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}

export default Hero;
