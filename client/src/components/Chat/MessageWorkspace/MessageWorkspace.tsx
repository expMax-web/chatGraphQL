import { Controller, useFormContext } from "react-hook-form";
import { SendOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import { ChatFormValues } from "../types";

import styles from './styles.module.css'


const { TextArea } = Input;

export const MessageWorkspace = () => {

    const { handleSubmit, control } = useFormContext<ChatFormValues>()

    const sendMessage = (data: ChatFormValues) => {
        // отправить мутацию на сервер, чтобы записать сообщение
        console.log(data);
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

