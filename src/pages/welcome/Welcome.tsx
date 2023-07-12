type WelcomeProps = { isLogin: boolean, handleLoginBtn: () => void }
const Welcome: React.FC<WelcomeProps> = ({ handleLoginBtn }) => {

    return (
        <div className="container">
            <p>hi</p>
            <button type="button" onClick={handleLoginBtn}>Login</button>
        </div>
    )
}

export default Welcome
