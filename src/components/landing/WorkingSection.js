//import Card from '@material-tailwind/react/Card';
import StatusCard from 'components/landing/StatusCard';
import { useState, useEffect } from "react";
import { Card } from "@mui/material";
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import React, { Component } from "react";
import Slider from "react-slick";

export default function WorkingSection() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };
    const [dataProducts, setDataProduct] = useState([]);
    var data = [
        { id: 1, title: "Fresh Milk", price: "300.000", decription: "Fresh milk from the farm has a shelf life of 2 or 3 days", category: "Milk", image1: "https://www.farmlyfresh.com/wp-content/uploads/2020/05/milk-buy-trail.png", image2: "https://www.farmlyfresh.com/wp-content/uploads/2020/04/milk-grid-h.jpg" },
        { id: 2, title: "Nut Milk", price: "160.000", decription: "Nut milk from the farm and so goodhas a shelf life of 2 or 3 month", category: "Milk", image1: "https://www.farmlyfresh.com/wp-content/uploads/2020/05/milk-buy-trail.png", image2: "https://www.farmlyfresh.com/wp-content/uploads/2020/04/milk-grid-h.jpg" },
        { id: 3, title: "Fresh milk", price: "200.000", decription: "Fresh milk from the farm has a shelf life of 2 or 3 days", category: "Milk", image1: "https://www.farmlyfresh.com/wp-content/uploads/2020/05/milk-buy-trail.png", image2: "https://www.farmlyfresh.com/wp-content/uploads/2020/04/milk-grid-h.jpg" },
        { id: 4, title: "Fresh milk", price: "100.000", decription: "Fresh milk from the farm has a shelf life of 2 or 3 days", category: "Milk", image1: "https://www.farmlyfresh.com/wp-content/uploads/2020/05/milk-buy-trail.png", image2: "https://www.farmlyfresh.com/wp-content/uploads/2020/04/milk-grid-h.jpg" },
        { id: 5, title: "Fresh milk", price: "400.000", decription: "Fresh milk from the farm has a shelf life of 2 or 3 days", category: "Milk", image1: "https://www.farmlyfresh.com/wp-content/uploads/2020/05/milk-buy-trail.png", image2: "https://www.farmlyfresh.com/wp-content/uploads/2020/04/milk-grid-h.jpg" },
        { id: 6, title: "Fresh milk", price: "600.000", decription: "Fresh milk from the farm has a shelf life of 2 or 3 days", category: "Milk", image1: "https://www.farmlyfresh.com/wp-content/uploads/2020/05/milk-buy-trail.png", image2: "https://www.farmlyfresh.com/wp-content/uploads/2020/04/milk-grid-h.jpg" },
        { id: 7, title: "Fresh milk", price: "100.000", decription: "Fresh milk from the farm has a shelf life of 2 or 3 days", category: "Milk", image1: "https://www.farmlyfresh.com/wp-content/uploads/2020/05/milk-buy-trail.png", image2: "https://www.farmlyfresh.com/wp-content/uploads/2020/04/milk-grid-h.jpg" },
        { id: 8, title: "Fresh milk", price: "200.000", decription: "Fresh milk from the farm has a shelf life of 2 or 3 days", category: "Milk", image1: "https://www.farmlyfresh.com/wp-content/uploads/2020/05/milk-buy-trail.png", image2: "https://www.farmlyfresh.com/wp-content/uploads/2020/04/milk-grid-h.jpg" },];
    useEffect(() => {
        featchPakageList();
    }, []);
    async function featchPakageList() {
        try {


            const requestURL = `http://www.bibi.somee.com/api/Product`;

            const response = await fetch(requestURL, {
                method: `GET`,
                headers: {
                    'Content-Type': 'application/json',

                },
            });
            const responseJSON = await response.json();

            const data = responseJSON;

            setDataProduct(responseJSON.data)

            console.log("aa fetch", responseJSON.data)

        } catch (error) {
            console.log('Fail to fetch product list: ', error)
        }
    }



    return (
        <section className="pb-20  -mt-32">
            <div className="container max-w-7xl mx-auto px-4">
                <div className="flex flex-wrap relative z-50">
                    <StatusCard color="red" icon="stars" title="Realse Product">
                    Affordable price and high-quality 
 <br />pet food items
                    </StatusCard>
                    <StatusCard
                        color="lightBlue"
                        icon="autorenew"
                        title="Pet Toy"
                    >
                        Various fun and useful accessories 
<br />
for your pet to choose from
                    </StatusCard>
                    <StatusCard
                        color="teal"
                        icon="fingerprint"
                        title="Service Delivery"
                    >
                       Regular promotion and fast delivery

                    </StatusCard>
                </div>
                <div className='mt-32 text-center '>
                    <h2 className='font-bold text-5xl mb-5'>Discover Our Products</h2>
                    <p className='text-gray-500 text-sm '> All products will be delivered the following day due to shortage of staff</p>
                   
                    <div className='mt-5 w-full h-full  grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 2xl:grid-cols-4 gap-4'>
                        
                        {dataProducts.map((product, index) => {
                            return (
                                <Card key={product.id} className=" relative mx-auto " sx={{ minWidth: 100 }}>
                                    <div className="relative w-72 h-56 text-white overflow-hidden cursor-pointer transition-all duration-700 card">
                                        <CardMedia
                                            component="img"
                                            image={product?.image}
                                            className="absolute inset-0 h-72   flex justify-center items-center bg-white transition-all duration-500 delay-200 z-20 hover:opacity-0"
                                        />
                                        <CardMedia
                                            component="img"
                                            image="https://bucket.nhanh.vn/store4/127854/logo_1659511801_aaa9388040f31356aaa9388040f31356BibiPetSop-01.png"
                                            className="absolute inset-0  flex justify-center items-center bg-black transition-all hover:scale-125 z-10 card-back"
                                        />
                                    </div>

                                    <CardContent>
                                        <Typography gutterBottom variant="h12" className='' component="div">
                                            {product?.title}
                                        </Typography>
                                        <Typography gutterBottom variant="h10" className='text-green-700 font-semibold' component="div">
                                            {product?.price.toFixed(3).replace(/\d(?=(\d{3})+\.)/g, "$&.")}<a className='underline'>đ</a>
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Link to={{
                                            pathname: "/post/view",
                                            state: {
                                                name: product
                                            }
                                        }} > <Button size="small">Learn More</Button></Link>
                                    </CardActions>
                                </Card>
                            )
                        })}
                    </div>
                   
                </div>
               

                   </div>
        </section>
    );
}
