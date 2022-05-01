import { SetStateAction, useState } from "react"
import { ModalDataI } from "../../interface/Modal.interface"
import Modal from "./Modal"
import MoreInfoSVG from "./svg/MoreInfoSVG"
import YoutubeSVG from "./svg/YoutubeSVG"

const AnimeCard = ({ animes }: any) => {

    const [active, setActive] = useState(false)
    const [id, setId] = useState(0)
    const [dataModal, setDataModal] = useState({ title: '', episodes: '', score: 0, synopsis: '', year: '', trailer: '' })

    const infoModal = (title: string, episodes: string, score: number, synopsis: string, year: string, trailer: string) => {
        setActive(!active)
        setId(id)

        setDataModal({ title, episodes, score, synopsis, year, trailer })
    }

    return (
        <>
            <div className='container mb-4 '>
                <h2 className='display-4 text-center text-light'> Select your favorite anime</h2>
                <div className='row d-flex justify-content-center'>

                    {active &&

                        <Modal
                            active={active}
                            realWidth='500px'
                            header={<p>{dataModal.title} - {dataModal.year && dataModal.year} </p>}
                            toggle={() => setActive(false)}
                        >
                            <div className=" m-3">
                                <p style={{ fontSize: '13px' }}><b>Synopsis: </b>{dataModal.synopsis} </p>

                            </div>
                            <div className="d-flex justify-content-between">
                                <a href={`${dataModal.trailer}`} target="_blank" style={{ fontSize: '10px' }}
                                    className="btn btn-danger btn-sm text-center m-2"><YoutubeSVG /> <span className="mt-1">Ver trailer</span></a>
                                <p style={{ fontSize: '10px' }} className="bg-primary text-white p-1 rounded mt-1">Episodios: {dataModal.episodes}</p>

                            </div>

                            <div className="progress">
                                <div className="progress-bar bg-danger" role="progressbar" aria-valuenow={dataModal.score}
                                    aria-valuemin={0} aria-valuemax={80} style={{
                                        width: `${(10 * dataModal.score / 100) * 100}%`,
                                    }}>
                                    <span className="sr-only">Rate: {dataModal.score} </span>
                                </div>
                            </div>

                        </Modal>
                    }
                    {
                        animes.map((anime: any, i: number) => {

                            return (

                                <div className='col-3 m-2' key={`anime-${anime.title}-${id}`}>
                                    <div className='card rounded' style={{ width: '17rem' }}>
                                        <img src={`${anime.images.jpg.large_image_url}`} style={{ maxWidth: '17rem' }} className="img-responsive" alt="" />
                                        <div className="" >

                                            <div className='d-flex justify-content-center'>
                                                <button
                                                    className=" btn btn-danger btn-sm text-light "
                                                    style={{ position: 'absolute', top: '88%', width: '50%' }}
                                                    onClick={() => {
                                                        infoModal(

                                                            anime.title,
                                                            anime.episodes,
                                                            anime.score,
                                                            anime.synopsis,
                                                            anime.year,
                                                            anime.trailer.embed_url)
                                                    }}

                                                ><MoreInfoSVG /> More info</button>
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