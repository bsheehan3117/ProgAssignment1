import Header from "./Header";
import Main from "./Main";
import { FakeStackOverflowProps } from "../types/types";
import { useFakeStackOverflow } from "../hooks/useFakeStackOverflow";

/**
 * Component that represents the parent container of the application.
 * @param {FakeStackOverflowProps} props - The props to be passed to the component. 
 * @returns JSX.Element containing Header and Main components.
 */
const FakeStackOverflow = ({ app }: FakeStackOverflowProps) => {
    const { search, mainTitle, setQuesitonPage } = useFakeStackOverflow();

    return (
        <>
            <Header search={search} setQuesitonPage={setQuesitonPage} />
            <Main
                search={search}
                app={app}
                title={mainTitle}
                setQuesitonPage={setQuesitonPage}
            />
        </>
    );
}

export default FakeStackOverflow;
