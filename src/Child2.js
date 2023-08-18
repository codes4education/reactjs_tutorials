import React from "react";
import { MyContext, MyContextNew } from "./App";

export default function Child2() {
  // const sharedData = useContext(MyContext);
  // console.log(sharedData);
  return (
    <>
      <h3>Child2 Component</h3>

      <MyContext.Consumer>
        {(sharedData) => {
          return (
            <MyContextNew.Consumer>
              {(sharedDataNew) => {
                return (
                  <p>
                    {sharedData} = {sharedDataNew}
                  </p>
                );
              }}
            </MyContextNew.Consumer>
          );
        }}
      </MyContext.Consumer>
    </>
  );
}
