import { SetStateAction, useState } from "react"
import { ModalDataI } from "../../interface/Modal.interface"
import Modal from "./Modal"

const AnimeCard = ({ animes }: any) => {

    const [active, setActive] = useState(false)
    const [id, setId] = useState(0)
    const [dataModal, setDataModal] = useState({ title: '', episodes: '', duration: '', score: 0 })

    const infoModal = (id: SetStateAction<number>, title: string, episodes: string, duration: string, score: number) => {
        setActive(!active)
        setId(id)

        setDataModal({ title, episodes, duration, score })
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
                            <div className="d-flex justify-content-around m-3">
                                <p>Duracion: {dataModal.duration} - </p>
                                <p className="bg-primary text-white p-1 rounded">Episodios: {dataModal.episodes}</p>
                            </div>
                            <div className="d-flex justify-content-center ">
                                <button className="btn btn-success btn-sm text-center m-2">Ver trailer</button>

                            </div>

                            <div className="progress">
                                <div className="progress-bar" role="progressbar" aria-valuenow={80 + dataModal.score}
                                    aria-valuemin={0} aria-valuemax={10} style={{
                                        width: `${80 + dataModal.score}%`,
                                    }}>
                                    <span className="sr-only">Rate: {dataModal.score} </span>
                                </div>
                            </div>

                        </Modal>
                    }
                    {
                        animes.map((anime: any, i: number) => {
                            const score = anime.score + 80

                            return (

                                <div className='col-3 m-2' key={`anime-${anime.title}-${i}`}>
                                    <div className='card rounded' style={{ width: '17rem' }}>
                                        <img src={`${anime.images.jpg.large_image_url}`} style={{ maxWidth: '17rem' }} className="img-responsive" alt="" />
                                        <div className="" >

                                            <div className='d-flex justify-content-center'>
                                                <button
                                                    className=" btn btn-secondary btn-sm text-light "
                                                    style={{ position: 'absolute', top: '88%', width: '50%' }}
                                                    onClick={() => {
                                                        infoModal(
                                                            anime.mal_id,
                                                            anime.title,
                                                            anime.episodes,
                                                            anime.duration,
                                                            anime.score)
                                                    }}

                                                ><i className="fas fa-info-circle"></i>More info</button>
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