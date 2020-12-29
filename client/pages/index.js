import builClient from "../api/build-client";

const LandingPage = ({ currentUser }) => {
  return currentUser ? (
    <h1>You are singed in {currentUser.email}</h1>
  ) : (
    <h1>You are not singed in</h1>
  );
};

LandingPage.getInitialProps = async (context) => {
  const client = builClient(context);
  const { data } = await client.get("/api/users/currentuser");

  return data;
};
export default LandingPage;
