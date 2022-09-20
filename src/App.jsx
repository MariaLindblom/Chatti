import { useSigninCheck } from "reactfire";
import Channel from "./components/Channel";
import SignInOutButton from "./components/SignInOutButton";
import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Appbar from "./components/Appbar";

export default function App() {
  const { status, data: signInCheckResult } = useSigninCheck();

  if (status === "loading") {
    return <CircularProgress />;
  }

  return (
    <>
      <Appbar />
      
      {signInCheckResult.signedIn && <Channel />}
    </>
  );
}
