import { useState, useEffect } from "react";
import {AiOutlineVerticalRight,
AiOutlineVerticalLeft} from "react-icons/ai"

export default function Slider() {
    const img =[
        "images/hero1.png",
        "images/hero2.png",
        "images/hero3.png",
    ]
    let count = 0;
    let slideInterval;
    const [currentIndex, setCurrentIndex] = useState(0);

    // const slideRef = useRef()
    useEffect(()=>{

        // slideRef.current.addEventListener("mouseenter", pauseSlider());
        // slideRef.current.addEventListener("mouseleave", startSlider());

        startSlider();

        // return ()=>{
        //     pauseSlider();
        // }

    },[])

    const startSlider = () =>{
       slideInterval = setInterval(() => {
            handleOnNext();
        }, 5000);
    }

    const pauseSlider = ()=>{
        clearInterval(slideInterval);
    }

    const handleOnNext =() =>{
        count = (count + 1) % img.length;
        // setCurrentIndex(currentIndex+1);
        setCurrentIndex(count);
        
    };
    const handleOnPrevious =() =>{
        const imgLength = img.length;
        count = (currentIndex + imgLength-1) % imgLength;
        setCurrentIndex(count)
    };
    
    let style={
        width : "1400px",
        height : "508px"
    }

  return (
      <div className=" w-full relative select-none">
          <div className="aspect-w-16 aspect-h-9">
            <img src={img[currentIndex]} alt="Loading" style={style} />

          </div>

        <div className="absolute top-1/2 transform -translate-y-1/2 px-3 w-full flex justify-between items-center" >
            <button className=" text-white p rounded-full bg-opacity-50 cursor-pointer " onClick={handleOnPrevious}><AiOutlineVerticalRight size={30}/></button>
            <button className=" text-white p rounded-full bg-opacity-50 cursor-pointer " onClick={handleOnNext}><AiOutlineVerticalLeft size={30}/></button>

        </div>

      </div>
    
  )
}
