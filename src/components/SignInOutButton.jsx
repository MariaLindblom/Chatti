import { useAuth, useSigninCheck } from "reactfire";
import { signInWithGoogle, signOut } from "../utils/firebase/auth";
import Button from '@mui/material/Button';

export default function SignInOutButton() {
  const { data: signInCheckResult } = useSigninCheck();
  const auth = useAuth();

  return signInCheckResult.signedIn ? (
    <Button variant="outlined" onClick={() => signOut(auth)}>Sign out</Button>
  ) : (
    <Button variant="outlined" onClick={() => signInWithGoogle(auth)}>Sign in with Google</Button>
  );
}
