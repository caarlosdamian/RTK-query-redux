import React from 'react'
import { useAddContactMutation, useDeleteContactMutation, useUpdateContactMutation } from '../services/api'

export const AddContact = () => {
  const [addContact] = useAddContactMutation()
  const [updateContact] = useUpdateContactMutation()
  const [deleteContact] = useDeleteContactMutation()
    const contact = {
        id:8,
        name:"Erik",
        email:"erik@prueba.com"
    }
    const contactU = {
        id:8,
        name:"prueba",
        email:"prueba@prueba.com"
    }

    const handleAdd = async() =>{
        await addContact(contact)
    }
    const handleDelete = async() =>{
      await deleteContact(1)
    }
    const handleUpdate = async() =>{
      await updateContact(contactU)
    }
  return (
    // <> 
    // <button onClick={handleAdd}>Add Contact</button>
    // {/* <button onClick={handleDelete}>Delete Contact</button>
    // <button onClick={handleUpdate}>Update Contact</button> */}
    // </>
  )
}
