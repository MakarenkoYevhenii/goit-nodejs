import fs from "fs/promises";
import path from "path";

const contactsPath = path.resolve("./db", "contacts.json");

const changeFile = async (data) => {
  await fs.writeFile(contactsPath, JSON.stringify(data), () => {
    (data) => {
      console.log(data);
    };
  });
};

export async function listContacts() {
  const data = await fs.readFile(contactsPath);
  const contacts = JSON.parse(data);
  return contacts;
}

export async function getContactById(contactId) {
  const data = await listContacts();
  const filter = data.filter((data) => {
    if (data.id === String(contactId)) {
      return data;
    }
  });
  return filter;
}

export async function removeContact(contactId) {
  const data = await listContacts();
  const filter = data.filter((data) => {
    if (data.id !== String(contactId)) {
      return data;
    }
  });
  changeFile(filter);
  return filter;
}

export async function addContact(name, email, phone) {
  const data=await listContacts()
   const maxId= data.map(data=>{
     return data.id
   })
 const maxID=Math.max.apply(null,maxId)
  const newId=maxID+1
  const newUser={
      "id": String(newId),
      "name": name,
      "email": email,
      "phone": phone
  }
  const newContacts=data.push(newUser)
  changeFile(data)
  }
