import { type } from 'os';
import '../App.scss';
import AddOffer from '../components/AddOffer';
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Offers from '../components/Offers';
import Searchbar from '../components/Searchbar';
import { useState, useEffect } from "react";


type HomeProps = {
    openOfferModal: boolean;
    setOpenOfferModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Home = (props:HomeProps): JSX.Element => {

   
    return (
        <div className="home">
            <Header setOpenOfferModal={props.setOpenOfferModal}/>
            <Searchbar/>
            <Categories/>
            <Offers/>
            <Footer/>
            <AddOffer openOfferModal={props.openOfferModal} setOpenOfferModal={props.setOpenOfferModal}/>
           
        </div>
    )
}

export default Home;