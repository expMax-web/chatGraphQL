import { FormProvider, useForm } from "react-hook-form";
import { DEFAULT_FORM_VALUES } from "./constants";
import { MessageWorkspace } from "./MessageWorkspace";

import styles from "./styles.module.css";
import { ChatFormValues } from "./types";

export const Chat = () => {
  const form = useForm<ChatFormValues>({
    defaultValues: DEFAULT_FORM_VALUES
  })


  return (
    <FormProvider {...form}>
      <div className={styles.Chat} >
        <MessageWorkspace />
      </div >
    </FormProvider>
  );
};
