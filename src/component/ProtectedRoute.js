import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";

function ProtectedRoute({ component: Component, auth, ...rest }) {
  if (!auth.isLoaded) {
    return null;
  }

  if (!auth.isEmpty) {
    return (
      <Route
        {...rest}
        render={(props) => {
          return <Component {...props} />;
        }}
      />
    );
  }

  return (
    <Route
      {...rest}
      render={(props) => {
        return <Redirect to={{ pathname: "/login" }} />;
      }}
    />
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebaseReducer.auth,
  };
};

export default connect(mapStateToProps)(ProtectedRoute);
