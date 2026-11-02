import { useState } from "react";
import type { Pizza } from "./types/pizza";
import { pizzak as kezdoPizzak } from "./data/pizzak";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Kezdolap from "./pages/Kezdolap";
import Admin from "./pages/Admin";
import Moderator from "./pages/Moderator";
import "./App.css";
 
function App() {
 
    const [oldal, setOldal] = useState("kezdolap");
    const [pizzak, setPizzak] = useState<Pizza[]>(kezdoPizzak);

    function mentes(
        nev: string,
        leiras: string,
        ar: number,
        id?: number
    ) {
 
        if (id !== undefined) {
 
            setPizzak(
                pizzak.map((pizza) =>
                    pizza.id === id
                        ? { ...pizza, nev, leiras, ar }
                        : pizza
                )
            );
 
        } else {
 
            const ujPizza: Pizza = {
                id: Date.now(),
                nev: nev,
                leiras: leiras,
                ar: ar,
                elerheto: true
            };
 
            setPizzak([...pizzak, ujPizza]);
        }
    }
 
    function torles(id: number) {
 
        if (window.confirm("Biztosan törölni szeretnéd?")) {
 
            setPizzak(
                pizzak.filter((pizza) => pizza.id !== id)
            );
        }
    }

    function allapotValtas(id: number) {
 
        setPizzak(
            pizzak.map((pizza) =>
                pizza.id === id
                    ? { ...pizza, elerheto: !pizza.elerheto }
                    : pizza
            )
        );
    }
 
    return (
        <div className="app">
            <Header oldalValtas={setOldal} />
            <main>
 
                {oldal === "Kezdőlap" && (
                    <Kezdolap pizzak={pizzak} />
                )}
 
                {oldal === "Admin" && (
                    <Admin
                        pizzak={pizzak}
                        mentes={mentes}
                        torles={torles}
                    />
                )}
                {oldal === "Moderátor" && (
                    <Moderator
                        pizzak={pizzak}
                        allapotValtas={allapotValtas}
                    />
                )}
            </main>
            <Footer />
 
        </div>
    );
}
 
export default App;
 