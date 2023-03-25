import { useQuery } from "@apollo/client";
import { Chat } from "./components/Chat";
import { Sidebar } from "./components/Sidebar";
import { TEST_QUERY } from "./test/testQuery";

import styles from "./styles.module.css";


export const App = () => {
  const { data } = useQuery(TEST_QUERY);

  console.log(data);

  return (
    <div className={styles.App}>
      <Sidebar />
      <Chat />
    </div>
  );
};
