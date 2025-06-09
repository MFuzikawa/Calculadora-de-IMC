// src/middleware/errorHandler.ts

import { Request, Response, NextFunction } from 'express';
import ErrorIMC from '../models/error/erroIMC'; 


function errorHandler (error:any, req:Request, res:Response, next:NextFunction) {
    console.error("Erro capturado pelo middleware:", error); 

    if (error instanceof ErrorIMC){
        res.status(error.statusCode).json({
            mensagem: error.message,
            detalhes: error.details || {}
        });
    }

    res.status(500).json({
        mensagem: "Ocorreu um erro interno inesperado no servidor.",
        detalhes: error.message 
    });
}

export default errorHandler;