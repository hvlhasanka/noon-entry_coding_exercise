import './globals.css'
import { NavBar } from '@/components';
import { GoHome } from "react-icons/go";
import { GoHomeFill } from "react-icons/go";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { MdOutlineFavorite } from "react-icons/md";

const navBarArgs = [
  {
    id: 1,
    title: "Home",
    url: "/",
    defaultIcon: <GoHome />,
    selectedIcon: <GoHomeFill />,
  },
  {
    id: 2,
    title: "Liked",
    url: "/liked-posts",
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
