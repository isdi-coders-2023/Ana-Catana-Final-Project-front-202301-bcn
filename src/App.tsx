import Loader from "./components/Loader/Loader";
import { useAppSelector } from "./store/hooks";

const App = (): JSX.Element => {
  const { isLoadingVisible } = useAppSelector((state) => state.ui);
  return <>{isLoadingVisible && <Loader />}</>;
};

export default App;
