import { NextFunction, Request, Response, Router } from "express";
import { IMC, Resposta } from "../models/IMCModel";
import errorIMC from "../models/error/erroIMC";

const calculadoraRouter = Router();

calculadoraRouter.post('/imc', async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const imc: IMC = await req.body;
        let classificacao: string = "";
        if (imc.altura <= 0 || imc.peso <= 0) {
            throw new errorIMC("Peso e altura devem ser valores positivos e maiores que zero.");
        };
        const imcvalor: number = imc.peso / (imc.altura * imc.altura);

        if ( typeof imc.altura !== 'number' || typeof imc.peso !== 'number'){
            throw new errorIMC("Os valores devem ser números");
        };

        if (imcvalor < 18.5) {
            classificacao = "Abaixo do peso";
        } else if (imcvalor >= 18.5 && imcvalor <= 24.9) {
            classificacao = "Peso normal";
        } else if (imcvalor >= 25 && imcvalor <= 29.9) {
            classificacao = "Sobrepeso";
        } else if (imcvalor >= 30 && imcvalor <= 34.9) {
            classificacao = "Obesidade Grau I";
        } else if (imcvalor >= 35 && imcvalor <= 39.9) {
            classificacao = "Obesidade Grau II";
        } else {
            classificacao = "Obesidade Grau III";
        }

        const resposta: Resposta = {
            imc: imcvalor,
            classificacao: classificacao
        };

        res.json(resposta);
    } catch (error: any) {
        next(error);
    };
})
export default calculadoraRouter;