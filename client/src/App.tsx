import { Chat } from "./components/Chat";
import { Sidebar } from "./components/Sidebar";

import styles from "./styles.module.css";


export const App = () => {
  return (
    <div className={styles.App}>
      <Sidebar />
      <Chat />
    </div>
  );
};
