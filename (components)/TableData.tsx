// import {getEmployeelist} from "@/lib/action"
import { formatDate } from "@/lib/utils";
import Link from "next/link";
import { DeleteButton } from "./Delete";
import { getData } from "@/lib/action";

const Employee = async ({
    query
}: {
    query: string;

}
) => {
    const employees = await getData(query);
    // const employees = await getEmployeelist(query);
return(
<table className="table table-zebra">
    <thead className="text-sm text-gray-700 uppercase bg-gray-50">
        <tr>
            <th className="py-3 px-6">#</th>
            <th className="py-3 px-6">Name</th>
            <th className="py-3 px-6">Email</th>
            <th className="py-3 px-6">Phone Number</th>
            <th className="py-3 px-6">Created At</th>
            <th className="py-3 px-6 text-center">Actions</th>
        </tr>
    </thead>
    <tbody>
        {employees.map((item,index) => (
            
        <tr key={item.id} className="bg-white border-b">
            <td className="py-3 px-6">{index + 1}</td>
            <td className="py-3 px-6">{item.name}</td>
            <td className="py-3 px-6">{item.email}</td>
            <td className="py-3 px-6">{item.phone}</td>
            <td className="py-3 px-6">
            {formatDate(item.createdAt.toString())}
            </td>
            <td className="flex justify-center gap-1 py-3">
               <Link 
               href={`/employee/edit/${item.id}`}
               className="btn btn-info"
               >Edit</Link>
                <DeleteButton id={item.id}/>
            </td>
        </tr>
        ))}
    </tbody>
</table>
);
};


export default Employee;