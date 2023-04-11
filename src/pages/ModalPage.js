import React, { useState } from 'react';
import Modal from '../components/Modal';
import Button from '../components/Button';


function ModalPage() {
   const [showModal,setShowModal] = useState(false);

   const handleClick = ()=>{
    setShowModal(!showModal);
   }
   
   const CloseModal = ()=>{
    setShowModal(!showModal);
   }

   const actionBar = <div>
        <Button onClick={CloseModal} primary>
            I accept
        </Button>
   </div>
   const modal = (<Modal onClose={CloseModal} actionBar={actionBar}>
       <p>Here is an important agreement for you to accept</p>
    </Modal>);

  return (
    <div>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec ullamcorper lectus nunc, at volutpat purus porttitor nec.
        Suspendisse et scelerisque risus, semper pulvinar nisl.
         Quisque eu orci maximus, interdum felis nec, malesuada lacus.
         Integer eleifend, felis pharetra rutrum fermentum, neque sem imperdiet urna, pretium tincidunt erat velit at lorem.
         </p>
         <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec ullamcorper lectus nunc, at volutpat purus porttitor nec.
        Suspendisse et scelerisque risus, semper pulvinar nisl.
         Quisque eu orci maximus, interdum felis nec, malesuada lacus.
         Integer eleifend, felis pharetra rutrum fermentum, neque sem imperdiet urna, pretium tincidunt erat velit at lorem.
         </p>
         <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec ullamcorper lectus nunc, at volutpat purus porttitor nec.
        Suspendisse et scelerisque risus, semper pulvinar nisl.
         Quisque eu orci maximus, interdum felis nec, malesuada lacus.
         Integer eleifend, felis pharetra rutrum fermentum, neque sem imperdiet urna, pretium tincidunt erat velit at lorem.
         </p>
         <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec ullamcorper lectus nunc, at volutpat purus porttitor nec.
        Suspendisse et scelerisque risus, semper pulvinar nisl.
         Quisque eu orci maximus, interdum felis nec, malesuada lacus.
         Integer eleifend, felis pharetra rutrum fermentum, neque sem imperdiet urna, pretium tincidunt erat velit at lorem.
         </p>
         <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec ullamcorper lectus nunc, at volutpat purus porttitor nec.
        Suspendisse et scelerisque risus, semper pulvinar nisl.
         Quisque eu orci maximus, interdum felis nec, malesuada lacus.
         Integer eleifend, felis pharetra rutrum fermentum, neque sem imperdiet urna, pretium tincidunt erat velit at lorem.
         </p>
         <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec ullamcorper lectus nunc, at volutpat purus porttitor nec.
        Suspendisse et scelerisque risus, semper pulvinar nisl.
         Quisque eu orci maximus, interdum felis nec, malesuada lacus.
         Integer eleifend, felis pharetra rutrum fermentum, neque sem imperdiet urna, pretium tincidunt erat velit at lorem.
         </p>
         <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec ullamcorper lectus nunc, at volutpat purus porttitor nec.
        Suspendisse et scelerisque risus, semper pulvinar nisl.
         Quisque eu orci maximus, interdum felis nec, malesuada lacus.
         Integer eleifend, felis pharetra rutrum fermentum, neque sem imperdiet urna, pretium tincidunt erat velit at lorem.
         </p>
         <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec ullamcorper lectus nunc, at volutpat purus porttitor nec.
        Suspendisse et scelerisque risus, semper pulvinar nisl.
         Quisque eu orci maximus, interdum felis nec, malesuada lacus.
         Integer eleifend, felis pharetra rutrum fermentum, neque sem imperdiet urna, pretium tincidunt erat velit at lorem.
         </p>
         <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec ullamcorper lectus nunc, at volutpat purus porttitor nec.
        Suspendisse et scelerisque risus, semper pulvinar nisl.
         Quisque eu orci maximus, interdum felis nec, malesuada lacus.
         Integer eleifend, felis pharetra rutrum fermentum, neque sem imperdiet urna, pretium tincidunt erat velit at lorem.
         </p>
         <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec ullamcorper lectus nunc, at volutpat purus porttitor nec.
        Suspendisse et scelerisque risus, semper pulvinar nisl.
         Quisque eu orci maximus, interdum felis nec, malesuada lacus.
         Integer eleifend, felis pharetra rutrum fermentum, neque sem imperdiet urna, pretium tincidunt erat velit at lorem.
         </p>
         <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec ullamcorper lectus nunc, at volutpat purus porttitor nec.
        Suspendisse et scelerisque risus, semper pulvinar nisl.
         Quisque eu orci maximus, interdum felis nec, malesuada lacus.
         Integer eleifend, felis pharetra rutrum fermentum, neque sem imperdiet urna, pretium tincidunt erat velit at lorem.
         </p>
         <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec ullamcorper lectus nunc, at volutpat purus porttitor nec.
        Suspendisse et scelerisque risus, semper pulvinar nisl.
         Quisque eu orci maximus, interdum felis nec, malesuada lacus.
         Integer eleifend, felis pharetra rutrum fermentum, neque sem imperdiet urna, pretium tincidunt erat velit at lorem.
         </p>
         <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec ullamcorper lectus nunc, at volutpat purus porttitor nec.
        Suspendisse et scelerisque risus, semper pulvinar nisl.
         Quisque eu orci maximus, interdum felis nec, malesuada lacus.
         Integer eleifend, felis pharetra rutrum fermentum, neque sem imperdiet urna, pretium tincidunt erat velit at lorem.
         </p>
         <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec ullamcorper lectus nunc, at volutpat purus porttitor nec.
        Suspendisse et scelerisque risus, semper pulvinar nisl.
         Quisque eu orci maximus, interdum felis nec, malesuada lacus.
         Integer eleifend, felis pharetra rutrum fermentum, neque sem imperdiet urna, pretium tincidunt erat velit at lorem.
         </p>
         <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec ullamcorper lectus nunc, at volutpat purus porttitor nec.
        Suspendisse et scelerisque risus, semper pulvinar nisl.
         Quisque eu orci maximus, interdum felis nec, malesuada lacus.
         Integer eleifend, felis pharetra rutrum fermentum, neque sem imperdiet urna, pretium tincidunt erat velit at lorem.
         </p><p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec ullamcorper lectus nunc, at volutpat purus porttitor nec.
        Suspendisse et scelerisque risus, semper pulvinar nisl.
         Quisque eu orci maximus, interdum felis nec, malesuada lacus.
         Integer eleifend, felis pharetra rutrum fermentum, neque sem imperdiet urna, pretium tincidunt erat velit at lorem.
         </p>
         <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec ullamcorper lectus nunc, at volutpat purus porttitor nec.
        Suspendisse et scelerisque risus, semper pulvinar nisl.
         Quisque eu orci maximus, interdum felis nec, malesuada lacus.
         Integer eleifend, felis pharetra rutrum fermentum, neque sem imperdiet urna, pretium tincidunt erat velit at lorem.
         </p><p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec ullamcorper lectus nunc, at volutpat purus porttitor nec.
        Suspendisse et scelerisque risus, semper pulvinar nisl.
         Quisque eu orci maximus, interdum felis nec, malesuada lacus.
         Integer eleifend, felis pharetra rutrum fermentum, neque sem imperdiet urna, pretium tincidunt erat velit at lorem.
         </p>
         <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec ullamcorper lectus nunc, at volutpat purus porttitor nec.
        Suspendisse et scelerisque risus, semper pulvinar nisl.
         Quisque eu orci maximus, interdum felis nec, malesuada lacus.
         Integer eleifend, felis pharetra rutrum fermentum, neque sem imperdiet urna, pretium tincidunt erat velit at lorem.
         </p><p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec ullamcorper lectus nunc, at volutpat purus porttitor nec.
        Suspendisse et scelerisque risus, semper pulvinar nisl.
         Quisque eu orci maximus, interdum felis nec, malesuada lacus.
         Integer eleifend, felis pharetra rutrum fermentum, neque sem imperdiet urna, pretium tincidunt erat velit at lorem.
         </p>
         <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec ullamcorper lectus nunc, at volutpat purus porttitor nec.
        Suspendisse et scelerisque risus, semper pulvinar nisl.
         Quisque eu orci maximus, interdum felis nec, malesuada lacus.
         Integer eleifend, felis pharetra rutrum fermentum, neque sem imperdiet urna, pretium tincidunt erat velit at lorem.
         </p>
         <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec ullamcorper lectus nunc, at volutpat purus porttitor nec.
        Suspendisse et scelerisque risus, semper pulvinar nisl.
         Quisque eu orci maximus, interdum felis nec, malesuada lacus.
         Integer eleifend, felis pharetra rutrum fermentum, neque sem imperdiet urna, pretium tincidunt erat velit at lorem.
         </p>
         <Button onClick={handleClick} primary>Open Modal</Button>
        { showModal && modal}
    </div>
  )
}

export default ModalPage