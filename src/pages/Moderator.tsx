import type { Pizza } from "../types/pizza";
 
interface ModeratorProps{
    pizzak: Pizza[]
    allapotValtas: (id: number) => void
};
 
function Moderator({ pizzak, allapotValtas }: ModeratorProps) {
 
    return (
        <section className="container my-5">
 
            <h2 className="text-center mb-4">
                Moderátori felület
            </h2>
 
            <p className="text-center">
                Pizza rendelési beállítások
            </p>
 
            <div className="table-responsive">
                <table className="table table-bordered table-hover">
 
                    <thead className="table-danger">
                        <tr>
                            <th>Pizza neve</th>
                            <th>Állapot</th>
                            <th>Művelet</th>
                        </tr>
                    </thead>
 
                    <tbody>
                        {pizzak.map((pizza) => (
                            <tr key={pizza.id}>
 
                                <td>{pizza.nev}</td>
 
                                <td>
                                    {pizza.elerheto ? (
                                        <span className="badge bg-success">
                                            Rendelhető
                                        </span>
                                    ) : (
                                        <span className="badge bg-danger">
                                            Nem elérhető
                                        </span>
                                    )}
                                </td>
 
                                <td>
                                    <button
                                        className={`btn btn-sm ${
                                            pizza.elerheto
                                                ? "btn-danger"
                                                : "btn-success"
                                        }`}
                                        onClick={() => allapotValtas(pizza.id)}
                                    >
                                        {pizza.elerheto
                                            ? "Kikapcsolás"
                                            : "Bekapcsolás"}
                                    </button>
                                </td>
 
                            </tr>
                        ))}
                    </tbody>
 
                </table>
            </div>
 
        </section>
    );
}
 
export default Moderator;