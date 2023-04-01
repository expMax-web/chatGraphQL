import { FormProvider, useForm } from "react-hook-form";

import { DEFAULT_FORM_VALUES } from "./constants";
import { MessageViewer } from "./MessageViewer";
import { MessageWorkspace } from "./MessageWorkspace";
import { ChatFormValues } from "./types";

import styles from "./styles.module.css";


export const Chat = () => {
  const form = useForm<ChatFormValues>({
    defaultValues: DEFAULT_FORM_VALUES
  })


  return (
    <FormProvider {...form}>
      <div className={styles.Chat} >
        <MessageViewer />
        <MessageWorkspace />
      </div >
    </FormProvider>
  );
};
