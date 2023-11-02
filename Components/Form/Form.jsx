export default function Form({ userNameInput }) {

  const handleUserInput = (arg) => {
    userNameInput(arg)
  }
  return (
    <form>
      <h3>Search user Github</h3>
      <div className="mb-3">
        <label>User name</label>
        <input type="text" className="form-control" placeholder="User Name" id="username" name="username" />
      </div>
      <div>
        <button onClick={(e) => {
          e.preventDefault();
          let dataInput = document.getElementById("username").value;
          console.log(dataInput);
          handleUserInput(dataInput)
          console.log("return: ", handleUserInput(dataInput));
        }}
        >
          Submit
        </button>
      </div>
    </form>
  );
}
