import axios from 'axios';
import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const SendMoney = () => {
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const name = searchParams.get("name");
    const [amount, setAmount] = useState(0);

    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-400 to-purple-500">
            <div className="flex flex-col justify-center items-center w-full max-w-md p-6 bg-white rounded-xl shadow-xl">
                <div className="flex flex-col space-y-4 w-full">
                    <h2 className="text-3xl font-bold text-center text-gray-800">Send Money</h2>
                    <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                            <span className="text-2xl text-white">{name[0]}</span>
                        </div>
                        <h3 className="text-2xl font-semibold text-gray-800">{name}</h3>
                    </div>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label
                                className="text-sm font-medium text-gray-600"
                                htmlFor="amount"
                            >
                                Amount (in Rs)
                            </label>
                            <input
                                type="number"
                                className="flex h-10 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                id="amount"
                                placeholder="Enter amount"
                                onChange={e => { setAmount(e.target.value) }}
                            />
                        </div>
                        <button
                            onClick={async () => {
                                await axios.post("https://minipayb.onrender.com/api/v1/account/transfer", {
                                    to: id,
                                    amount: amount,
                                }, {
                                    headers: {
                                        Authorization: "Bearer " + localStorage.getItem("token"),
                                    }
                                })
                            }}
                            className="w-full h-10 px-4 py-2 rounded-lg bg-green-500 text-white font-medium transition-colors hover:bg-green-600"
                        >
                            Initiate Transfer
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SendMoney
