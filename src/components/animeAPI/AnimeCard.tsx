import { useState } from "react"
import Modal from "./Modal"

const AnimeCard = ({ animes }: any) => {

    const [active, setActive] = useState(false)
    const [id, setId] = useState(0)
    const [title, setTitle] = useState('')

    const infoModal = (id: number, title: string) => {
        setActive(!active)
        setId(id)

        setTitle(title)
    }

    return (
        <>

            <div className='container mb-4 '>
                <h2 className='display-4 text-center text-light'> Select your favorite anime</h2>
                <div className='row'>

                    {active &&
                        <Modal
                            active={active}
                            realWidth='500px'
                            header={<p>{title}</p>}
                            toggle={() => setActive(false)}
                        >

                            <p>{id}</p>

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
                                                onClick={() => { infoModal(anime.mal_id, anime.title) }}
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