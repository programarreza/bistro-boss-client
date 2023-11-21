import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: payments } = useQuery({
    queryKey: ["payments", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user?.email}`);
      return res.data;
    },
  });

  return (
    <div>
      <h2 className="text-2xl">Total Payments: {payments?.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="bg-[#D1A054] text-white">
            <tr>
              <th>SL</th>
              <th>EMAIL</th>
              <th>TRANSACTION ID</th>
              <th>TOTAL PRICE</th>
              <th>PAYMENT DATE</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {payments?.map((payment, index) => (
              <tr key={payment._id}>
                <th>{index +1}</th>
                <th>{payment?.email}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div>
                      <div className="font-bold">{payment?.transactionId}</div>
                    </div>
                  </div>
                </td>
                <td className="font-bold">
                  $ {payment?.price}
                  
                </td>
                <td className="font-bold">{payment?.date}</td>
                <td className="font-bold">{payment?.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
