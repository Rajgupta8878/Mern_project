import { Contact } from "../Models/contact.js"

//add contact 

export const addcontact =  async (req, res) => {
    // console.log("addcontact is working");
    // console.log(req.body)
  
    const { name, gmail, phone, ctype } = req.body;
  
    let contact = await Contact.findOne({ gmail });
    let phoneNumber = await Contact.findOne({ phone });
  
    if (contact || phoneNumber)
      return res.json({ message: "Contact Already Exist..!" });
  
    contact = await Contact.create({
      name,
      gmail,
      phone,
      ctype,
    });
  
    res.json({ message: "Contact Saved..!" });
  }

  //getsconatc 


  export const getcontacts =  async (req, res) => {
    const contacts = await Contact.find();
  
    res.json({ message: "fetched all contacts", contacts });
  }



  ///put contact 


  export const updatecontact= async (req, res) => {
    // console.log(req.params.id);
    const contactId = req.params.id;
  
    let contact = await Contact.findById(contactId);
  
    if (!contact) return res.json({ message: "Invalid Id" });
  
    const { name, gmail, phone, ctype } = req.body;
  
    contact.name = name;
    contact.gmail = gmail;  
    contact.phone = phone;
    contact.ctype = ctype;
  
    await contact.save();
    res.json({ contact });
  }


  //delete contacts


  export const deletecontact = async(req,res)=>{
   

    const id = req.params.id;
    let contact = await Contact.findById(id);

    if(!contact) return res.json({message : " id not exits..!"})

    await contact.deleteOne();

    res.json({
        success:true,
        message:"your contact deleted sucessflly...!"
    })
  }