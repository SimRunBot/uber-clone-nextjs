import tw from "tailwind-styled-components";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { auth, provider } from "../firebase";

const Login = () => {
  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push("/");
      }
    });
  }, []);
  return (
    <Wrapper>
      <UberLogo src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg" />
      <Title>Login to access your account</Title>
      <LoginImage src="https://i.ibb.co/CsV9RYZ/login-image.png" />
      <SignInButton onClick={() => signInWithPopup(auth, provider)}>
        Sign in with Google
      </SignInButton>
    </Wrapper>
  );
};

const Wrapper = tw.div`
  flex flex-col h-screen  p-4
`;

const Title = tw.div`
  text-5xl
  pt-4
  text-gray-500
`;

const SignInButton = tw.button`
bg-black text-white text-center py-4 mt-8 w-full
object-contain
`;
const UberLogo = tw.img`
  h-14
  w-auto
  object-contain
  self-start
`;

const LoginImage = tw.img`
object-contain
w-full
`;
export default Login;
