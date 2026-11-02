import { useState } from "react";
import type { Pizza } from "../types/pizza";

interface AdminProps{
    pizzak: Pizza[],
    mentes: (nev:string, leiras: string, ar: number, id?:number) => void,
    torles: (id: number) => void,
}

function Admin({ pizzak, mentes, torles }: AdminProps) {
 
    const [nev, setNev] = useState("");
    const [leiras, setLeiras] = useState("");
    const [ar, setAr] = useState("");
 
    const [szerkesztId, setSzerkesztId] = useState<number | null>(null);
 
    function kuldes() {
        if (!nev.trim() || !leiras.trim() || !ar.trim() || Number(ar) <= 0) {
            alert("Tölts ki minden mezőt helyesen!");
            return;
        }
 
        mentes(nev, leiras, Number(ar), szerkesztId ?? undefined);
 
        urites();
    }
 
    function urites() {
        setNev("");
        setLeiras("");
        setAr("");
        setSzerkesztId(null);
    }
 
    function szerkesztes(pizza: Pizza) {
        setNev(pizza.nev);
        setLeiras(pizza.leiras);
        setAr(String(pizza.ar));
        setSzerkesztId(pizza.id);
    }
 
    return (
        <section className="container my-5">
 
            <h2 className="text-center mb-4">
                Adminisztráció
            </h2>
 
            <div className="card p-4 shadow mb-4">
 
                <h3>
                    {szerkesztId !== null
                        ? "Pizza módosítása"
                        : "Új pizza hozzáadása"}
                </h3>
 
                <div className="mb-3">
                    <label className="form-label">
                        Pizza neve:
                    </label>
 
                    <input
                        type="text"
                        className="form-control"
                        value={nev}
                        onChange={(e) => setNev(e.target.value)}
                    />
                </div>
 
                <div className="mb-3">
                    <label className="form-label">
                        Leírás:
                    </label>
 
                    <input
                        type="text"
                        className="form-control"
                        value={leiras}
                        onChange={(e) => setLeiras(e.target.value)}
                    />
                </div>
 
                <div className="mb-3">
                    <label className="form-label">
                        Ár (Ft):
                    </label>
 
                    <input
                        type="number"
                        className="form-control"
                        min="1"
                        value={ar}
                        onChange={(e) => setAr(e.target.value)}
                    />
                </div>
 
                <button
                    className="btn btn-success"
                    onClick={kuldes}
                >
                    {szerkesztId !== null
                        ? "Módosítás mentése"
                        : "Pizza hozzáadása"}
                </button>
 
                {szerkesztId !== null && (
                    <button
                        className="btn btn-secondary mt-2"
                        onClick={urites}
                    >
                        Mégse
                    </button>
                )}
 
            </div>
 
            <h3>Meglévő pizzák</h3>
 
            <div className="table-responsive">
                <table className="table table-striped table-bordered">
 
                    <thead className="table-danger">
                        <tr>
                            <th>Név</th>
                            <th>Leírás</th>
                            <th>Ár</th>
                            <th>Műveletek</th>
                        </tr>
                    </thead>
 
                    <tbody>
                        {pizzak.map((pizza) => (
                            <tr key={pizza.id}>
                                <td>{pizza.nev}</td>
                                <td>{pizza.leiras}</td>
                                <td>{pizza.ar} Ft</td>
 
                                <td>
                                    <button
                                        className="btn btn-warning btn-sm me-2"
                                        onClick={() => szerkesztes(pizza)}
                                    >
                                        Módosítás
                                    </button>
 
                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() => torles(pizza.id)}
                                    >
                                        Törlés
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
 
export default Admin;