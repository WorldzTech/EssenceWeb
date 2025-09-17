"use client"

import SpinningStar from "@/components/ui/icons/animated/SpinningStar";
import Cubo from "@/components/ui/icons/vector/cubo";
import {useEffect, useRef} from "react";
import { gsap } from "gsap";


export default function LeftSideHeroSectionBlock() {

    const cuboRef = useRef(null)
    const bgRef = useRef(null)

    useEffect(() => {
        if (cuboRef.current) {
            gsap.to(cuboRef.current, {
                y: -20,             // поднимаем на 20px
                duration: 2,        // 2 секунды на подъем
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
        <div className="absolute start-0 top-1/2">
            <div className="relative h-96 bg-[#F6F4EE] aspect-square rounded-4xl rotate-45" ref={bgRef}>
              <SpinningStar className="absolute left-1/2 top-full -translate-x-1/2 mt-10" size={50} duration={6}/>
              <SpinningStar className="absolute left-1/2 bottom-full -translate-x-1/2 mt-10 rotate-45" size={150} duration={25} direction={-1}/>
              <Cubo ref={cuboRef} className={'absolute -rotate-45 scale-x-[-1] translate-x-1/2'} size={300} />
            </div>
          </div>
    )
}