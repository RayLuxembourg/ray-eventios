import React from "react";
import { Headline, Button } from "../";

const ErrorPage = ({ error, history }) => {
  const refresh = () => {
    history.push("/");
  };
  if (error === "not found") {
    return (
      <div>
        <Headline
          title={"Something went wrong."}
          subtitle={`Seems like Darth Vader just hits our website and drops it down.
    Please press the refresh button and everything should be fine again.`}
        />
        <Button onClick={refresh} color={"dark"} content={"REFRESH"} />
      </div>
    );
  }

  return (
    <div>
      <Headline
        title={"404 Error - page not found."}
        subtitle={`Seems like Darth Vader just hits our website and drops it down.
                        Please press the refresh button and everything should be fine again.`}
      />
      <Button onClick={refresh} color={"dark"} content={"REFRESH"} />
    </div>
  );
};

export default ErrorPage;
