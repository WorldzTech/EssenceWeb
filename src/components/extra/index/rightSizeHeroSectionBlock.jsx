"use client"

import SpinningStar from "@/components/ui/icons/animated/SpinningStar";
import Cubo from "@/components/ui/icons/vector/cubo";
import {useEffect, useRef} from "react";
import { gsap } from "gsap";
import Pilly from "@/components/ui/icons/vector/pilly";


export default function RightSideHeroSectionBlock() {

    const cuboRef = useRef(null)
    const bgRef = useRef(null)

    useEffect(() => {
        if (cuboRef.current) {
            gsap.to(cuboRef.current, {
                y: -20,             // поднимаем на 20px
                duration: 3,        // 2 секунды на подъем
                repeat: -1,         // бесконечно
                yoyo: true,         // опускаем обратно
                ease: "power1.inOut" // плавное движение
            })
        }

    }, [cuboRef])

    useEffect(() => {
        if (bgRef.current) {
            gsap.to(bgRef.current, {
                y: 20,             // поднимаем на 20px
                duration: 2,        // 2 секунды на подъем
                repeat: -1,         // бесконечно
                yoyo: true,         // опускаем обратно
                ease: "power1.inOut" // плавное движение
            })
        }

    }, [bgRef])

    return (
        <div className="absolute end-0 top-1/2">
            <div className="relative h-64 bg-[#F6F4EE] aspect-video rounded-full rotate-45" ref={bgRef}>
              <SpinningStar className="absolute top-0 start-1/2 z-50" size={75} duration={6}/>
              <SpinningStar className="absolute end-0 top-0 mt-10 translate-x-1/2 rotate-45 z-50" size={110} duration={25} direction={-1}/>
              <Pilly ref={cuboRef} className={'pointer-events-none absolute -rotate-45 scale-x-[-1] translate-x-1/2'} size={300} />
            </div>
          </div>
    )
}