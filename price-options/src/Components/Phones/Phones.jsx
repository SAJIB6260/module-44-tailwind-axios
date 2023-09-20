import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { BarChart, Bar, Cell, XAxis, YAxis, Tooltip } from 'recharts';
import { RotatingLines } from 'react-loader-spinner'


const Phones = () => {

    const [phones, setPhones] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        /* fetch("https://openapi.programming-hero.com/api/phones?search=iphone")
        .then(res => res.json())
        .then(data => setPhones(data.data)) */

        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const phoneData = data.data.data;
                const phoneWithFakeData = phoneData.map(phone => {
                    const obj = {
                        name: phone.phone_name,
                        price: parseInt(phone.slug.split('-')[1])
                    }
                    return obj
                })
                setPhones(phoneWithFakeData)
                setLoading(false)
            });
    }, []);

    return (
        <div>
            { loading &&  
                <RotatingLines
                    strokeColor="green"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="200"
                    visible={true}
                />
            }
            <h2>phone : {phones.length}</h2>
            <BarChart width={1200} height={400} data={phones}>
                <Bar dataKey="price" fill="#8884d8" />
                <XAxis dataKey={"name"}></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
            </BarChart>
        </div>
    );
};

export default Phones;