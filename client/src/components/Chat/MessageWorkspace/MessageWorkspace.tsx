import { Controller, useFormContext } from "react-hook-form";
import { SendOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import { ChatFormValues } from "../types";
import { useCreateMessage } from "../../../graphql/hooks";

import styles from './styles.module.css'

const { TextArea } = Input;

export const MessageWorkspace = () => {

    const { handleSubmit, control } = useFormContext<ChatFormValues>()

    const [createMessage] = useCreateMessage()

    const sendMessage = async (data: ChatFormValues) => {

        if (!data.nickName || !data.message) {
            //Предупредить об ошибке

            return
        }

        const createMessageResult = await createMessage({
            variables: {
                request: {
                    user: data.nickName,
                    content: data.message
                }
            }
        })


        // Обработка ошибки
        console.log(createMessageResult.data?.result);
    }


    return (<form className={styles.Workspace}>
        <Controller
            control={control}
            rules={{
                maxLength: 100,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
                <Input
                    placeholder="Nickname"
                    onBlur={onBlur}
                    onChange={onChange}
                    value={value}
                    className={styles.NickNameInput} />)}
            name="nickName"
        />
        <Controller
            control={control}
            rules={{
                maxLength: 100,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
                <TextArea
                    placeholder="Please, enter your message"
                    onBlur={onBlur}
                    onChange={onChange}
                    value={value}
                    className={styles.TextArea}
                />)}
            name="message"
        />
        <Button type="primary" shape="circle" icon={<SendOutlined />} size="large" onClick={handleSubmit(sendMessage)} />
    </form>)
}

