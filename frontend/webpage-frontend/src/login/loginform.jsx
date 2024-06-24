function loginForm (){
    return(
        <div className="loginbody">
            <h2>Welcome to Alden's Portfolio!</h2>
            <p>To view, please log in!</p>
        
            <form action="" method="post">
            <h3>Log In</h3>
            <label className="usernameLabel">Username:
            <input  className="inputUser" type="text" name="" id="" />
            </label>
            <label className="passwordLabel">Password:
            <input type="password" name="" id="" />
            </label>
            <button type="submit">Log In</button>
            </form>
        </div>


    );

}


export default loginForm;