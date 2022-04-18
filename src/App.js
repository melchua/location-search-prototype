import styles from "./App.module.css";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className={styles.container}>
      <SearchBar />
    </div>
  );
}

export default App;
