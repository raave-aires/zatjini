import { Button, Heading, Html, Tailwind, Text } from "@react-email/components";
import { VerificationEmail } from "./verify-email";


export default function Email() {
  return (
   <VerificationEmail name="Raave" email="zatjini@raavius.com" verifyUrl="zatjini.org/0001"/>
  );
}