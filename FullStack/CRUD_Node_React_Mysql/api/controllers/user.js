import {db} from "../db.js"

export const getUsers = (_, res)=>{
  const q = "select * from usuarios";
  db.query(q, (err, data)=>{
    if(err) return res.json(err);
    return res.status(200).json(data)
  })
}

export const addUser = (req, res)=>{
  const q = "insert into usuarios (`nome`, `email`, `fone`,`data_nascimento`) values(?)"
  const values=[
    req.body.nome,
    req.body.email,
    req.body.fone,
    req.body.data_nascimento
  ]

  db.query(q, [values], (err)=>{
    if (err) return res.json(err)
    return res.status(200).json("Usuário criado com sucesso.")
  })
}

export const updateUser = (req, res) =>{
  const q = "update usuarios set `nome`=?, `email`=?,`fone`=?, `data_nascimento`=? where  `id`= ?"
  const values = [
    req.body.nome,
    req.body.email,
    req.fone.fone,
    req.body.data_nascimento,
  ]
  db.query(q, [...values, req.params.id], (err)=>{
    if (err) return res.json(err)
    return res.status(200).json("Usuário atualizado com sucesso.")
  })
}

export const deleteUser = (req, res)=>{
  const q = "delete from usuarios where `id` = ?"
  db.query(q, [req.params.id], (err)=>{
    if (err) return res.json(err);
    return res.status(200).json("Usuario deletado com sucesso.");
  })
}

