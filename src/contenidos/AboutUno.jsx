import React, { useEffect, useRef } from 'react'
import HeroImage from "../assets/img/heroimage.png"

import { useInView, useMotionValue, useSpring } from 'framer-motion';

const AnimarNumeros =({value})=>{
const ref= useRef(null);

const motionValue = useMotionValue(0);
const springValue = useSpring(motionValue,{duration: 3000})
const isInView = useInView(ref);

useEffect(() => {
   if(isInView){
    motionValue.set(value);
   }
}, [isInView, value, motionValue])

useEffect(() => {
 springValue.on("change",(latest)=>{
  if(ref.current && latest.toFixed(0)<=value){
    ref.current.textContent =latest.toFixed(0);
  }
 })
}, [springValue, value])


  return <span ref = {ref}></span>
}
const AboutUno = () => {
  return (
    
    <div className='w-full items-center justify-center'>
        <div className='grid grid-cols-8 gap-4 md:gap-16 px-0 md:px-4'>
          <div className='col-span-8 md:col-span-3 order-2 md:order-1 items-start'>
            <h2 className='mb-4 text-lg font-bold uppercase text-white'>¿quién soy?</h2>
            <p className='text-lg text-white w-full pb-2'>
              Soy un profesional del desarrollo web con más de 5 años de experiencia en el sector. 
              Me apasiona crear sitios web dinámicos, funcionales y atractivos, utilizando las mejores herramientas como 
              y los lenguajes de programación PHP y React.
            </p>
            <p className='text-lg text-white w- pb-2'>
                Además, tengo amplios conocimientos en el uso de plataformas 
              como WordPress, Joomla y PrestaShop, que me permiten desarrollar páginas web adaptadas a las necesidades de cada cliente. 
              Mi objetivo es ofrecer soluciones web de calidad, innovadoras y eficientes, que cumplan con los estándares de diseño y usabilidad.
            </p>
          </div>
           
          <div className='col-span-8 mx-auto rounded-2xl border-l-2 border-t-2 border-r-[10px] border-b-[10px] border-solid
           border-sky-500 p-4 bg-slate-300 sm:col-span-3 order-1 md:order-2'>             
                <img src={HeroImage} alt="me programador" className="w-full h-auto"/>            
          </div>

          <div className='col-span-2 flex flex-row md:flex-col items-start justify-between order-3'>
            <div className='flex flex-col items-end justify-center px-1'>
              <span className='inline-block text-4xl md:text-7xl font-bold text-yellow-50'>
                + <AnimarNumeros value={15} /> 
              </span>
              <h3 className='text-s text-center md:text-xl font-medium capitalize text-yellow-50'>
                Clientes satisfechos
              </h3>
            </div> 

            <div className='flex flex-col items-center md:items-end justify-center px-1'>
              <span className='inline-block text-4xl md:text-7xl font-bold text-yellow-50'>
              + <AnimarNumeros value={4} /> 
              </span>
              <h3 className='text-s text-center md:text-xl font-medium capitalize text-yellow-50'>
                años de experiencia
              </h3>
            </div> 

            <div className='flex flex-col items-end justify-center px-1'>
              <span className='inline-block text-4xl md:text-7xl font-bold text-yellow-50'>
                + <AnimarNumeros value={20} /> 
              </span>
              <h3 className='text-s text-center md:text-xl font-medium capitalize text-yellow-50'>
                proyecto culminados
              </h3>
            </div> 

          </div> 
          

        </div>
    </div>
  )
}

export default AboutUno