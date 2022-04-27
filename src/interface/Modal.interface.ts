import { ReactNode } from "react"

export interface ShowI {
  active: boolean
  toggle: Function
  children: ReactNode
  header?: any
  width?: string
  realWidth?: string
}

export interface ModalI extends ShowI {
  header?: string | Function | ReactNode
}
export interface ModalDataI {
  id: number,
  title: string,
  episodes: string,
  duration: string

}