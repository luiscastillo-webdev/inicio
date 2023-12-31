import React, {useState,useEffect} from 'react'
 
const apiId = import.meta.env.VITE_API_KEY
const Clima = () => {
    const [listaClima,setListaClima] = useState([
         {
            ciudad:'',
            icono:'',
         }

    ]);
    useEffect(() => {
        async function obtenerClima () {
           
            const city = 'valencia';
            const country = 'VE';
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiId}`;
        
           const response = await fetch(url);
           const data = await response.json();  
            
           setListaClima([
            {
                ciudad:data.name,
                temp:data.main.temp,               
                icono:data.weather[0].icon,

           }]);    
    
           console.log(data);
           
        }
        obtenerClima();
  
      }, []);
    
      const kelvinToFarenheit = (k) => {
        return (k - 273.15).toFixed(0);
      };
  return (         
   <>
    {
        listaClima.map(lista => (
         
            <div className='w-full'>
              <h5>Clima en {lista.ciudad}</h5>
              <img className="mx-auto" src={`https://openweathermap.org/img/wn/${lista.icono}@2x.png`} alt="icon"/>
              <p className='text-slate-300'>Temp: {kelvinToFarenheit(lista.temp)} º</p>            
            </div>
       ))}       
    </> 

  )
}

export default Clima