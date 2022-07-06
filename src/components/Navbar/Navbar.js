
function Navbar(){
    return(

        <div className="row">
            <div className="col">
                <div className="input-group">
                    <input type="text" className="form-control border-1" aria-label="Search" style={{ width:"500px" }} />
                    <div className="input-group-append">
                        <button className="bt btn-primary" type="button">Search</button>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="float-end">
                    <button type="button" className="btn btn-outline-dark" style={{ width:"100px", margin:"0px 10px 0px 10px" }}>Profile</button>
                    <button type="button" className="btn btn-outline-danger" style={{ width:"100px", margin:"0px 10px 0px 10px" }}>Log out</button>

                </div>
            </div>
        </div>
    );
}

export default Navbar;