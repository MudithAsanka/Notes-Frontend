
import Navbar from "../../components/Navbar/Navbar";

function Notes(){

    return(
        <div className="notes">

            <div className="navbar">
                <Navbar />
            </div>

            <div className="container-fluid">
                <h2 align="center">Notes</h2>

                <div className="row justify-content-center align-self-center">
                    <button type="button" className="btn btn-primary" style={{ width:"100px", margin:"10px 10px 10px 10px" }}>Add Note</button>
                </div>

                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <div className="col-sm-12 col-md-6">
                            <label>Show
                                <select className="form-select">
                                    <option value="10">10</option>
                                    <option value="25">25</option>
                                    <option value="50">50</option>
                                    <option value="100">100</option>
                                </select>
                                Entries
                            </label>
                        </div>
                    </div>
                    <div className="card-body align-self-center">
                        <div className="table-responsive">
                            <div className="table">
                                <thead className="thead-dark">
                                    <tr>
                                        <th>Title</th>
                                        <th className="float-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Title 1</td>
                                        <td className="float-right">
                                            <button type="button" className="btn btn-success" style={{ width:"100px", margin:"0px 10px 0px 10px" }}>View</button>
                                            <button type="button" className="btn btn-warning" style={{ width:"100px", margin:"0px 10px 0px 10px" }}>Edit</button>
                                            <button type="button" className="btn btn-danger" style={{ width:"100px", margin:"0px 10px 0px 10px" }}>Delete</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer">
                        <div className="col-sm-12 col-md-5">
                            Showing 1 to 10 of 30 entries
                        </div>
                        <div className="col-sm-12 col-md-5">
                            <nav aria-label="Page navigation example">
                                <ul className="pagination">
                                    <li className="page-item"><button className="page-link" href="#">Previous</button></li>
                                    <li className="page-item"><button className="page-link" href="#">1</button></li>
                                    <li className="page-item"><button className="page-link" href="#">2</button></li>
                                    <li className="page-item"><button className="page-link" href="#">3</button></li>
                                    <li className="page-item"><button className="page-link" href="#">Next</button></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Notes;