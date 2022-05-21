
const XLSX = require('xlsx');
import {  createUser }  from '../controllers/user.controller'
import User from '../models/User';
import Role from '../models/Role';



export const getExcel = async (req, res) => {
    // const {urlExcel} = req.body;
    
    
    const excel = XLSX.readFile(
        
        'D:/Desktop/scape_room_backend/src/usuarios.xlsx'
    );

    const nombreHoja = excel.SheetNames; //esto me regresa un array
    const datos = XLSX.utils.sheet_to_json(excel.Sheets[nombreHoja[0]]);

    try {
        console.log('dentro de try')

        datos.forEach(async user => {
            
            const userSave = await  createUser(user)
            console.log(userSave)
        });
        
    } catch (error) {
        
        return res.status(401).json({message: 'error en la carga de datos'})
        
    }


    
    // res.status(200).json(newUser);

    // User.insertMany(datos,(err,data)=>{  
    //     if(err){  
    //         console.log(err);  
    //     }else{  
    //         res.redirect('/');  
    //     }  
    //     }); 
}




