import { FaTrash } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const ManageItems = () => {
  const [menu, refetch] = useMenu();
  const axiosSecure = useAxiosSecure();
  //   console.log(menu);

  const handleItemDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't Delete!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(id);
        axiosSecure
          .delete(`/api/v1/menu/${id}`)
          .then((res) => {
            console.log(res.data);
            if (res.data.deletedCount > 0) {
              // refetch to update the ui
              refetch();
              toast.success("Delete successfully");
            }
          })
          .catch((err) => {
            toast.error(err);
          });
      }
    });
  };
  return (
    <div>
      <SectionTitle
        heading={"manage all items"}
        subHeading={"Hurry Up!"}
      ></SectionTitle>

      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="bg-[#D1A054] text-white ">
                <th></th>
                <th>ITEM IMAGE</th>
                <th>ITEM NAME</th>
                <th>Price</th>
                <th>Action</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {menu.map((item, index) => (
                <tr key={item._id}>
                  <th>
                    <label>{index + 1}</label>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={item?.image} alt="menu image" />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item?.name}</td>
                  <td>$ {item?.price}</td>
                  <th>
                    <button className="p-3 bg-[#D1A054] rounded-sm">
                      <FaEdit className="text-white" />
                    </button>
                  </th>
                  <th>
                    <button
                      onClick={() => handleItemDelete(item?._id)}
                      className="p-3 bg-[#B91C1C] rounded-sm"
                    >
                      <FaTrash className="text-white"></FaTrash>
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageItems;
