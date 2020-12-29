import axios from "axios";

const LandingPage = ({ color }) => {
  console.log("iam on componenent", color);
  return <h1>Landing page</h1>;
};

LandingPage.getInitialProps = async () => {
  const response = axios.get("/api/users/currentuser");
  return { color: "red" };
};
export default LandingPage;
