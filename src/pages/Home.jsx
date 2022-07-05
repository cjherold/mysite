import '../scss/home.scss';
import '../scss/home-dark.scss';

import { MainIntro, About, InfoTiles, Skills } from '../components';


function Home({ isDark }) {

    return (
        <div className={isDark ? 'dark-theme' : ''}>
            <MainIntro/>
            <About/>
            <InfoTiles/>
            <Skills/>
        </div>
    )
}


export default Home;