import { Controller, useForm } from "react-hook-form";
import { SendOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import { DEFAULT_FORM_VALUES } from "./constants";
import { ChatFormValues } from "./types";

import styles from './styles.module.css'

const { TextArea } = Input;

export const MessageWorkspace = () => {

    const { handleSubmit, control, watch } = useForm<ChatFormValues>({
        defaultValues: DEFAULT_FORM_VALUES
    })

    const sendMessage = (data: ChatFormValues) => {
        // отправить мутацию на сервер, чтобы записать сообщение
        console.log(data);
    }

    console.log(watch("nickName"));


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

