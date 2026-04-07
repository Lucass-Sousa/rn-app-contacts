import { Redirect } from "expo-router";
import { useAuth } from "../context/auth";

export default function Index() {
  const { isSignedIn } = useAuth();
  
  if (isSignedIn) {
    return <Redirect href="/protected" />;
  }
  
  return <Redirect href="/auth/login" />;
}
