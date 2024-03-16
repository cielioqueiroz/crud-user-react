class UserMapper {
  toDomain(user) {
    return {
      id: user.id,
      name: user.name,
      salary: user.salario,
      func: user.funcao,
      email: user.email,
      contact: user.contato,
      status: user.status,
    };
  }
}

export default new UserMapper();
