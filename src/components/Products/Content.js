
import { useState, useEffect } from "react";


import { useLocation, useHistory } from 'react-router-dom'


import Breadcrumbs from '@mui/material/Breadcrumbs';
import Card from '@mui/material/Card';
import Search from './Search'

import CardHeader from '@mui/material/CardHeader';

import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link, NavLink } from 'react-router-dom';
import CardMedia from '@mui/material/CardMedia';
import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
export default function Content() {
    const [dataAreas, setDataAreas] = useState([]);
    const [openHidden, setOpenHidden] = useState(false);
    const [search, setSearch] = useState("");
    var postlist = [
        { id: 1, image: "https://bucket.nhanh.vn/store4/127854/ps/20220902/02092022110932_6e41864988e04dbe14f1.jpg", price: "120.000đ", title: "Thức ăn cho chó", location: "139-141 Nguyễn Gia Trí, P.25, Q.Bình Thạnh, TP. Hồ Chí Minh" },
        { id: 2, image : "https://bucket.nhanh.vn/store4/127854/ps/20220902/02092022110915_0009560f5ba69ef8c7b7.jpg", price: "120.000đ", title: "Thức ăn mèo whisaki", location: "161 Xa Lộ Hà Nội, P. Thảo Điền, Q.2, TP. Hồ Chí Minh" },
        { id: 3, image : "https://bucket.nhanh.vn/store4/127854/ps/20220902/02092022110950_94ef91149dbd58e301ac.jpg", price: "120.000đ",title: "Thức ăn mèo mẹ", location: "1311 Ông Cao Thắng, P.Tân Kì, Q.10, TP. Hồ Chí Minh" },
        { id: 4, image : "https://bucket.nhanh.vn/store4/127854/ps/20220807/07082022120815_3dd805fa8a5e4800114f.jpg", price: "120.000đ",title: "Thức ăn cho lớn", location: "15 Gò Xoài, P.An Đới, Q.Tân Phú, TP. Hồ Chí Minh" },
        { id: 5,image : "https://bucket.nhanh.vn/store4/127854/ps/20220807/07082022120816_73251247f0f332ad6be2.jpg", price: "120.000đ", title: "Thức ăn mèo tony", location: "415 Lê Văn Việt, P.Tân Thành, Q.9, TP. Thủ Đức" },]
        var userList = [
            { id: 1, title: "Chung cư lô A", location: "139-141 Nguyễn Gia Trí, P.25, Q.Bình Thạnh, TP. Hồ Chí Minh" },
            { id: 2, title: "LandMark Park", location: "161 Xa Lộ Hà Nội, P. Thảo Điền, Q.2, TP. Hồ Chí Minh" },
            { id: 3, title: "Ocen City", location: "1311 Ông Cao Thắng, P.Tân Kì, Q.10, TP. Hồ Chí Minh" },
            { id: 4, title: "Ceberus", location: "15 Gò Xoài, P.An Đới, Q.Tân Phú, TP. Hồ Chí Minh" },
            { id: 5, title: "SBTC Entertainment", location: "415 Lê Văn Việt, P.Tân Thành, Q.9, TP. Thủ Đức" },]
        async function featchStationist() {
            try {
        
             
              const requestURL = `http://www.bibi.somee.com/api/Product?search=${search}`;
        
              const response = await fetch(requestURL, {
                method: `GET`,
                headers: {
                  'Content-Type': 'application/json',
                 
                },
              });
              const responseJSON = await response.json();
        
              const  data  = responseJSON;
        
              setDataAreas(responseJSON.data)
            
           console.log("aa fetch", responseJSON.data)
        
            } catch (error) {
              console.log('Fail to fetch product list: ', error)
            }
          }
    
    useEffect(() => {
        featchStationist();
    }, [search]);
   
    const callbackFunction = (childData, alert) => {
        
    };
    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }

       
    };
    const callbackSearch = (childData) => {
        setSearch(childData)

    };
    return (
        <section className="relative py-16 w-full ">

            <div className="float-right -mt-16 mr-20  ">

                <Search parentCallback={callbackSearch} />
            </div>

            <div className="grid grid-cols-3 mt-8 pt-12 clear-both">
               
                {dataAreas.map((post, index) => {

                    return (
                        <div key={post.id} className='justify-center items-center mx-auto mb-16 '>
                            <Card sx={{ width: 345 }} >
                                <CardHeader
              

                                            action={post?.idAccount == localStorage.getItem('id-token')
                                        ? <div className="text-2xl ml-5 cursor-pointer   mr-8" >
                                            ...
                                        </div>
                                        : ""}


                                />
                                <CardMedia
                                    className="h-80 "

                                    height="232"
                                    image={post?.image}
                                />
                                     <CardContent className="">
                                    <Link to={{
                                        pathname: "/Products/Details",
                                        state: {
                                            name: post,
                                        }
                                    }} ><Typography variant="h5" > {post?.title.length <= 20 ? post?.title : post?.title.slice(0, 20).concat("...")} </Typography></Link>
                                      <Typography className="font-bold mt-3">{post.price}.000d</Typography>
                                </CardContent>
                                  
                              
                            </Card>
                        </div>

                    )


                }) }
            </div>


        </section>
    );
}
