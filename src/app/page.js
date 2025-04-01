import Image from "next/image";
import PrimaryButton from "./components/header/PrimaryButton";
import SignUpForm from "./components/header/SignupForm";
import { HiOutlineUserGroup } from "react-icons/hi";


export default function Home() {
  return (
    <div>
<HiOutlineUserGroup size={50} strokeWidth={1} />
      <SignUpForm />
      <PrimaryButton />
    </div>
  );
}
