import { SignUp } from "@clerk/nextjs";

export default function RegisterPage() {
  return (
    <SignUp
      path="/register"
      routing="path"
      signInUrl="/login"
      redirectUrl="/auth"
      afterSignUpUrl="/auth"
    />
  );
}
