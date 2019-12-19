import React, {Component} from 'react';


export default class Skils extends Component {
    render(){
        return(
            <div className="container">
                <div className="skils__main">
                    <div className="skils__about">
                        <div className=" title_container skils__title">Our skils</div>
                        <div className="title2__ skils__text">
                        Теперь переходим к File / Export и экспортируем все артборды в PNG (1x, 2x, 3x) или в SVG формате. Таким образом, у вас каждый объект будет отдельным файлом к большой радости разработчика.
                        Правда я заметил одну проблему: при экспорте к SVG файлу добавляется квадратный фон (хотя я удаляю заливку фона). Надеюсь, что это баг и Adobe его скоро пофиксит.
                        </div>
                        <div className="offers__skill">
                            <div className="skill__of">
                                
                            </div>
                        </div>
                    </div>
                    <div className="skils__foto"></div>
                </div>
            </div>
        )
    }
}

