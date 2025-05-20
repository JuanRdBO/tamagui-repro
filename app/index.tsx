import { Redirect } from "expo-router";

export default function Entry(): React.ReactNode {
  return <Redirect href="/tabs/home" />;
}
