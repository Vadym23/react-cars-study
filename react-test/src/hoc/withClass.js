import React from 'react'

//HOC - higher order component будет добавлять некоторый класс корневого елемента и дальше будет рендерить 
//компонент который передадим, обернем
// Это некоторая ф-ция, которая получает в себя компонент и название класса, можем использ. как обыч. ф-цию
const withClass = (Component, className) => {
    return props => {
        return (
            <div className = {className}>
                {/* Данный синтаксис розвернет обьект рrops в компонент и можем исп. опции*/}
                <Component {...props}/>
            </div>
        )
    }
}

export default withClass