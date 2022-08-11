import MainLayout from '../layouts/MainLayout';
import { MainIntro, About, InfoTiles, Skills } from '../components';


export default function Home() {

    return (
        <MainLayout pageName="home">
            <MainIntro/>
            <About/>
            <InfoTiles/>
            <Skills/>
        </MainLayout>
    )
}
