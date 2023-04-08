
import { FC, useEffect } from "react"
import { useFormContext } from "react-hook-form"
import { useGetMessages } from "../../../graphql/hooks"
import { SUBSCRIBE_TO_MESSAGES } from "../../../graphql/subscriptions"
import { ChatFormValues } from "../types"
import { MessageItem } from "./Message"

import styles from './styles.module.css'

export const MessageViewer: FC = () => {

    // const { data: messages } = useSubscribeToMessages()

    const { subscribeToMore, data: messages } = useGetMessages()

    console.log(messages);


    const { watch } = useFormContext<ChatFormValues>()

    const user = watch('nickName')

    useEffect(() => {
        subscribeToMore({
            document: SUBSCRIBE_TO_MESSAGES,
            updateQuery: (prev, { subscriptionData }) => {
                if (!subscriptionData.data.getMessages?.messages) return prev;

                const newFeedItem = subscriptionData.data.getMessages?.messages;

                return Object.assign({}, prev, {
                    getMessages: {
                        messages: newFeedItem
                    }
                });
            }
        })
    }, [])





    return (
        <div className={styles.Container}>
            {messages.map((message) => {
                return (<MessageItem message={message} key={message.id} user={user} />)
            })}
        </div>
    )
}