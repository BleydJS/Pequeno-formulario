import './MyForm.css'
import {useState} from "react"
const MyForm = ({user}) => {       // 4 - controled inputs .... crio la na app.js uma prop de nome de usuario e senha e chamo aqui..
// 3 - gerenciamento de dados
const [name,setName] = useState (user ? user.name : '')
const [email,setEmail] = useState (user ? user.email : '')

const [bio,setBio] = useState (user ? user.bio : '')
const [role,setRole] = useState (user ? user.role : '')

const handleName = (e) => {       // forma 1 - handleName = Lê se "Lidar com o nome" pd ser qualquer coisa, mas assim é melhor.. 
  setName (e.target.value)
}


const handleSubmit = (event) => {
  event.preventDefault()                          /*essa linha é interessante..a gente esta trabalhando com SPA(SINGLE PAGE APLICATION, nao queremos que a pagina seja RE-recarregada quando    clicar no botão enviar, so que envie o formulario sem atrapalhar a experiencia do usuario) */
  console.log(name,email,bio,role)
  console.log("Enviando o formulario")

  //7 - Limpando formularios   ...usado pra depois de clicar em enviar, a caixa de dentro ser limpa
  setEmail  ("")
  setName ("")
  setBio ("")
  setRole ("")
}

 // console.log (name)
 // console.log (email)              //NUNCA ESQUECER O CONSOLE LOG, LA EMBAIXO É SO AS FUNCIONALIDADES, AQUI DEVE SER MOSTRADO O RESULTADO

  return (
    <div>

        {/* 1-Criação de form */}

        <form onSubmit={handleSubmit}>   {/* la embaixo quando tu definiu o type"submit, ele ta ligado a essa "puxação aqui" onsubit "quanto tu apertar o btn vai fazer isso "handlesubmit" */} 
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" name="name" placeholder ="Digite seu nome" onChange={handleName} value={name} /> 
            </div>


       {/* 2- label envolvendo input */} 
       {/* pode ser encontrada das duas formas, mas essa segunda é a mais recomendada na documentação do react */}

          <label>
            {/* 3-simplificação de manupulação de state*/}
            <span>E-mail</span>
            <input type="email" name="email" placeholder = "Digite seu E-mail" onChange={(e) => setEmail(e.target.value)} value={email}/>  {/* forma 2 - Alteração de state inline */}
            {/* para coisas muito simples */}
          </label>

            {/* 5 - Textarea */}
          <label>
            <span>Bio</span>
            <textarea name="bio" placeholder='Descrição do usuario' onChange={(e) => setBio(e.target.value)} value={bio}></textarea>    {/* para um formulario, esse placeholder,onchange,value é padrao */}
          </label>

          {/* 6 - select */}

          <label>
            <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
              <option value="user">Usuario</option>
              <option value="admin">Administrador</option>
              <option value="uber">Motorista</option>
            </select>
          </label>



          <input type="submit" value="Enviar"/>
        </form>
    </div>

  )
}

export default MyForm

/* em resumo para vc fazer uma caixa para digitar, e um botão para ENVIAR..
vcprecisa:

criar as variaveis
1- fazer o label/span que é a (mensaem)
2 - fazer um onChange do input inline ou normal
3- criar um onSubimit pro form
4 - nesse onSubimit que esta ligado ao enviar colocar o nome de uma fução que vc vai criar ...ex:  handleSubmit
5 - criar a função em cima com as funcionalidades que vc quer assim que vc clicar em enviar.  ex:    const handleSubmit = (event) => { */