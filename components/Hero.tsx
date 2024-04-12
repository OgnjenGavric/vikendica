import Image from 'next/image'
import Button from './Button'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-10 md:gap-28 lg:py-20 xl:flex-row">

      <div className="hero-map" />

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        
        <h1 className="bold-40 lg:bold-88 text-green-70">Vikendica <em className=' text-green-30'>"M&L"</em> na Sani, Prijedor</h1>
        
        <p className="regular-20 mt-6 text-green-70 xl:max-w-[650px]">
          Vikendica "M&L" nudi idiličan odmor na obali rijeke Sane u Gaćanima, nedaleko od Prijedora. Savršena je za opuštanje u prirodi i uživanje u miru i tišini. Vikendica je opremljena za boravak do 4 osobe i nudi sve što vam je potrebno za udoban boravak. 
        </p>

        <Link 
          href="https://maps.app.goo.gl/pCWgJxXjiodRRmWn9" 
          target='_blank'
          className="my-11 flex flex-col flex-wrap gap-5"
        >
          <div className="flex items-center gap-2">
            {Array(5).fill(1).map((_, index) => (
              <Image 
                src="/star.svg"
                key={index}
                alt="star"
                width={24}
                height={24}
              />
            ))}
          </div>
          <p className="bold-16 lg:bold-20 text-green-70">
            2.8k<span className="regular-16 lg:regular-20 ml-1">odličnih komentara</span>
          </p>
        </Link>

        <div className="flex flex-col w-full gap-3">
          <Link href="tel:+38765688948">
            <Button 
                type="button" 
                title="DIREKTAN POZIV" 
                icon="/phone.svg"
                variant="btn_green" 
                full
              />
          </Link>
          <Link href="viber://chat/?number=%2B8765688948">
            <Button 
                type="button"
                title="VIBER"
                icon="/viber.svg"
                variant="btn_dark_green"
                full
              />
          </Link>
        </div>
        
      </div>

      <div className="relative flex flex-col items-center gap-7 justify-center">
      
        <div className="relative z-20 flex">
          <Image 
            src="/logo-ml.png"
            alt="camp"
            width={200}
            height={200}
            className="w-200 lg:w-[280px] z-40"
          />
        </div>
        <Link href="https://maps.app.goo.gl/pCWgJxXjiodRRmWn9" target='_blank' className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl px-7 py-8 bg-green-950">
           <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-gray-20">Lokacija</p>
              <Image src="/map.svg" alt="Map" width={24} height={24} />
            </div>
            <p className="bold-20 text-white">Gaćani, Prijedor</p>
          </div>

          <div className="flexBetween">
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Udaljenost</p>
              <p className="bold-20 text-white">6.4 km</p>
            </div>
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Prosječni protok</p>
              <p className="bold-20 text-white">68,7 m3/s</p>
            </div>
          </div>
        </Link>
      </div>
    </section>
  )
}

export default Hero