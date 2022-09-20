import { useSigninCheck } from "reactfire";
import Channel from "./components/Channel";
import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Ylapalkki from "./components/Ylapalkki";
import Alapalkki from "./components/Alapalkki";

export default function App() {
  const { status, data: signInCheckResult } = useSigninCheck();

  if (status === "loading") {
    return <CircularProgress />;
  }

  return (
    <>
      <Ylapalkki />
      {signInCheckResult.signedIn && <Channel />}
      <Alapalkki />
    </>
  );
}
