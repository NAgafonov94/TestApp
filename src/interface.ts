export interface IData {
    summary: string
    fromEmail: string
    date: string
}

export interface ITableColumn {
    name: string
    label: string
}

export interface IDropEvent {
    dragData: IData
    mouseEvent: MouseEvent
}