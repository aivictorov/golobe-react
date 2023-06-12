import AccountTabsFavFlightsCard from './AccountTabsFavFlightsCard';
import { useContext } from 'react';
import { AppContext } from '../../../App';

const AccountTabsFavFlights = () => {
    const { userData } = useContext(AppContext);

    return (
        <div
            className="account-bookings__content"
            tab-content="flights"
            tab-group="favourites"
        >
            {userData.map((item) => {
                return (
                    <AccountTabsFavFlightsCard
                        key={item}
                        id={item}
                    />
                )
            })}
        </div>
    );
}

export default AccountTabsFavFlights;