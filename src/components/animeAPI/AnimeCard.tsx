import { SetStateAction, useState } from "react"
import { ModalDataI } from "../../interface/Modal.interface"
import Modal from "./Modal"

const AnimeCard = ({ animes }: any) => {

    const [active, setActive] = useState(false)
    const [id, setId] = useState(0)
    const [dataModal, setDataModal] = useState({ title: '', episodes: '', duration: '' })

    const infoModal = (id: SetStateAction<number>, title: string, episodes: string, duration: string) => {
        setActive(!active)
        setId(id)

        setDataModal({ title, episodes, duration })
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
                            header={<p>{dataModal.title}</p>}
                            toggle={() => setActive(false)}
                        >

                            <p>Duracion: {dataModal.duration} - Episodios: {dataModal.episodes}</p>

                        </Modal>
                    }
                    {
                        animes.map((anime: any, i: number) => {

                            const score = anime.score + 90
                            return (

                                <div className='col-4' key={`anime-${anime.title}-${i}`}>
                                    <div className='card' style={{ width: '17rem' }}>
                                        <img src={`${anime.images.jpg.large_image_url}`} alt="" />
                                        <div className="card-body">
                                            <div className="card-title text-center" style={{ fontSize: '24px' }}>
                                                {anime.title}
                                            </div>
                                            <hr />
                                            {/* <p className="card-text text-center">Rate: </p> */}
                                            <div className="progress mb-2">
                                                <div className="progress-bar bg-success" role="progressbar" style={{ width: `${score}%` }} aria-valuenow={10} aria-valuemin={10} aria-valuemax={10}>{anime.score}%</div>
                                            </div>
                                            <div className='d-flex justify-content-center'>
                                                <button
                                                    className=" btn btn-primary btn-sm text-light"
                                                    onClick={() => {
                                                        infoModal(
                                                            anime.mal_id,
                                                            anime.title,
                                                            anime.episodes,
                                                            anime.duration)
                                                    }}
                                                >More info</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default AnimeCard