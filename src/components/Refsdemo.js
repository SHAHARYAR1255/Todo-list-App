import React, { useState } from 'react'
import db from '../firebase';
import {  Button, Modal, ModalBody, ModalHeader, Input} from 'reactstrap';
import { List, ListItem, ListItemText } from '@material-ui/core';

function Refsdemo(props) {
    const [open , setOpen] = useState(false) ;
    const [input , setInput] = useState('');
    const toggle = () =>{
      setOpen(!open);
    }
    const handleUpdate = () =>{
      db.collection('todos').doc(props.id).set({
          todo : input
      },{merge : true});
      toggle();
    }
    return(
      <>
      <Modal isOpen={open} toggle={toggle}>
        <ModalHeader toggle={toggle}>
          edit todo
        </ModalHeader>
        <ModalBody>
          <Input placeholder={props.todo} type='text' value={input} onChange={e => setInput(e.target.value)}/>
          <Button className="mt-2"color="success" onClick={handleUpdate}>Update todo</Button>
        </ModalBody>
      </Modal>
      <List>
        <ListItem>
          <b><ListItemText primary={props.todo} /></b>
        </ListItem>
        <Button color="danger" onClick={e => db.collection('todos').doc(props.id).delete()}>delete</Button>
        <Button color="warning" className="ml-3" onClick={toggle} >Edit</Button>
      </List>
      </>
    );
}

export default Refsdemo;
