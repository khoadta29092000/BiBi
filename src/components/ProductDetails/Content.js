
import { useState, useEffect } from "react";


import { useLocation, useHistory } from 'react-router-dom'


import Breadcrumbs from '@mui/material/Breadcrumbs';
import Card from '@mui/material/Card';


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
import { Heading3 } from "@material-tailwind/react";
export default function Content(props) {
    const [dataAreas, setDataAreas] = useState([]);
    const [openHidden, setOpenHidden] = useState(false);
    console.log("0000000000000000", props?.location);
    const [search, setSearch] = useState("");
    var sameBLog = [
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
        
             
              const requestURL = `http://www.subcriptionmilk.somee.com/api/Stations/Getallstations?search=${search}`;
        
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
        <section className="relative py-16 x w-full h-full">
<div className="grid grid-cols-3 mx-352 mt-20">
<div className="col-span-1">
<Card sx={{ Width: 500, }} className=" w-96">

<CardMedia
    component="img"
    height="150"
    className="h-96 "
    image="https://bucket.nhanh.vn/store4/127854/ps/20220902/02092022110932_6e41864988e04dbe14f1.jpg"
/>
</Card>
</div>
<div className="col-span-2 ">
   <Heading3>Thức ăn cho chó</Heading3>
   <p className="mb-2">Thương hiệu: Kota | Mã sp: 01</p>
   <hr></hr>
   <p className="text-2xl font-semibold my-2">400.000 đ</p>
   <hr></hr>
   <p className=" my-2">điện thoại hỗ trợ: 0335739928</p>
   <hr></hr>
   <p className="font-semibold mt-2">số lượng</p>
    <input className="border-black border-2 h-8 w-24"></input>
    <button className="ml-4 h-8 w-44 bg-yellow-300">Thêm vào giỏ hàng</button> 
    <button className="ml-4 h-8 w-44 bg-yellow-300">yêu thích sản phẩm</button>
</div>
</div>
<div className="mx-64 mt-20">
                        <h2 className="ml-2 font-bold mb-12 text-2xl"> sản phẩm liên quan</h2>
                    </div>
                    <div className=" mx-64 grid grid-cols-4 gap-12 ">
                        {sameBLog.map((blog, index) => {
                            return (
                                <Card key={blog.id} sx={{ minWidth: 125 }} >
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        className="h-52"
                                        image={blog?.image}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {blog?.title}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Link to={{
                                            pathname: "/post/view",
                                            state: {
                                                name: blog
                                            }
                                        }} > <Button size="small">Learn More</Button></Link>
                                    </CardActions>
                                </Card>
                            )
                        })}
                    </div>
                

        </section>
    );
}
