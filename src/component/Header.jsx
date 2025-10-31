import React,{useState} from 'react'
import{useNavigate} from  'react-router-dom'
import { IoMdMenu } from "react-icons/io";
import { MdCancel } from "react-icons/md"
function Header() {
    const navigate= useNavigate();
    const [model, setModel] = useState(false);
    const handlehome=()=>{
      navigate('/Home')
    }

  return (
    <div className='flex items-center justify-between bg-amber-50 h-16 px-4'>
      <h1 className='text-red-700 font-bold cursor cursor-pointer' onClick={()=>navigate('/')}>Mera Header</h1>
     
        <ul className='hidden md:flex space-x-4 text-red-700 cursor-pointer'>
          <li onClick={()=>navigate('Home')}>Home</li>
          <li onClick={()=>navigate('about')}>About</li>
          <li onClick={()=>navigate('Contact')}>Contact</li>
          <li onClick={()=>navigate('Blog')}>Blog</li>
          <li onClick={()=> navigate('Code')}>code</li>

           </ul>
       <div className='flex md:hidden'>
        {/* condition ? value_if_true : value_if_false */}

         { model ? <IoMdMenu  onClick={() => setModel(false)}/> :  <MdCancel  onClick={() => setModel(true)} />  }
       </div>
          {
            model && (
              <div className='absolute top-16 right-0 bg-white text-black w-48 p-4 rounded-lg shadow-lg'>
                <ul className='flex flex-col gap-2'>
                  <li onClick={handlehome}>Home</li>
                  <li onClick={()=>navigate('/about')}>About</li>
                  <li onClick={()=>navigate('/contact')}>Contact us</li>
                  <li onClick={()=> navigate('/blog')}>Blog</li>
                  <li onClick={()=> navigate('/Code')}> code</li>

                </ul> 
               </div>
     
       )
          } 

      
    </div>
  )
  
}



   

export default Header