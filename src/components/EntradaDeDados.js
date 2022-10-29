function EntradaDeDados(props) {
    return(
        <div>
            <input
            type="text"
            id="teste"
            name="teste"
            onChange={(e) => (e.target.name)}>Digite uma Informação</input>
        </div>
    )
}
export default EntradaDeDados