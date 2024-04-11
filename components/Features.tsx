import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import Button from './Button'

const Features = () => {
  return (
    <section id='kontakt' className="flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-16">
      <div className="max-container padding-container relative w-full flex justify-end">
        <div className="flex flex-1 lg:min-h-[900px]">
          <Image
            src="/phone-vikendica.png"
            alt="phone vikendica"
            width={440}
            height={1000}
            className="feature-phone"
          />
        </div>

        <div className="z-20 flex w-full flex-col lg:w-[60%]">
          
          <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
          <h2 className="bold-32 lg:bold-40 xl:max-w-[420px]">Kontaktirajte nas</h2>
          <p className="bold-20 text-green-70 backdrop-blur-lg">Za više informacija i rezervaciju, molimo vas da kontaktirate vlasnika vikendice na broj telefona 065/688-948.</p>
          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
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
        </div>
      </div>
    </section>
  )
}

type FeatureItem = {
  title: string;
  icon: string;
  description: string;
}

const FeatureItem = ({ title, icon, description }: FeatureItem) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start">
      <div className="rounded-full p-4 lg:p-7 bg-green-50">
        <Image src={icon} alt="map" width={28} height={28} />
      </div>
      <h2 className="bold-20 lg:bold-32 mt-5 capitalize">
        {title}
      </h2>
      <p className="regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none">
        {description}
      </p>
    </li>
  )
}

export default Features