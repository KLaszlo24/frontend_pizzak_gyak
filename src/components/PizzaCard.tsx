import type { Pizza } from "../types/pizza";

interface PizzacardProps{
    pizza: Pizza;
}

function PizzaCard({pizza}: PizzacardProps){
    return(
        <article className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100 shadow">
                <div card-body>
                    <h3 className="card-title text-danger">{pizza.nev}</h3>
                    <p className="card-text">{pizza.leiras}</p>
                    <h5>{pizza.ar.toLocaleString("hu-HU")} Ft</h5>
                    {pizza.elerheto ? (
                        <span className="badge bg-success">Rendelhető</span>
                    ) : (
                        <span className="badge bg-danger">Nem elérhető</span>
                    )}
                </div>
            </div>
        </article>
    )
}

export default PizzaCard