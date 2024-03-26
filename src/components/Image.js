import MinhaFoto from "../assets/Beatriz.jpeg"

function Image() {
    return(
        <div className="image">
            <img src={MinhaFoto} alt="Foto de perfil"/>
            <div>
                <h1>Bem-vindo(a)! Meu nome é</h1>
                <h1 className="name">Beatriz Feitosa</h1>
                <br></br>
                <p><i>"Cada livro é uma chance de escapar." (A biblioteca da meia-noite)</i></p>
            </div>
        </div>
    );
}

export default Image;