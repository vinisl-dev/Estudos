import CalculateInvoice from "./CalculateInvoice";
import TransactionDAODatabase from "./TransactionDAODatabase";
import CurrencyGatewayHTTP from "./CurrencyGatewayHTTP";
import AxiosAdapter from "./AxiosAdapter";
import PgPromiseAdapter from "./PgPromiseAdapter";
import InvoiceController from "./InvoiceController";
import ExpressAdapter from "./ExpressAdapter";
import RealClock from "./RealClock";


const clock = new RealClock()
const connection = new PgPromiseAdapter()
const transactionDAO = new TransactionDAODatabase(connection)
const httpClient = new AxiosAdapter()
const baseUrl = "http://localhost:3001"
const currencyGateway  = new CurrencyGatewayHTTP(httpClient,baseUrl)
const calculateInvoice = new CalculateInvoice(transactionDAO, currencyGateway, clock)
const httpServer = new ExpressAdapter()
new InvoiceController(httpServer, calculateInvoice)
httpServer.listen(3000)
