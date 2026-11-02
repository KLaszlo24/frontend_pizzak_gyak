type HeaderProps = {
    oldalValtas: (oldal:string) => void;
}

function Header ({oldalValtas} : HeaderProps){
    return<>
        <header className="bg-danger text-white text-center p-4">
            <h1>László Pizzéria</h1>
            <p>A legjobb pizzák</p>

            <nav className="d-flex justify-content-center flex-wrap">
                <button className="btn btn-light"
                onClick={()=> oldalValtas("Kezdőlap")}>
                    Kezdőlap
                </button>
                <button className="btn btn-light"
                onClick={()=> oldalValtas("Admin")}>
                    Admin
                </button>
                <button className="btn btn-light"
                onClick={()=> oldalValtas("Moderátor")}>
                    Moderátor
                </button>
            </nav>
        </header>
    </>
}

export default Header;