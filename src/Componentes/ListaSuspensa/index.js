import './ListaSuspensa.css';

const ListaSuspensa = (props) => {
    console.log(props.itens); // Para verificar se os itens estão sendo passados corretamente

    return (
        <div className="lista-suspensa">
            <label>{props.label}</label>
            <select
                onChange={(evento) => props.aoAlterado(evento.target.value)}
                required={props.required}
                value={props.value}
            >
                <option value="">Selecione uma opção</option>
                {props.itens.map((item, index) => (
                    <option key={index} value={item}>
                        {item}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default ListaSuspensa;
