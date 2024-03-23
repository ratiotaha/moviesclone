import React from "react";
import Link from "next/link";

export default function Menu({ title, address, Icon }) {
  return (
    <Link href={address} className="hover:text-green-500">
      <Icon className="text-2xl sm:hidden" />
      <p className="uppercase hidden sm:inline text-sm"> {title}</p>
    </Link>
  );
}
