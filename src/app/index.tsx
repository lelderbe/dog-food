import s from './styles.module.css';
import { HomePage } from '../pages/home-page';
import { Footer } from '../components/footer';
import { Header } from '../components/header';
import { useState } from 'react';

export function App() {
    const [search, setSearch] = useState('');

    return (
        <>
            <Header />
            <HomePage />
            <Footer />
        </>
    );
}
