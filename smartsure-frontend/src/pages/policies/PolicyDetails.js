import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Wrapper from '../../components/Wrapper';

const PolicyDetails = () => {
    const [policy, setPolicy] = useState({});
    const [premiums, setPremiums] = useState([]);
    const [statusUpdates, setStatusUpdates] = useState([]);

    const { id } = useParams()


    useEffect(() => {
        const getPolicyDetail = async()=> {
            let headersList = {
                "Accept": "*/*"
               }
               
               let response = await fetch(`http://127.0.0.1:8000/policies/${id}/`, { 
                 method: "GET",
                 headers: headersList
               });
               
               let data = await response.json();
               console.log(data);
               setPolicy(data)
        };
        getPolicyDetail();
    }, [])

    useEffect(() => {
        const getPolicyPremiums = async() => {
            let headersList = {
                "Accept": "*/*",
                "User-Agent": "Thunder Client (https://www.thunderclient.com)"
               }
               
               let response = await fetch(`http://127.0.0.1:8000/policies/policy-premiums/${id}/`, { 
                 method: "GET",
                 headers: headersList
               });
               
               let data = await response.json();
               console.log(data);
               setPremiums(data)
        };
        getPolicyPremiums();
    }, [])

  const [premiumsCurrentPage, setPremiumsCurrentPage] = useState(1);
  const premiumsPerPage = 5;
  const indexOfLastPremium = premiumsCurrentPage * premiumsPerPage;
  const indexOfFirstPremium = indexOfLastPremium - premiumsPerPage;
  const currentPremiums = premiums.slice(indexOfFirstPremium, indexOfLastPremium);

     // Change page
  const handlePremiumsPageChange = (pageNumber) => {
      setPremiumsCurrentPage(pageNumber);
  };

    useEffect(() => {
      const getPolicyStatusUpdates = async() => {
        let headersList = {
          "Accept": "*/*",
          "User-Agent": "Thunder Client (https://www.thunderclient.com)"
         }
         
         let response = await fetch(`http://127.0.0.1:8000/policies/policy-status-updates/${id}/`, { 
           method: "GET",
           headers: headersList
         });
         
         let data = await response.json();
         console.log(data);     
         setStatusUpdates(data);    
      };
      getPolicyStatusUpdates()
    }, [])


  return (
    <Wrapper>
    <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
<div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
  <h1 class="h2">Policy Details</h1>

</div>
<div className='row'>
  <div className='col'>
    <p><b>ID:</b> {policy.id}</p>
    <p><b>Date Created</b>: {policy.date_created}</p>
    <p><b>Policy Number:</b> {policy.policy_number}</p>
    <p><b>Start Date:</b> {policy.start_date}</p>
    <p><b>Activation Date:</b> {policy.activation_date}</p>
    <p><b>Premium:</b> {policy.premium}</p>
    <p><b>Status: </b>{policy.status}</p>
  </div>
  <div className='col'>
  <div class="table-responsive small">
  <table class="table table-sm">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Prev. Status</th>
        <th scope="col">Current Status</th>
      </tr>
    </thead>
    <tbody>
        {statusUpdates.map((update) => (
            <tr key={update.id}>
                <td>{update.id}</td>
                <td>{update.current_status}</td>
                <td>{update.next_status}</td>
                
          </tr>
        ))}
      
    </tbody>
  </table>
  <a href='#' className='btn btn-warning'>Policy Document</a>
</div>
  </div>
</div>
<hr/>
<h5>Premiums</h5>
<hr/>
<div class="table-responsive small">
  <table class="table table-sm">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Member</th>
        <th scope="col">Amount</th>
        <th scope="col">Balance</th>
        <th scope="col">Date Expected</th>
        <th scope="col">Status</th>
      </tr>
    </thead>
    <tbody>
        {currentPremiums.map((premium) => (
            <tr key={premium.id}>
                <td>{premium.id}</td>
                <td>{premium.member}</td>
                <td>{premium.amount}</td>
                <td>{premium.balance}</td>
                <td>{premium.expected_date}</td>
                <td>{premium.status}</td>
          </tr>
        ))}
      
    </tbody>
  </table>
  <nav>
  <ul className="pagination">
          {[...Array(Math.ceil(premiums.length / premiumsPerPage)).keys()].map((number) => (
            <li key={number + 1} className={`page-item ${number + 1 === premiumsCurrentPage ? 'active' : ''}`}>
              <button className="page-link" onClick={() => handlePremiumsPageChange(number + 1)}>
                {number + 1}
              </button>
            </li>
          ))}
        </ul>
      </nav>
</div>
</main>
</Wrapper>
  )
}

export default PolicyDetails