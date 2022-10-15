import SearchIcon from '@mui/icons-material/Search';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import { maxHeight } from '@mui/system';
import { useState, useEffect } from "react";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

export default function Content() {
    const [dataArea1s, setDataAreas] = useState([]);
    const [openHidden, setOpenHidden] = useState(false);
    const [search, setSearch] = useState("");
    var dataAreas = [
        { id: 1, title: "BiBi Store", address: "35/3, Nguyễn Quý Anh, P. Tân Sơn Nhì, Q. Tân Phú, TP. Hồ Chí Minh" },
    ]
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
   

    return (
        <section className="relative py-16 w-full ">
            <div className="max-w-7xl mx-auto p-10  ">
                <Paper
                    component="form"
                    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: maxHeight }}
                >
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Search Areas"
                         onChange={e => setSearch(e.target.value)}
                    />
                    <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                        <SearchIcon />
                    </IconButton>

                </Paper>
                {dataAreas.map((Area, index) => {
                    return (
                        <div className=' my-7  mx-auto cursor-pointer '>
                            <div className='border-2 pl-10 text-gray-600 py-5' onClick={() => setOpenHidden(!openHidden)}>
                                <i className='text-lg font-bold'>{Area.title}</i>
                                <i className='float-right mr-5'>  {openHidden == false ? <ArrowDropDownIcon className="" /> : <ArrowDropUpIcon className="" />} </i>
                            </div>
                            <div className= {openHidden == false ? "hidden" : "pl-12 border-l-2 border-r-2 border-b-2 text-gray-500 py-10"} >
                                <p className={openHidden == false ? "hidden" : ""}>
                                    <LocationOnIcon className='-mt-1 mr-2' />
                                    {Area.address}
                                </p>
                                <div className={openHidden == false ? "hidden mt-5" : "mt-5"}>
                                    <AccessTimeIcon className='-mt-1 mr-2' />
                                     Open : 7:30 AM - 21:00 PM                        
                                     
                                </div>

                            </div>

                        </div>
                    )
                })}
            </div>

        </section>
    );
}
