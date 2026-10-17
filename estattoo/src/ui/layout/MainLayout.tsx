import Footer from "./partials/Footer";
import { Header } from "./partials/Header";

export const MainLayout = ({children}: { children: React.ReactNode }) => {

    return (<>
        <Header />
        <div className="ps-content">
            {children}
        </div>
        <Footer />
    </>);


}