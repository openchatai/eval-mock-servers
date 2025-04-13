import pharmacyEvalServer from "./pharmacy/pharmacy-eval-server";
import { serve as tauBenchRetailServer } from "./tau-bench/retail/tau-bench-retail";

pharmacyEvalServer();
tauBenchRetailServer({});
