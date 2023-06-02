import { useEffect, useRef, useState } from 'react';
import React from 'react';
import { BsZoomIn, BsZoomOut } from 'react-icons/bs';

import { CgArrowRightR, CgArrowLeftR } from 'react-icons/cg';
import Loading from './Loading';
import Wrapper from '../assets/wrappers/BookViewer';
const BookViewer = ({ id }) => {
  const canvasRef = useRef();

  // Initialize loaded state as false
  const [loaded, setLoaded] = useState(false);
  // Create alert message if book not found in Google Database
  function alertNotFound() {
    alert('could not embed the book!');
  }
  // Add a Google Books script tag and event listener if the tag has loaded
  useEffect(() => {
    const head = document.querySelector('head');
    const script = document.createElement('script');
    script.src = 'https://www.google.com/books/jsapi.js';
    script.async = true;
    script.type = 'text/javascript';

    script.addEventListener('load', () => setLoaded(true));
    head.appendChild(script);
    return () => {
      head.removeChild(script);
    };
  }, []);
  // Once Google Books has loaded, then create new instance of Default viewer and load book's information to viewer

  useEffect(() => {
    if (!loaded) return;
    else {
      if (window.viewer) {
        let viewer = new window.google.books.DefaultViewer(canvasRef.current);
        viewer.load(id, alertNotFound);
      } else {
        window.google.books.load({ language: 'en' });
        const interval = setInterval(() => {
          let viewer = new window.google.books.DefaultViewer(canvasRef.current);

          window.viewer = viewer;
          if (window.viewer) clearInterval(interval);
          viewer.load(id, alertNotFound);
        }, 1000);
      }
    }
  }, [id, loaded]);
  if (!loaded) return <Loading />;
  return (
    <Wrapper>
      <div ref={canvasRef} id="viewerCanvas"></div>
      <div className="tab-btns">
        <div className="container-btns">
          <div>
            <button
              onClick={() => window.viewer.previousPage()}
              className="control-page"
            >
              <CgArrowLeftR />
            </button>
            <button
              onClick={() => window.viewer.nextPage()}
              className="control-page"
            >
              <CgArrowRightR />
            </button>
          </div>
          <div>
            <button
              onClick={() => window.viewer.zoomIn()}
              className="control-zoom"
            >
              <BsZoomIn />
            </button>
            <button
              onClick={() => window.viewer.zoomOut()}
              className="control-zoom"
            >
              <BsZoomOut />
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default BookViewer;
