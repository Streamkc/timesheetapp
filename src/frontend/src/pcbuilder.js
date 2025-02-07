import React from 'react';
import {useState, useEffect,useRef, useCallback, useMemo} from 'react';

const jsonfile={
    "item":[
    {"name": "model v", "type": "cpu", "model": "b650i", "imgUrl": "https://i.imgur.com/oqvkxzQ.jpeg"}, 
    {"name": "model v", "type": "cpu", "model": "b650i", "imgUrl": "https://i.imgur.com/oqvkxzQ.jpeg"} 
    ]
}

const fetchdata= async (url)=>{
    const response= await fetch(url, 
            {
                method:'get', 
                mode: 'cors',
                headers:{
                    'Content-Type': 'application/json',
                    'credentials': 'include',  
                }
            }
        )
        .then(response=>{ return response.json(); })
        .then(data=>
                {
                    return data;
                }
        )
}

const Pcparts=({entry})=>{

    const style={
        background: "white",
        width: "10em",
        border: "1px solid black",
    };
    const imgstyle= {
        width: "10em",
        height: "10em",
        objectFit: "contain",
        overflow: "none",
    };
    
    const styleAltA={background: "white"};
    const styleAltB={background: "grey"};

    return(
        <div style={style}>
            <div style={styleAltA}>
                <h3>{entry.name}</h3>
            </div>
            <div style={styleAltB}>
                {entry.type}
            </div>
            <div style={styleAltA}>
                {entry.model}
            </div>
            <div style={styleAltB}>
                <img style={imgstyle} src={entry.imgUrl} /> 
            </div>
        </div>
    );
}

const Pcbuild= ()=>{
    const mybuild={
        cpu:{
            name:"test",
            price:"$100"
        },
        gpu:{
            name:"test",
            price:"$100"
        },
        motherbaord:{
            name:"test",
            price:"$100"
        }
    }
    const [builid, setbuild] = useState("");
    const partpickerRef= useRef(null);
    const list= jsonfile.item;

    const partcpu= list.filter(entry=>entry.type==='cpu') ;
    
    const style={
        display: "flex",
        flexDirection: "row",
    };
        
    const clickevent= (name, event)=>{
        try{
            let color= "red";
            const element= document.getElementById(name);
            const curColor= element.style.background;
            if(curColor== "red") color= curColor;
            element.style.background= color;

            const partpicker= document.getElementById("partpicker");
            const curDisplay= partpicker.style.display;
            if(curDisplay=== "block"){ 
                partpicker.style.display= "none";
            }
            if(curDisplay=== "none"){ 
                const mouse= event;
                const x= mouse.clientX; 
                const y= mouse.clientY; 
                const cood= element.getBoundingClientRect();

                partpicker.style.position= "fixed";
                partpicker.style.bottom= "0";
                partpicker.style.width= "100%";
                partpicker.style.height= "40%";
                partpicker.style.zIndex = 2;
                partpicker.style.display= "block";
            }

        }catch(error){
            console.log(error);
        }
    }

    return(
    <div id="mybuild" style={style} >
        <div >
        <h2> My Build </h2>
        <ol>
            <li>
                <div id="mycpu" onClick={(event)=>clickevent("mycpu", event)}>
                <h3>CPU</h3>
                <Pcparts entry={partcpu[0]} />
                </div>
            </li>
            <li>
                <div id="mymotherboard" onClick={(event)=>clickevent("mymotherboard", event)}>
                <h3>Motherboard</h3>
                <Pcparts entry={partcpu[0]} />
                </div>
            </li>
            <li>
                <div id="myram" onClick={(event)=>clickevent("myram", event)}>
                <h3>RAM</h3>
                <Pcparts entry={partcpu[0]} />
                </div>
            </li>
            <li>
                <div id="mypowersupply" onClick={(event)=>clickevent("mypowersupply", event)}>
                <h3>Power Supply</h3>
                <Pcparts entry={partcpu[0]} />
                </div>
            </li>
            <li>
                <div id="mygpu" onClick={(event)=>clickevent("mygpu", event)}>
                <h3>GPU</h3>
                <Pcparts entry={partcpu[0]} />
                </div>
            </li>
        </ol>
        </div>

    </div>
    );
}

const Cputable= ({url})=>{

    const hlist= ["name", "price", "graphic"];
    const [list, setList]= useState([]);

    const updateList = async () => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            setList(data);
        } catch (error) {
            console.error("Error fetching data: ", error);
            setList([]);
        }
    };

    useEffect(() => {
        updateList();
    }, [url]);

    return (
        <table>
            <thead align="left">
                <tr>
                {hlist.map((name, index)=>(
                        <th scope="col" key={index}>{name}</th>
                ))}
                </tr>
            </thead>
            <tbody>
                {list.map((item, index) => (
                    <tr scope="row" key={index}>
                        <td scope="col" >{item.name}</td>
                        <td scope="col">{item.price}</td>
                        <td scope="col">{item.graphic}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

const Pcdropdown= ()=>{

    const list=["CPU","GPU","Motherboard"];
    const selectionRef= useRef(null);

    const clickevent= (e)=>{
        console.log(selectionRef.current.value);
    }

    return (
    <select ref={selectionRef} onChange={(e)=>clickevent(e)}>
        {list.map((name,key)=>(
            <option value={name} key={key}>{name}</option>
        ))}
    </select>
    )
}

const Pcpartslist= ()=>{

    const list=["CPU","GPU","Motherboard"];
    const [url, setUrl] = useState("./public/cpu.json");
    const selectionRef= useRef(null);

    const clickevent= (e)=>{
        const val= selectionRef.current.value.toLowerCase();
        console.log(val);
        if(val==="cpu"){
            setUrl("./public/cpu.json");
        }
        if(val==="gpu"){
            setUrl("./public/gpu.json");
        }
        if(val==="motherboard"){
            setUrl("./public/motherboard.json");
        }
        
    }
    return(
        <div id="partslist" >
        <h2> Parts List </h2>
        <div>
            <select ref={selectionRef} onChange={(e)=>clickevent(e)}>
                {list.map((name,key)=>(
                    <option value={name} key={key}>{name}</option>
                ))}
            </select>
        </div>
        <div>
            <input id="partSearch" label="search"></input>
            <button onClick={()=>onclickevent()} > Search </button>
        </div>
        <Cputable url={url}/>
        </div>
    );
}

export {
    Pcpartslist,
    Pcbuild,
};
