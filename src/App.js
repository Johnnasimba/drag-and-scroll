import React, { useState, useRef } from 'react';
import './index.css';

const App = () => {
  const sliderRef = useRef(null);
  const dragContainerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(null);
  const [scrollLeft, setScrollLeft] = useState(null);

  const handleMouseDown = (e) => {
    setIsDown(true);
    sliderRef.current.classList.add('active');
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleMouseUp = () => {
    setIsDown(false);
    sliderRef.current.classList.remove('active');
  };

  const handleMouseMove = (e) => {
    if (!isDown) {
      sliderRef.current.style.cursor = 'none';
      if (isHovered) {
        sliderRef.current.style.cursor = 'none';
        dragContainerRef.current.style.display = 'block';
        dragContainerRef.current.style.transform = `translate(-50%, -50%) translate(${e.clientX}px, ${e.clientY}px)`;
      }
    } else {
      e.preventDefault();
      const x = e.pageX - sliderRef.current.offsetLeft;
      const walk = (x - startX) * 3;
      sliderRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <div className='container'>
      <div
        className="items"
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {isHovered && (
          <div
            className="drag-container"
            ref={dragContainerRef}
            style={{ display: isDown ? 'none' : 'block' }}
          >
            Drag
          </div>
        )}
        <div className="item item-1">1</div>
        <div className="item item-2">2</div>
        <div className="item item-3">3</div>
        <div className="item item-4">4</div>
        <div className="item item-5">5</div>
        <div className="item item-6">6</div>
        <div className="item item-7">7</div>
        <div className="item item-8">8</div>
        <div className="item item-9">9</div>
        <div className="item item-10">10</div>
        <div className="item item-11">11</div>
        <div className="item item-12">12</div>
        <div className="item item-13">13</div>
        <div className="item item-14">14</div>
        <div className="item item-15">15</div>
        <div className="item item-16">16</div>
        <div className="item item-17">17</div>
        <div className="item item-18">18</div>
        <div className="item item-19">19</div>
        <div className="item item-20">20</div>
        <div className="item item-21">21</div>
        <div className="item item-22">22</div>
        <div className="item item-23">23</div>
        <div className="item item-24">24</div>
        <div className="item item-25">25</div>
      </div>
    </div>
  );
};

export default App;
