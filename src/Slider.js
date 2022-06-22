import React, {Component, useRef, useState} from 'react';
import './index.scss'
import Item from "./Item";
import UsersContainer from "./UsersContainer";
import reducer from './users-reducer'

let Slider = () => {

    const slider = useRef(null)
    const [items, setItems] = useState(['sneaker'])
    const [prev, setPrev] = useState(false)
    const [next, setNext] = useState(false)

    let position = 0

    const prevHandler = () =>{
        if (position===0){
            setPrev(true)
        } else{
            setPrev(false)
            position += 300
            slider.current.childNodes.forEach((element) => {
                element.style = `transform: translatex(${position}px)`
            })
            }


    }
    const nextHandler = () =>{
        if (position === -(items.length-4) * 25 + 25){
            setNext(false)
            setPrev(false)
        }else{
            setNext(false)
            position -= 300
            slider.current.childNodes.forEach((element) => {
                element.style = `transform: translatex(${position}px)`
            })
        }


    }
    return (
        <div className='Slider'>
            <div className='Slider_track' ref={slider}>
                {items.map((elem) => {
                    return (
                        <UsersContainer/>
                    )
                })}
            </div>
            <button className='Button_prev' onClick={prevHandler}>{'<'}</button>
            <button className='Button_next' onClick={nextHandler}>{'>'}</button>
        </div>
    )
}


export default Slider;