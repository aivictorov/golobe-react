import { useContext } from 'react';
import { AppContext } from './../App';
import { Navigate } from 'react-router-dom';
import AccountCover from "../components/sections/AccountCover/AccountCover";
import AccountTabs from "../components/sections/AccountTabs/AccountTabs";
import Footer from "../components/sections/Footer/Footer";
import HeaderInner from "../components/sections/HeaderInner/HeaderInner";

const Account = () => {
    const { userAuth } = useContext(AppContext);

    if (userAuth) {
        return (
            <>
                <HeaderInner />
                <main className="account">
                    <AccountCover />
                    <AccountTabs />
                </main>
                <Footer />
            </>
        );
    } else {
        return <Navigate to="/" />;
    };
}

export default Account;