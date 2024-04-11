import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/" className='flex gap-1 justify-center items-center'>
        <Image src="/logo-ml.svg" alt="logo M&L" width={40} height={40} /> 
        <span className='bold-32 color-green-dark lg:bold-40'><em className='color-green-light'>M&L</em><small>vikendica</small></span>
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        <li>
          <Link href="/" className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
            Početna
          </Link>
        </li>
        <li>
        <Link href="/#galerija" className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
            Galerija
          </Link> 
        </li>
        <li>
        <Link href="/#kontakt" className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
            Kontakt
          </Link>
        </li>
      </ul>

      <div className="lg:flexCenter hidden">
        <Button 
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>

      <Image 
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  )
}

export default Navbar