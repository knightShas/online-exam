
function CompanyLogin() {
    return (
        <div class="container mt-5">
        <div class="row">
            <div class="col-lg-6">
                <img src="https://img.freepik.com/free-vector/company-concept-illustration_114360-2581.jpg?t=st=1656395681~exp=1656396281~hmac=de60f528bccfefcfa0c08cd3abbc06f4caa48ba92ba1e2d33f14ffcecb35a1e9&w=826" alt="company" class="comp-img" />
            </div>
            <div class="col-sm-6 mt-5">
                <div class="container login-form">
                    <form>
                        <div class="mb-3">
                          <label for="exampleInputEmail1" class="form-label">Email address</label>
                          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div class="mb-3">
                          <label for="exampleInputPassword1" class="form-label">Password</label>
                          <input type="password" class="form-control" id="exampleInputPassword1"/>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                        <br/>
                        <small><span>Need Account <a href="comp_register.html">Company</a></span></small>
                        <br/>
                        <small><span><a href="forgot_comp.html">Forgot password</a></span></small>
                      </form>
                </div>
            </div>
        </div>
    </div>
    );
}
export default CompanyLogin;
