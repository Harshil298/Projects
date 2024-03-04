import styled from "styled-components";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";
import { useState } from "react";
import { Button } from "../styled/Button";
import Rules from "./Rules";

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectNumbers, setSelectNumbers] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {
    if (!selectNumbers) {
      setError("You have not selected any number");
      return;
    }
   
    const randomNumber = generateRandomNumber(1, 7);

    setCurrentDice((pre) => randomNumber);

    if (selectNumbers === randomNumber) {
      setScore((pre) => pre + randomNumber);
    } else {
      setScore((pre) => pre - 2);
    }

    setSelectNumbers(undefined);
  };

  const resetScore = () => {
    setScore(0);
  }

  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score} />
        <NumberSelector
          error={error}
          setError= {setError}
          setSelectNumbers={setSelectNumbers}
          selectNumbers={selectNumbers}
        />
      </div>
      <RollDice currentDice={currentDice} roleDice={roleDice} />

      <div className="btns">
        <Button onClick={resetScore} className="reset">Reset</Button>
        <Button onClick={() => setShowRules((pre) => !pre)} className="rules">{showRules ? "Hide" : "Show"}Rules</Button>
      </div>

      {showRules && <Rules />}
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.main`
  padding-top: 15px;
  margin: 0 50px;
  .top_section {
    display: flex;
    justify-content: space-between;
    align-items: end;
  }

  .btns{
    display:flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    align-items: center;

    .reset{
      background-color: white;
      color: black;
      border: 1px solid black;

      &:hover{
        background-color: black;
        color: white;
        border: 1px solid transparent;
      }
    }

    .rules{
      &:hover{
        background-color: white;
        color: black;
        border: 1px solid black;
      }
    }
  }
`;
