import { useEffect, useState } from "react";
import Checkbox from "../../elements/Checkbox/Checkbox";
import ListingFilterHeader from './ListingFilterHeader';

const ListingFilterCheckboxes = ({ name, title, items, changeFilter, resetTrigger }) => {

    const [params, setParams] = useState([]);

    useEffect(() => {
        changeFilter({ [name]: params });
    }, [params])

    const [displayFilter, setDisplayFilter] = useState(true);

    if (items.length > 1) {
        return (
            <div className="filter-item">

                <ListingFilterHeader
                    title={title}
                    action={() => { setDisplayFilter(!displayFilter) }}
                />

                {displayFilter &&
                    <div
                        className="filter-item__content filter-item__content--column"
                        accordeon-content={name}
                    >
                        {items.map((item, index) => {
                            return (
                                <Checkbox
                                    key={index}
                                    name={item}
                                    onChangeFunction={(event) => {
                                        if (event.target.checked) {
                                            setParams([...params, event.target.name])
                                        } else {
                                            setParams(params.filter((param) => param !== event.target.name))
                                        };
                                    }}
                                />
                            )
                        })}
                    </div>
                }
            </div>
        );
    }
}

export default ListingFilterCheckboxes;