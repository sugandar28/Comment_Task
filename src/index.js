import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import ApporvalCard from "./ApprovalCard";

import CommmentDetails from "./CommmentDetails";

const App = () => {
  return (
    <div className="ui container comments">
      <ApporvalCard>
        <div>Are You sure Want to Accept....?</div>
      </ApporvalCard>

      <ApporvalCard>
        <CommmentDetails
          author="sugan"
          TimeAgo="Today at 2:00pm"
          comment="Nice Post"
          img={faker.image.avatar()}
        />
      </ApporvalCard>

      <ApporvalCard>
        <CommmentDetails
          author="poonam"
          TimeAgo="Today  at 8:00am"
          comment="Great Content Keep Going"
          img={faker.image.avatar()}
        />
      </ApporvalCard>
      <ApporvalCard>
        <CommmentDetails
          author="kamesh"
          TimeAgo="yesterday at 11:00pm"
          comment="Good work!"
          img={faker.image.avatar()}
        />
      </ApporvalCard>
      <ApporvalCard>
        <CommmentDetails
          author="kalpana"
          TimeAgo="yesterday at 7:00pm"
          comment="Super"
          img={faker.image.avatar()}
        />
      </ApporvalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
