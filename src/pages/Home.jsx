import '../scss/home.scss';
import '../scss/home-dark.scss';
import Main from '../layouts/Main';
import { MainIntro, About, InfoTiles, Skills } from '../components';


function Home() {

    return (
        <Main>
            <MainIntro/>
            <About/>
            <InfoTiles/>
            <Skills/>
        </Main>
    )
}


export default Home;