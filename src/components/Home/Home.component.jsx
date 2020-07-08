import React from "react";
import { connect } from "react-redux";
import HomePage from "../HomePage/HomePage";
import styled from 'styled-components'
const Home = ({ currentUser }) => {
  return (
    <div className="home">
      {currentUser && currentUser ? (
        <HomePage />
      ) : (
        <>
        <Welcome>
          <h1 className="heading" >Welcome page</h1>
          <p className="para">You are logged out, please sign in.</p>
        </Welcome>
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.auth.currentUser,
});

export default connect(mapStateToProps)(Home);

const Welcome = styled.div`
margin-top:100px;
.heading{
 font-size:50px;
 color:green; 
}
.para{
  font-size:30px;
 color:blue;
}
`;