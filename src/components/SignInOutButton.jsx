import { useAuth, useSigninCheck } from "reactfire";
import { signInWithGoogle, signOut } from "../utils/firebase/auth";
import Button from '@mui/material/Button';

export default function SignInOutButton({color}) {
  const { data: signInCheckResult } = useSigninCheck();
  const auth = useAuth();

  return signInCheckResult.signedIn ? (
    <Button variant="outlined" color={color} onClick={() => signOut(auth)}>Sign out</Button>
  ) : (
    <Button variant="outlined" color={color} onClick={() => signInWithGoogle(auth)}>Sign in with Google</Button>
  );
}
