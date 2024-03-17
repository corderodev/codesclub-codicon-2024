const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

const handleValidate = (e) => {
    e.preventDefault();
    //Verificaion de datos vacios 
    if (nombre.length == 0  email.length == 0  password.length == 0) {
      toast.info('Campo vacio', {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",

      });
      return
    } if (
      validName.test(nombre) &&
      validCorreo.test(email) &&
      validPassword.test(password)
    ) {
      const data = JSON.parse(localStorage.getItem("usuarios")) || [];
      // verificacion de datos repetidos 
      const check = data.find((event) => event.email === email);
      if (check) {
        toast.warn('correo electronico ya esta registrado en la base de datos', {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",

        });
        setNombre("")
        setEmail("")
        setPassword("")
        return;
      }
      // encryptar password
      let key = dataEncrypt(password)
      const user = {
        nombre, email, key, rol: 'user'
      }
      const newData = [...data, user]
      localStorage.setItem("usuarios", JSON.stringify(newData))
      // limpiar datos de los inputs 

      setNombre("");
      setEmail("");
      setPassword("");
      window.location.href = "/login";
    } else {
      setNombrerr(true);
      setEmailErr(true);
      setPwdError(true);
      setTimeout(function () {
        window.location.reload();
      }, 2000);
    }
  };

