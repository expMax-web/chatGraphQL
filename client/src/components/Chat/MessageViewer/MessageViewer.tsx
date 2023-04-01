
import { FC } from "react"
import { useGetMessages } from "../../../graphql/hooks"
import { MessageItem } from "./Message"

import styles from './styles.module.css'

export const MessageViewer: FC = () => {

    const { data: messages } = useGetMessages()

    console.log(messages);


    return (
        <div className={styles.Container}>
            {messages.map((message) => {
                return (<MessageItem message={message} key={message.id} user="test" />)
            })}
        </div>
    )
}