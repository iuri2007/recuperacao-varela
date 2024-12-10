// Importa o módulo Router do Express, usado para criar rotas em módulos separados.
import { Router } from "express";

// Importa o middleware personalizado para manipulação de JWT.
import jwtMiddleare from "../middlewares/jwt.middleware";

// Cria uma instância do roteador do Express.
const router = Router();

// Define uma rota POST na raiz ("/") para criar tokens JWT.
// O middleware jwtMiddleare.createToken é usado para lidar com a lógica de criação de tokens.
router.post("/", jwtMiddleare.createToken);

// Define uma rota POST em "/verify" que, por enquanto, retorna o status 501 (Not Implemented).
// Isso indica que a funcionalidade de verificação de token ainda não foi implementada.
router.post("/verify", (req, res) => {
    res.status(501).send("Not Implemented");
});

// Define uma rota POST em "/refresh" que, por enquanto, retorna o status 501 (Not Implemented).
// Essa rota será usada no futuro para renovar tokens JWT expirados.
router.post("/refresh", (req, res) => {
    res.status(501).send("Not Implemented");
});

// Exporta o roteador para ser usado em outras partes da aplicação.
export default router;
