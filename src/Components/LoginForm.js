

export default function LoginForm() {
    return (
        <div className="container-lg" id="login-form">
            <div className="text-center">
                <h3>Log In</h3>
                <p>Please Enter Your Information Below</p>
            </div>
            <div className="row justify-content-center my-5">
                <div className="col-sm-12 col-lg-8">
                    <form>
                        <label for="username" className="form-label d-flex justify-content-between">Username: </label>
                        <div className="mb-4 input-group">
                            <span className="input-group-text">
                                <i className="bi bi-person-fill"></i>
                            </span>
                            <input type="text" className="form-control" id="username"/>
                        </div>

                        <label for="password" className="form-label d-flex justify-content-between">Password: </label>
                        <div className="mb-5 input-group">
                            <span className="input-group-text">
                                <i className="bi bi-lock-fill"></i>
                            </span>
                            <input type="text" className="form-control" id="password"/>
                        </div>
    
                        <button type="button" className="btn btn-outline" id="submit-button">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

