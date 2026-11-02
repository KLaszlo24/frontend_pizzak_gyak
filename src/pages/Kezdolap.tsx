import type { Pizza } from "../types/pizza";
import PizzaCard from "../components/PizzaCard";

interface KezdolapProps{
    pizzak: Pizza[];
}

function Kezdolap({pizzak}: KezdolapProps){
    return(
        <section className="container my-5">
            <h2 className="text-center mb-4">Pizzáink</h2>
            <div className="row">
                {pizzak.map((pizza) => (
                    <PizzaCard
                    key={pizza.id}
                    pizza={pizza}>
                    </PizzaCard>
                ))}
            </div>
        </section>
    )
}

export default Kezdolap