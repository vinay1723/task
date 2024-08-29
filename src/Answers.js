import { useEffect, useState } from "react";
import axios from "axios";
import Answer from "./Answer";

function Answers() {
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    async function fetchdata() {
      try {
        const res = await axios({
          method: "GET",
          url: `https://helpcenter-55u7.onrender.com/api/v1/cards`,
        });

        setAnswers(res.data.data.allDocs ? res.data.data.allDocs : []);
      } catch (error) {
        console.log(error.message);
      }
    }

    fetchdata();
  }, []);

  return (
    <div className="Answers">
      <div className="answers">
        {answers &&
          answers.map((card) => <Answer key={card._id} card={card} />)}
      </div>
    </div>
  );
}

export default Answers;
