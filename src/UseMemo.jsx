import React from "react";
import { useMemo } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { Button } from "react-bootstrap";

function UseMemo() {
  const [number, setNumber] = React.useState(1);
  const [inc, setInc] = React.useState(0);
  const present = useRef(1);

  useEffect(() => {
    present.current = present.current + 1;
  });

//   const sqrt = getSqrt(number);
  const sqrt = useMemo(()=>getSqrt(number),[number]);

  const Onclick = () => {
    setInc((preState) => {
        console.log(preState);
      return preState + 1;
    });
  };

  function getSqrt(n) {
    for (let i = 0; i <= 10000; i++) {
        console.log(i);
    }
    return Math.sqrt(n);
  }
  return (
    <div className="body">
      <input
        type="number"
        name=""
        id=""
        value={number}
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      />
      <div>the number is {number} and sqrt is {sqrt}</div>
      <Button onClick={Onclick}>Click here</Button>
      <h1>Renders : {present.current}</h1>
    </div>
  );
}

export default UseMemo;
