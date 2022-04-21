import fs from "fs/promises";
import path from "path";

const contactsPath = path.resolve("./db", "contacts.json");


export async function  listContacts() {
  const data = await fs.readFile(contactsPath);
  const contacts=JSON.parse(data)
  return contacts
}


export async function getContactById(contactId) {
  const data=await listContacts()
  const filter=data.filter(data=>{
    if(data.id===String(contactId)){
     return data
     }
  })
  return filter
}

export async function  removeContact (contactId) {
  const data= await listContacts()
  const filter=data.filter(data=>{
    if(data.id!==String(contactId)){
     return data
     }
  })
  console.log(filter);
}

export function addContact(name, email, phone) {}
