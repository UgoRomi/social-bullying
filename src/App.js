import Header from "./components/Header/Header";
import TypesChart from "./components/TypesChart/TypesChart";
import KnowAboutChart from "./components/KnowAboutChart/KnowAboutChart";
import DiscoveredChart from "./components/DiscoveredChart/DiscoveredChart";

function App() {
	return (
		<>
			<Header/>
			<KnowAboutChart/>
			<TypesChart/>
			<DiscoveredChart/>
		</>
	);
}

export default App;
