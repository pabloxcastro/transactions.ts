import { Router } from 'express';
import categoriaRouter from './categorias.routes';
import periodoRouter from './periodos.routes';
import fornecedorRouter from './fornecedores.routes';
import clienteRouter from './clientes.routes';
import formapgtoRouter from './formapgtos.routes';
import receitaRouter from './receitas.routes';
import despesaRouter from './despesas.routes';
import despesaItemRouter from './despesaItens.routes';

const routes = Router();

routes.use('/categorias', categoriaRouter);
routes.use('/periodos', periodoRouter);
routes.use('/fornecedores', fornecedorRouter);
routes.use('/clientes', clienteRouter);
routes.use('/formapgtos', formapgtoRouter);
routes.use('/receitas', receitaRouter);
routes.use('/despesas', despesaRouter);
routes.use('/despesaitens', despesaItemRouter);

export default routes;
