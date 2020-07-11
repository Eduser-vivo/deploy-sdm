import React, { useState } from 'react'
import ScrollMenu from 'react-horizontal-scrolling-menu'
import '../../styles/Scroll.css'
import { Button } from '@material-ui/core';

export const CategorieProduct = () => {

    const [selected, setSelected] = useState('item1');

    const checkPair=nbre=>{
        if(nbre %2 === 0)
            return true
        return false
    }

    const MenuItem = ({text, selected, index}) => {
        return <div className={`menu-item ${selected ? 'active' : ''}`}>
                    <Button color={checkPair(index) ? "default": "primary"} fullWidth={true} variant="contained" 
                            style={{width:'110px', height:'80px', borderRadius:0}}>
                         {text}
                    </Button>
            </div>;
      };

     const Menu = (list, selected) =>
      list.map((el, index) => {
        const {name} = el;
        return <MenuItem text={name} key={name} selected={selected} index={index} />;
      });

      const Arrow = ({ text, className }) => {
        return (
          <div className={className} style={{fontSize:'40px', fontWeight:'bold'}} >{text}</div>
        );
      };

      const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
      const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });

    const onselect=(key)=>{
        setSelected(key);
    }

    const Data = Menu(list, selected);

    return (
        <div className="App">
            <ScrollMenu 
                data={Data}
                arrowLeft={ArrowLeft}
                arrowRight={ArrowRight}
                selected={selected}
                onSelect={(key)=>onselect(key)}

            />
        </div>
    )
}

const list = [
    { name: 'item1' },
    { name: 'item2' },
    { name: 'item3' },
    { name: 'item4' },
    { name: 'item5' },
    { name: 'item6' },
    { name: 'item7' },
    { name: 'item8' },
    { name: 'item9' }
  ];