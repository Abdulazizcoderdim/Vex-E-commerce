import './Slider.css';


const Slider1 = () => {
    return (
     <div className='slide'>
      <div className='slider-wrapper'>
         <div className="slider">
          <img id='slider-1' src="../../../public/slider/slider-1.jpg" alt="" />
          <img id='slider-2' src="../../../public/slider/slider-2.jpg" alt="" />
          <img id='slider-3' src="../../../public/slider/slider-3.jpg" alt="" />
         </div>
      </div>
         <div className="slider-nav">
          <a href="#slider-1"></a>
          <a href="#slider-2"></a>
          <a href="#slider-3"></a>
         </div>
       <div className='slide__text'>
         <div className='slide__text__container'>
           <h2>Products</h2>
           <p>The beauty of nature <br /> is hidden in details.</p>
           <button>Shop Now</button>
         </div>
       </div>
     </div>
    );
};

export default Slider1;