export type TodoFormProps = {
    inputRef: React.RefObject<HTMLInputElement | null>;
}

export type Todo = {
    id: number,
    text: string,
    completed: boolean
}