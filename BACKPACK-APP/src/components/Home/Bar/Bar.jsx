import { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';

export const Bar = ({activeCamp}) => {  


  const active = useRef();
  const activeSecond = useRef();
  
  const activeInput = ()=>{
    if (activeCamp) {
        active.current.classList.add('active');
    }else{
        activeSecond.current.classList.add('active');
    }
  }

  useEffect(()=>{
    activeInput();
  }, [])

  return (
    <div className='barMat'>

        <NavLink to={'/home'} className='navMat-link' >
            <button className='btn btn-active' ref={active}>
                <figure>
                    <img src="./../../public/images/mat.svg" alt="" />
                </figure>

                <p>
                    Materias
                </p>
            </button>
        </NavLink>

        <NavLink to={'/materiales'} className='navMat-link'>
            <button className='btn' ref={activeSecond}>
                <figure>
                    <img src="./../../public/images/mat-2.svg" alt="" />
                </figure>

                <p>
                    Materiales
                </p>
            </button>
        </NavLink>

    </div>
  )
}