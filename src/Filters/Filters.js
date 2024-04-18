import { Accordion, AccordionSummary, AccordionDetails, div, Rating } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useRef, useState } from "react";
import './Filters.css'

export const Filters = ({products,setProducts}) => {
    let [categeories,setCategeories]=useState([])
    const [showInput,setShowInput]=useState(false)
    let filterdCategories=useRef([])
    let [value,setValue]=useState(1) 
       products.forEach((e)=>{
        if(!categeories.includes(e.category)) setCategeories([...categeories,e.category])
    })
    function filterProducts(event,category){
        if(event.target.checked){
            if(filterdCategories.current.includes(category)){
                filterdCategories.current.push(category)
            }
        }
        else{
            filterdCategories.current=filterdCategories.current.filter((e)=> e!==category)
        }
        if(filterdCategories.current.length){
            setProducts(products.filter((e)=>filterdCategories.includes(e.category)))
        return;
        }
        else{
            setProducts(products)
        }
    }
    function filterByRating(value){
        setValue(value);
        if(filterdCategories.current.length){
            let test = products.filter((e)=>filterdCategories.current.includes(e.category));
            setProducts(test.filter((e)=> Math.round(e.rating.rate)==value))
            return;
        }
        setProducts(products.filter((e)=>Math.round(e.rating.rate)==value))
        if(!value){
            setProducts(products)
        }
    }
   
    return (
        <div style={{ padding: 7 }}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<KeyboardArrowDownIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <div>Categeories</div>
                </AccordionSummary>
                <AccordionDetails>
                    <div>
                        { categeories&&categeories.map((e)=>{
                       return(
                      <h3><input onchange={(event)=>{filterProducts(e,event)}} type="checkbox"/>{e}</h3>
                       ) })}
                    </div>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<KeyboardArrowDownIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <div>Rating</div>
                </AccordionSummary>
                <AccordionDetails>
                <Rating
                      name="simple-controlled"
                      value={value}
                      onChange={(event, newValue) => {
                        filterByRating(newValue);
                      }}
                    />
                    
                </AccordionDetails>
            </Accordion>
            

        </div>
    );
};

export default Filters;