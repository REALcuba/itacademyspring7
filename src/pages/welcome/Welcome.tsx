type WelcomeProps = { isLogin: boolean, handleLoginBtn: () => void }
const Welcome: React.FC<WelcomeProps> = ({ handleLoginBtn }) => {

    return (
        <div className="container">
            <p>Ejercicio de implementación de React,
                donde podemos seleccionar distintos servicios,
                agregando su precio. En cada servicio podemos agregar
                cantidad de paginas o lenguajes deseado, siempre actualizando
                su precio por cada elemento agregado.</p>
            <button type="button" onClick={handleLoginBtn}>Login</button>
        </div>
    )
}

export default Welcome
