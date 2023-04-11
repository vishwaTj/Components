import Accordion from "../components/Accordion";

const AccordionPage = () => {
   const items = [
    {
        id:'l2kj5',
        label:'Can I use React on a Project',
        text:'You can use React on any project you want'
    },
    {
        id:'98sd',
        label:'Can I use React on a Project',
        text:'You can use React on any project you want'
    },
    {
        id:'lasd84',
        label:'Can I use React on a Project',
        text:'You can use React on any project you want'
    }
   ]
  return <Accordion items={items} />
    
}

export default AccordionPage;