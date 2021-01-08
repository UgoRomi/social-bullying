import Header from "./components/Header/Header";
import TypesChart from "./components/TypesChart/TypesChart";
import KnowAboutChart from "./components/KnowAboutChart/KnowAboutChart";
import DiscoveredChart from "./components/DiscoveredChart/DiscoveredChart";
import Footer from "./components/Footer/Footer";
import LibrariesDialog from "./components/LibrariesDialog/LibrariesDialog";
import {useState} from 'react'

function App() {
	const [dialogIsOpen, setDialogIsOpen] = useState(false)

	//TODO: Add a more prevalent "social" section
	return (
		<>
			<Header/>
			<KnowAboutChart/>
			<TypesChart/>
			<DiscoveredChart/>
			<Footer setDialogIsOpen={setDialogIsOpen}/>
			<LibrariesDialog dialogIsOpen={dialogIsOpen} setDialogIsOpen={setDialogIsOpen}/>
		</>
	);
}

export default App;
