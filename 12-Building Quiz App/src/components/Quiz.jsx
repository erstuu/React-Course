import { useState } from "react";

export default function Quiz() {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [usersAnswers, setUsersAnswers] = useState([]);

  return <p>Currently ative question</p>;
}
