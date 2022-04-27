import { useState } from "react"
import Modal from "./Modal"

const AnimeCard = ({ animes }: any) => {

    const [active, setActive] = useState(false)

    return (
        <>
        <h1>TEST</h1>
            <div className='container mb-4 '>
                <h2 className='display-4 text-center text-light'> Select your favorite anime</h2>
                <div className='row'>

                    {active &&
                        <Modal
                            active={active}
                            realWidth='500px'
                            header={<><h3>Selected</h3></>}
                            toggle={() => setActive(false)}
                        >


                            <p>Anime selected</p>

                        </Modal>
                    }
                    {
                        animes.map((anime: any, i: number) => (

                            <div className='col-4' key={`anime-${anime.title}-${i}`}>
                                <div className='card' style={{ width: '17rem' }}>
                                    <img src={`${anime.images.jpg.large_image_url}`} alt="" />
                                    <div className="card-body">
                                        <div className="card-title text-center" style={{ fontSize: '24px' }}>
                                            {anime.title}
                                        </div>
                                        <p className="card-text text-center">Rate: {anime.score}</p>
                                        <div className='d-flex justify-content-center'>
                                            <button
                                                className=" btn btn-primary btn-sm text-light"
                                                onClick={() => { setActive(!active) }}
                                            >More info</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default AnimeCard