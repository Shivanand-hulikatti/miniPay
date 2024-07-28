import { useState, useEffect } from "react";
import Appbar from "../components/Appbar";
import Balance from "../components/Balance";
import Users from '../components/Users';
import axios from "axios";

const Dashboard = () => {
  const [balance, setBalance] = useState(0);
  const auth = "Bearer " + localStorage.getItem('token');

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/v1/account/balance', {
          headers: {
            Authorization: auth,
          },
        });
        const bal = (response.data.balance).toFixed(2)
        setBalance(bal);
      } catch (error) {
        console.error("Error fetching balance:", error);
      }
    };

    fetchBalance();
  }, [auth]);

  return (
    <div>
      <Appbar />
      <div className="m-8">
        <Balance value={balance} />
        <Users />
      </div>
    </div>
  );
};

export default Dashboard;
