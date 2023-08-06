import './globals.css'
import Components from "@/components";
import { GoHome } from "react-icons/go";
import { GoHomeFill } from "react-icons/go";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { MdOutlineFavorite } from "react-icons/md";

const { NavBar } = Components;

const navBarArgs = [
  {
    id: 1,
    title: "Home",
    url: "/post-feed",
    defaultIcon: <GoHome />,
    selectedIcon: <GoHomeFill />,
  },
  {
    id: 2,
    title: "Favorites",
    url: "/favorite-posts",
    defaultIcon: <MdOutlineFavoriteBorder />,
    selectedIcon: <MdOutlineFavorite />,
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>
          noon - Social Network
        </title>
      </head>
      <body>
        <NavBar navBarArgs={navBarArgs} />
        {children}
      </body>
    </html>
  )
}
