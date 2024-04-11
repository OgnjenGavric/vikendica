import Image from 'next/image'
import React from 'react'

const Guide = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24">
        <Image src="/logo-ml.svg" alt="Logo M&L" width={50} height={50} />
        <p className="uppercase regular-18 -mt-1 mb-3 text-green-50">
          MI SMO TU ZA VAS
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-8">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[650px] text-green-70">Dodatne napomene</h2>
          <p className='regular-20 xl:max-w-[650px]'>Vikendica "M&L" idealno je mjesto za ribolov, kupanje, šetnju u prirodi ili jednostavno opuštanje uz dobru knjigu. U blizini se nalaze i mnoge druge atrakcije, kao što su Nacionalni park Kozara i manastir Gomionica.</p>
          <div>
            <div className="regular-20 text-green-70 xl:max-w-[620px] py-3 flex gap-2">
             <Image src="/right.svg" alt="camp" width={10} height={10} />
             <span>Cijena iznajmljivanja varira zavisno o terminu i broju osoba.</span>
            </div>
            <div className="regular-20 text-green-70 xl:max-w-[620px] py-3 flex gap-2">
              <Image src="/right.svg" alt="camp" width={10} height={10} />
              <span>Zabranjeno je održavanje grupnih veselja.</span>
            </div>
            <div className="regular-20 text-green-70 xl:max-w-[620px] py-3 flex gap-2">
              <Image src="/right.svg" alt="camp" width={10} height={10} />
              <span>Vikendica se izdaje u periodu od maja do oktobra.</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flexCenter max-container relative w-full">
        <Image 
          src="/boat.png"
          alt="boat"
          width={1440}
          height={580}
          className="w-full object-cover object-center 2xl:rounded-5xl h-[450px] lg:h-[550px] xl:h-[650px]"
        />

        <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
          <Image 
            src="/meter.svg"
            alt="meter"
            width={16}
            height={158}
            className="h-full w-auto"
          />
          <div className="flexBetween flex-col">
            <div className='flex w-full flex-col'>
              <div className="flexBetween w-full">
                <p className="regular-16 text-gray-20">Udaljenost</p>
                <p className="bold-16 text-green-50">18 min</p>
              </div>
              <p className="bold-20 mt-2">Prijedor Centar</p>
            </div>

            <div className='flex w-full flex-col'>
              <p className="regular-16 text-gray-20">Start</p>
              <h4 className="bold-20 mt-2 whitespace-nowrap">Vikendica "M&L"</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Guide