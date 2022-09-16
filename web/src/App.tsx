interface PropsButton{
    title: string
}

function Button(props: PropsButton) {
    return (
        <button>
            {props.title}
        </button>
    )
}

function App() {
    return (
        <div>
            <Button  title="Botão1"/>
            <Button title="Enviar"/>
            <Button  title="Send"/>
        </div>
    )
}

export default App
