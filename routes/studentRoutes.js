import { Router } from "express";
import {name,  students} from "../database/userarray.js";



const router = new Router();


router.get ( "/", (req,res)=> {



    res.render( "students",{ name , students: students});
    
    });
    
    router.get ( "/create", (req,res)=> {

        });
   router.get ( "/update", (req,res)=> {
        
        
        });
   router.get ( "/delete", (req,res)=> {
        
        
        });
    router.get ( "/:id", (req,res)=> {
        
        
        });


        export default router;