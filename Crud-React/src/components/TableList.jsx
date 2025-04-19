export default function TableList() {

    const clients=[
        {id:1,name:"John Doe", email:"John.Doe@gmail.com", job:"Developer", rate:"100", isactive:true},
        {id:2,name:"John Doe", email:"John.Doe@gmail.com", job:"Developer", rate:"100", isactive:false},
        {id:3,name:"John Doe", email:"John.Doe@gmail.com", job:"Developer", rate:"100", isactive:true},        
    ];



    return(
        <>
        <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>id</th>
        <th>Name</th>
        <th>email</th>
        <th>Job</th>
        <th>rate</th>
        <th>status</th>

      </tr>
    </thead>
    <tbody>
      {clients.map((client)=>(
        <tr>
        <th>{client.id}</th>
        <td>{client.name}</td>
        <td>{client.email}</td>
        <td>{client.job}</td>
        <td>{client.rate}</td>
        <td>
          <button className={`btn ${client.isactive ? 'btn-primary' : 'btn-outline-primary'}`}>
              {client.isactive ? 'Active' : 'Inactive'}
          </button>
        </td>
        <td>           
          <button className="btn btn-secondary">
              Update
          </button>
        </td>
        <td>
        <button className="btn btn-error">
            Delete
          </button>
        </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
        </>
    );
}