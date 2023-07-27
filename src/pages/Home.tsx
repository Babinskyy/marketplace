import '../App.scss';
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Offers from '../components/Offers';
import Searchbar from '../components/Searchbar';

const Home = (): JSX.Element => {
    return (
        <div className="home">
            <Header/>
            <Searchbar/>
            <Categories/>
            <Offers/>
            <Footer/>
        </div>
    )
}

export default Home;