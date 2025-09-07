import Image from "next/image"; 
import yue0 from "./0.png"
import yue1 from "./1.png"
import yue2 from "./2.png"
export default function home() {
  return (
    <div>
      <Image src={yue0} alt="0" />
      <Image src={yue1} alt="1" />
      <Image src={yue2} alt="2" />
    </div>
  )
}