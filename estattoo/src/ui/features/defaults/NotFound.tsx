export default function NotFound() {
    return (
        <div className="d-flex flex-column align-items-center justify-content-center h-100" style={{ backgroundColor: '#2c994249' }}>
            {/* <span className='border rounded-3 py-4 px-2' style={{ backgroundColor: '#2c9942b2' }}>
                <img src={pipeGif} width={250} style={{ opacity: 0.8 }} />
            </span> */}
            <h1 className="h3 mt-4" style={{ color: '#278139' }}>Ops! Abbiamo un problema</h1>
            <p className="fst-italic my-2">404 - La pagina richiesta non esiste!</p>
        </div>
    );
}