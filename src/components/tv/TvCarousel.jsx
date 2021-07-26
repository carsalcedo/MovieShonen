import TvCard from "./TvCard";
import styles from '../../css/MovieCarousel.module.css'
import { useRef, useEffect } from "react";


const TvCarousel = ({tvData}) => {
  const slide = useRef(null);
 // const intervalSlide = useRef(null);

  const next = () =>{
      //con la condicion se comprueba que el slide tenga elementos
    if(slide.current.children.length > 0){
        //obtener el primer elemento
        const firstElement = slide.current.children[0];
        
        //establecer transicion
        slide.current.style.transition = `900ms ease-out all`;

        //mover
        const sizeSlide = slide.current.children[0].offsetWidth;
        slide.current.style.transform = `translateX(-${sizeSlide}px)`;

        const transicion = () => {
            //para reinicar transicion del slide
            slide.current.style.transition = `none`;
            slide.current.style.transform = `translateX(0)`;

            //mandar el primer elemento al final
            slide.current.appendChild(firstElement);
            slide.current.removeEventListener('transitionend', transicion);
        }
            //para cuando termine la animacion
             slide.current.addEventListener('transitionend', transicion);
      
       
    }
  }

  const prev = () =>{
    console.log('prev');
    if(slide.current.children.length > 0){
        const index = slide.current.children.length - 1;
        const ultimate = slide.current.children[index];
        slide.current.insertBefore(ultimate, slide.current.firstChild);

        slide.current.style.transition = `none`;
        const sizeSlide = slide.current.children[0].offsetWidth;
        slide.current.style.transform = `translateX(-${sizeSlide}px)`;

        setTimeout(() =>{
            slide.current.style.transition = `900ms ease-out all`;
            slide.current.style.transform = `translateX(0)`;
        }, 30)
    }
  }

  //code to automathic slide
  /*useEffect(() => {
      intervalSlide.current = setInterval(() =>{
          next();
      }, 3000);
      //delete interval
      slide.current.addEventListener('mouseenter', () => {
          clearInterval(intervalSlide.current);
      });
      //reanude interval
      slide.current.addEventListener('mouseleave', () => {
        intervalSlide.current = setInterval(() =>{
            next();
        }, 3000);
    });
  }, []);*/
  
    return (  
    <div className={styles.peliculasCarousel}>
        <h4 className={styles.title}>tv Recent</h4>
    <div className={styles.mainContainer}>
        <button role="button" id="arrowLeft" className={styles.arrowLeft} onClick={prev}><i className="fas fa-angle-left"></i></button>
        <div className={styles.containerCarousel}>
            <div className={styles.carousel}>
                <ul className={styles.movies}  ref={slide}>1
                    {tvData.map((tv) =>
                    <TvCard key={tv.id} tv={tv}/>
                    )}
                </ul>
            </div>
        </div>
        <button role="button" id="arrowRight" className={styles.arrowRight} onClick={next}><i className="fas fa-angle-right"></i></button>
    </div>
    </div>
    );
}
 
export default TvCarousel;