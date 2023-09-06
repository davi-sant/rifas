import { BannerLogin, Content, FormLogin } from "@/components/layouts";
import Image from "next/image";

export default function Home() {
  return (
    <Content>
      <BannerLogin />
      <FormLogin />
    </Content>
  )
}