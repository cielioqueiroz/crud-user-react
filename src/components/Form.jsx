function Form({ onChangeValue, onSubmitValue, formData }) {
  return (
    <div>
      <form
        style={{
          display: "flex",
          width: "40%",
          gap: 3,
          flexDirection: "column",
        }}
        onSubmit={onSubmitValue}
      >
        <input
          type="text"
          placeholder="Nome"
          value={formData.name}
          onChange={onChangeValue}
          name="name"
        />
        <input
          type="number"
          placeholder="Salario"
          value={formData.salario}
          onChange={onChangeValue}
          name="salario"
        />
        <input
          type="text"
          placeholder="Funcao"
          value={formData.funcao}
          onChange={onChangeValue}
          name="funcao"
        />
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={onChangeValue}
          name="email"
        />
        <input
          type="text"
          placeholder="Contato"
          value={formData.contato}
          onChange={onChangeValue}
          name="contato"
        />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default Form;
