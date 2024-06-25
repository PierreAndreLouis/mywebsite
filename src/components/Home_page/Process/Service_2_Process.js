import React from 'react';
import "./Service_2_Process.css"

function Service_Process() {
    return (
        <section id='Service2'>

            <div className='Process_container'>
                <div className='process_containt'>
                    {/* <h2>Processus de travail</h2> */}
                    <div className='title_section'>
                        <h4>Planification</h4>
                        <h2>Mon processus de travail</h2>
                    </div>
                    
                    <div className='process'>
                        
                        <div className='single_process'>
                            <div className='icon_box'>
                                <i class="bi bi-headset"></i>
                                <i class="bi bi-chevron-double-right"></i>
                            </div>
                            <p>Discuter de Ton Site Web </p>
                        </div>


                        <div className='single_process'>
                            <div className='icon_box'>
                                <i class="bi bi-journal-check"></i>
                                <i class="bi bi-chevron-double-right"></i>
                            </div>
                            <p>Planifier Ton Site Web</p>
                        </div>


                        <div className='single_process'>
                            <div className='icon_box'>
                                <i class="bi bi-tools"></i>
                                <i class="bi bi-chevron-double-right"></i>
                            </div>
                            <p>Construire Ton Site Web</p>
                        </div>


                        <div className='single_process'>
                            <div className='icon_box'>
                                <i class="bi bi-check2-square"></i>
                                <i class="bi bi-chevron-double-right"></i>
                            </div>
                            <p>Livrer Ton Site Web</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Service_Process



