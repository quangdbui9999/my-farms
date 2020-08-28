import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";

const CropsPage = () => (
  <div>
    <h1>CROPS PAGE</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/crops" component={CropsPage} />
      </Switch>
    </div>
  );
}

export default App;

/*
const Home = (props) => {
  console.log(props);
  return (
    <div>
      <button onClick={() => props.history.push("/topics")}>Topics</button>
      <h1>Home Page</h1>
    </div>
  );
};

const TopicList = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Topic List Page</h1>
      <Link to={`${props.match.url}/13`}>To topic 13</Link>
      <Link to={`${props.match.url}/17`}>To topic 17</Link>
      <Link to={`${props.match.url}/21`}>To topic 21</Link>
    </div>
  );
};

const TopicDetail = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Topic Detail Page: {props.match.params.topicId}</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/asd/xcv/topics" component={TopicList} />
      <Route path="/asd/xcv/topics/:topicId" component={TopicDetail} />
      <Route exact path="/asd/topics" component={TopicList} />
      <Route path="/asd/topics/:topicId" component={TopicDetail} />
    </div>
  );
}




const CropsPage = () => (
  <div>
    <h1>CROPS PAGE</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/crops" component={CropsPage} />
      </Switch>
    </div>
  );
}
*/
