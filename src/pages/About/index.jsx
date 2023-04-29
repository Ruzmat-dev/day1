import React, { useState } from 'react'
import "./style.scss"



const About = () => {

    const [num, setNum] = useState(1)
    const [toggle, setToggle] = useState(false)
    console.log(num);

    return (
        <>
            <h1>About page {num} </h1>

            <div className="about">
                <div className="about__btn--wrapper">
                    <button onClick={() => setNum(num + 1)} className="about__btn--wrapper-add">
                        ADD
                    </button>
                    <button onClick={() => setToggle(true)} className="about__btn--wrapper-open">
                        OPEN
                    </button>
                    <button onClick={() => setToggle(false)} className="about__btn--wrapper-close">
                        CLOSE
                    </button>
                    <button onClick={() => setToggle((e)=>!e)} className="about__btn--wrapper-toggle">
                        TOGGLE
                    </button>
                </div>

                <div className={ toggle ? "about__card--page" : "about__card--page swap"}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, debitis? Soluta, libero? Repellendus facere unde ipsa ea fugiat dolor possimus ut dolorum animi provident ex reprehenderit modi quidem voluptatum perferendis, nostrum ducimus obcaecati veritatis quia vitae explicabo dolores? Debitis non cupiditate iusto vel fugit et odio aperiam at harum fuga sit aliquam eum a ad saepe dolor, iste impedit error corporis? Magnam, ullam provident alias eveniet beatae, quam sint totam sequi voluptatem nostrum praesentium ipsum ad veritatis debitis eaque! Adipisci quaerat corporis cupiditate quibusdam itaque iste deserunt magni co consequuntur exercitationem earum error iste omnis nihil adipisci veritatis voluptate laudantium sint dolorum ipsam. Temporibus, quod itaque. Unde beatae consectetur necessitatibus illo cupiditate velit ratione eum quasi praesentium, molestias delectus eaque aspernatur consequuntur eligendi amet, explicabo id totam provident saepe! Sapiente doloremque veniam beatae numquam cupiditate iusto nihil delectus explicabo nobis, vero, eligendi magni illo omnis repellendus minus pariatur blanditiis molestiae quibusdam repudiandae. Vero asperiores, suscipit quos, facere ex accusamus dignissimos totam sed, numquam debitis nobis labore laborum beatae quisquam architecto fugit dolores harum aliquam earum qui illo at minus! Assumenda earum optio labore ipsa ad tempora suscipit aperiam esse delectus sunt molli</p>
                </div>
            </div>
        </>
    )
}

export default About