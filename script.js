document.addEventListener("DOMContentLoaded", function () {
  const clearButton = document.getElementById("clearButton");
  const submitButton = document.getElementById("submitButton");
  const officeSelect = document.getElementById("office");

  const languageField = document.getElementById("languageField");
  const departmentField = document.getElementById("departmentField");
  const responseText = document.getElementById("responseText");

  languageField.style.display = "none";
  departmentField.style.display = "none";

  clearButton.addEventListener("click", function () {
    const inputFields = document.querySelectorAll("input, select");
    inputFields.forEach((field) => {
      field.value = "";
    });

    languageField.style.display = "none";
    departmentField.style.display = "none";
    responseText.innerHTML = "";
  });

  class Employee {
    constructor(name, age, office) {
      this.name = name;
      this.age = age;
      this.office = office;
    }

    greeting() {
      responseText.innerHTML += `Olá, meu nome é ${this.name}, tenho ${this.age} anos e sou ${this.office}.<br>`;
    }

    work() {
      responseText.innerHTML += `${this.name} está trabalhando.<br>`;
    }
  }

  class Manager extends Employee {
    constructor(name, age, department) {
      super(name, age, "gerente");
      this.department = department;
    }

    manage() {
      responseText.innerHTML += `${this.name} está gerenciando o departamento ${this.department}.<br>`;
    }
  }

  class Developer extends Employee {
    constructor(name, age, language) {
      super(name, age, "desenvolvedor");
      this.language = language;
    }

    program() {
      responseText.innerHTML += `${this.name} está programando na linguagem ${this.language}.<br>`;
    }
  }

  submitButton.addEventListener("click", function () {
    try {
      responseText.innerHTML = "";

      const name = document.getElementById("name").value;
      const dateOfBirth = document.getElementById("dateBirth").value;
      const office = document.getElementById("office").value;
      const department = document.getElementById("department").value;
      const language = document.getElementById("language").value;

      if (name === "" || dateOfBirth === "" || office === "") {
        throw new Error("Por favor, preencha todos os campos obrigatórios.");
      }

      const age =
        new Date().getFullYear() - new Date(dateOfBirth).getFullYear();

      if (office === "Gerente") {
        if (department === "") {
          throw new Error("Informe o departamento do gerente.");
        }
        const manager = new Manager(name, age, department);
        manager.greeting();
        manager.manage();
      } else if (office === "Desenvolvedor") {
        if (language === "") {
          throw new Error("Informe a linguagem do desenvolvedor.");
        }
        const developer = new Developer(name, age, language);
        developer.greeting();
        developer.program();
      } else {
        const genericEmployee = new Employee(name, age, office);
        genericEmployee.greeting();
        genericEmployee.work();
      }
    } catch (error) {
      alert(`Erro: ${error.message}`);
      console.log(error.message);
    }
  });

  officeSelect.addEventListener("change", function () {
    const selectedOffice = officeSelect.value;

    if (selectedOffice === "Desenvolvedor") {
      languageField.style.display = "flex";
      departmentField.style.display = "none";
    } else if (selectedOffice === "Gerente") {
      languageField.style.display = "none";
      departmentField.style.display = "flex";
    } else {
      languageField.style.display = "none";
      departmentField.style.display = "none";
    }
  });
});
