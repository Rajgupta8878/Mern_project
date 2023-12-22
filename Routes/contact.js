import express from 'express'
import { Contact } from '../Models/contact.js';
import { addcontact,getcontacts,updatecontact,deletecontact} from '../controllers/contact.js';


const router = express.Router();

// home router

router.get('/home',(req,res)=>{
    res.json({message: "converting to mnv structuree...!"})
}
)

//router post
//add contact 
router.post("/addcontact",addcontact);
  

  // @route - '/getcontacts'
// @method - 'get'
router.get("/getcontacts", getcontacts);
  
  // @route - '/:id'
  // @method - put
  router.put("/:id",updatecontact );


  
//@route -'/:id
//@methoed - delete
router.delete('/:id',deletecontact )




export default router;