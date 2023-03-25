import { MessageWorkspace } from "./MessageWorkspace";

import styles from "./styles.module.css";

export const Chat = () => {

  return (
    <div className={styles.Chat} >
      <MessageWorkspace />
    </div >
  );
};
