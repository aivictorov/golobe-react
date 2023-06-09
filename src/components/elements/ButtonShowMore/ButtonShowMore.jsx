import Button from './../Button/Button';

const ButtonShowMore = ({ numberOfResults, setNumberOfResults }) => {
    return (
        <Button
            text="Show more"
            classes="dark bold w100"
            action={
                () => { setNumberOfResults(numberOfResults + 1) }
            }
        />
    );
}

export default ButtonShowMore;