import { Typography, } from "antd"
import { FC } from "react"
import cn from "classnames"

import { Message } from "../../../../graphql/types"

import styles from './styles.module.css'

interface Props {
    message: Message
    user: string
}

export const MessageItem: FC<Props> = ({ message, user }) => {

    const isThisUserMessage = user === message.user;

    return (
        <div className={cn(styles.Container, { [styles.UserMessageContainer]: isThisUserMessage })}>
            <div
                className={styles.NickName}
            >
                {message.user.slice(0, 1).toUpperCase()}
            </div>
            <div className={cn(styles.Message, { [styles.UserMessage]: isThisUserMessage })}>
                <Typography.Text className={cn({ [styles.UserMessageContent]: isThisUserMessage })}>{message.content}</Typography.Text>
            </div>
        </div>
    )
}