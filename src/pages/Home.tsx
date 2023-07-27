import { type } from 'os';
import '../App.scss';
import AddOffer from '../components/AddOffer';
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Offers from '../components/Offers';
import Searchbar from '../components/Searchbar';
import { useState, useEffect } from "react";


const Home = (): JSX.Element => {

    const [openOfferModal, setOpenOfferModal] = useState<boolean>(false);

    return (
        <div className="home">
            <Header setOpenOfferModal={setOpenOfferModal}/>
            <Searchbar/>
            <Categories/>
            <Offers/>
            <Footer/>
            <AddOffer openOfferModal={openOfferModal} setOpenOfferModal={setOpenOfferModal}/>
        </div>
    )
}

export default Home;