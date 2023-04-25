import { MdOutlineVerified, MdVerified } from "react-icons/md";

export function UserInfo({ imglink }: { imglink: string }) {
  return (
    <div className="css-wpyvqd">
      <div className="css-12pdu1u">
        <img className="css-ze1kp1" src={imglink} />
      </div>
      <div className="css-1fe9f2b">
        <MdVerified className="verified-icon" />
      </div>
    </div>
  );
}
