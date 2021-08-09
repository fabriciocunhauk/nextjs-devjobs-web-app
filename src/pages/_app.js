
import { CardsContext } from '../context/CardsContext';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
    return (
        <CardsContext>
            <Component {...pageProps} />
        </CardsContext>
    )
}

export default MyApp;