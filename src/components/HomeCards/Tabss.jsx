import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
// import useAxios from '../../hooks/useAxios';
// import axios from 'axios';
import HomeCard from './HomeCard';
import useAxios from '../../hooks/useAxios';
import Banner from '../Banner';


const Tabss = () => {
    const [data, setData] = useState([]);

    // filter state
    
    const [searchTerm, setSearchTerm] = useState('')

    // console.log(data);

    const axios = useAxios()
    const apiUrl = '/homeCards';

    useEffect(() => {


        axios.get(apiUrl)
            .then(res => {
                setData(res.data)
                
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });

    }, [apiUrl, axios])

    

    const filteredData = data.map((card) => {
        const lowerCaseTitle = card.title.toLowerCase();
        const lowerCaseSearchTerm = searchTerm.toLowerCase();

        if (lowerCaseTitle.includes(lowerCaseSearchTerm)) {
            return { ...card, isMatching: true };
        }

        return card;
    });

    return (
        <div >
            
            <Banner onSearch={setSearchTerm} />
            <div className='mt-56 mb-56  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>

                
                {filteredData.map((card, index) => (
                    <HomeCard
                        key={index}
                        data={card}
                        isMatching={card.isMatching} 
                    />
                ))}

            </div>
        </div>
    );
};

export default Tabss;