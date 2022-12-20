import { Loading } from 'notiflix/build/notiflix-loading-aio';

const Loader = props => {
    return (
        <>{Loading.dots("Loading")}</>
    )
}

export default Loader