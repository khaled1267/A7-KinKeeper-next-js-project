import { IoMdTimer } from "react-icons/io";

import Home from "@/app/page";
import { CgLock } from "react-icons/cg";
import { FiBarChart2 } from "react-icons/fi";
import { IoHomeOutline } from "react-icons/io5";
import { ImStatsDots } from "react-icons/im";
import Mylink from "./Mylink";

const Navbar = () => {
  const navItems = [
    { path: "/", text: "Home", icon: <IoHomeOutline size={18} /> },
    { path: "/timeline", text: "Timeline", icon: <IoMdTimer size={18} /> },
    { path: "/starts", text: "Stats", icon: <ImStatsDots size={18} /> },
  ];

  return (
    <nav className="shadow">
      <div className="flex justify-between px-15 gap-4 items-center py-[17px] container mx-auto">
        <h1 className="font-bold text-2xl">
          Keen <span className="font-medium text-2xl text-[#244D3F]">Keeper</span>
        </h1>

        <ul className="flex justify-between gap-6 items-center">
          {navItems.map((item, index) => (
            <li key={index}>
              {/* Next.js এ 'to' এর বদলে 'href' হবে */}
              <Mylink href={item.path}>
                <div className="  px-3 py-2 rounded flex items-center gap-2">
                  <div className="">{item.icon}</div>
                  {item.text}
                </div>
              </Mylink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
