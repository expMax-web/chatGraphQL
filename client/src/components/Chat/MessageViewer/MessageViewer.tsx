
import { FC } from "react"
import { useFormContext } from "react-hook-form"
import { useSubscribeToMessages } from "../../../graphql/hooks"
import { ChatFormValues } from "../types"
import { MessageItem } from "./Message"

import styles from './styles.module.css'

export const MessageViewer: FC = () => {

    const { data: messages } = useSubscribeToMessages()

    console.log(messages);


    const { watch } = useFormContext<ChatFormValues>()

    const user = watch('nickName')

    return (
        <div className={styles.Container}>
            {messages.map((message) => {
                return (<MessageItem message={message} key={message.id} user={user} />)
            })}
        </div>
    )
}