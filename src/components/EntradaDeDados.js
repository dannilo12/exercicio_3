function EntradaDeDados(props) {
    return(
        <div>
            <h1>Digite Algo</h1>
            <input
            type="text"
            id="teste"
            name="teste"
            onChange={(e) => (e.target.name)} />
        </div>
    )
}
export default EntradaDeDados