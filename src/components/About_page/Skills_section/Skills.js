import React from 'react'
import "./Skills.css"

function Skills() {
    return (
        <section id='Skills_about'>

            <div className='Skills_container'>
                <div className='skills_containt'>
                    <div className='education_containt'>
                        <h2>Mon parcours d'apprentissage</h2>

                        {/* <p className='years'>2000 - 2023</p> */}

                        <h4 >Qui suis-je ?</h4>

                        <p className='text'>
                            Moi, c'est Pierre-André Louis, résident d'Haïti, où je  vie avec ma famille
                            bien-aimée. J'ai 24 ans et je suis passionné d'informatique et de
                            technologies. Je suis quelqu'un d'intelligent avec la capacité d'apprendre
                            très rapidement. J'adore regarder des films
                            et écouter de la musique. C'est comme ça que je passe la plupart de mon temps libre.
                        </p>

                        <div className='tilte_box'><div className='bullet'></div><p className='title'>Développement web</p></div>


                        <p className='text'>
                            Je suis une personne dévouée et enthousiaste dont le parcours d'apprentissage a
                            été marqué par une gamme variée de compétences et de réalisations. Avec une solide
                            base en développement web, je maîtrise HTML, CSS et JavaScript, tout en excellant
                            dans la création d'interfaces utilisateur dynamiques avec React et Bootstrap. Mon
                            expertise en programmation s'étend également à des langages comme C++ et Java,
                            ce qui me permet de concevoir des solutions logicielles robustes et efficaces.
                        </p>

                        <div className='tilte_box'><div className='bullet'></div><p className='title'>Bases de données & design graphique</p></div>


                        <p className='text'>
                            J'ai une compréhension approfondie des bases de données, ayant travaillé intensivement
                            avec MySQL et Oracle, ce qui démontre ma capacité à concevoir et gérer des applications
                            axées sur les données. En plus de cela, mes compétences en design graphique ressortent grâce
                            à ma maîtrise d'Adobe Photoshop et Adobe
                            Illustrator, me permettant de traduire la créativité en designs visuellement captivants.
                        </p>

                        <div className='tilte_box'><div className='bullet'></div><p className='title'>Réseautage</p></div>


                        <p className='text'>
                            De plus, mon expertise en Cisco, notamment CCNA1, CCNA2 et CCNA3, reflète mon engagement
                            envers le réseautage et l'administration réseau. Cette compétence est complétée par ma
                            maîtrise du dépannage informatique et des
                            interactions matériel-logiciel, comme le prouve ma certification Cisco IT Essentials.
                        </p>

                    </div>




















                    <div className='skill_containt'>
                        <h2>My Skills</h2>
                        <div className='skills'>
                            <div className='single_skill_container'>
                                <div className='single_skill'>
                                    <h5>HTML</h5>
                                    <p>95%</p>
                                </div>
                                <div className='range_container'>
                                    <div className='range_containt html'></div>
                                </div>
                            </div>


                            <div className='single_skill_container'>
                                <div className='single_skill'>
                                    <h5>CSS</h5>
                                    <p>90%</p>
                                </div>
                                <div className='range_container'>
                                    <div className='range_containt css'></div>
                                </div>
                            </div>


                            <div className='single_skill_container'>
                                <div className='single_skill'>
                                    <h5>Javascript</h5>
                                    <p>80%</p>
                                </div>
                                <div className='range_container'>
                                    <div className='range_containt javascript'></div>
                                </div>
                            </div>


                            <div className='single_skill_container'>
                                <div className='single_skill'>
                                    <h5>React js</h5>
                                    <p>80%</p>
                                </div>
                                <div className='range_container'>
                                    <div className='range_containt react'></div>
                                </div>
                            </div>


                            <div className='single_skill_container'>
                                <div className='single_skill'>
                                    <h5>Bootstrap</h5>
                                    <p>80%</p>
                                </div>
                                <div className='range_container'>
                                    <div className='range_containt bootstrap'></div>
                                </div>
                            </div>


                            <div className='single_skill_container'>
                                <div className='single_skill'>
                                    <h5>Photoshop</h5>
                                    <p>70%</p>
                                </div>
                                <div className='range_container'>
                                    <div className='range_containt photoshop'></div>
                                </div>
                            </div>


                            <div className='single_skill_container'>
                                <div className='single_skill'>
                                    <h5>Illustrator</h5>
                                    <p>70%</p>
                                </div>
                                <div className='range_container'>
                                    <div className='range_containt illustrator'></div>
                                </div>
                            </div>


                            <div className='single_skill_container'>
                                <div className='single_skill'>
                                    <h5>MySql</h5>
                                    <p>60%</p>
                                </div>
                                <div className='range_container'>
                                    <div className='range_containt mysql'></div>
                                </div>
                            </div>

                            <div className='single_skill_container'>
                                <div className='single_skill'>
                                    <h5>Oracle</h5>
                                    <p>60%</p>
                                </div>
                                <div className='range_container'>
                                    <div className='range_containt oracle'></div>
                                </div>
                            </div>

                            <div className='single_skill_container'>
                                <div className='single_skill'>
                                    <h5>C++</h5>
                                    <p>60%</p>
                                </div>
                                <div className='range_container'>
                                    <div className='range_containt c_plus'></div>
                                </div>
                            </div>

                            <div className='single_skill_container'>
                                <div className='single_skill'>
                                    <h5>Java</h5>
                                    <p>50%</p>
                                </div>
                                <div className='range_container'>
                                    <div className='range_containt java'></div>
                                </div>
                            </div>


                            <div className='single_skill_container'>
                                <div className='single_skill'>
                                    <h5>PHP</h5>
                                    <p>50%</p>
                                </div>
                                <div className='range_container'>
                                    <div className='range_containt java'></div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills