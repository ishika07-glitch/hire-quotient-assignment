"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "../Components/Pagination";
import Table from "../Components/Table";

const API =
  "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json";
export default function Home() {
  const [userData, setUserData] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [displayUsers, setDisplayUsers] = useState([]);
  const usersPerPage = 10;
  const [pageVisited, setPageVisited] = useState(pageNumber * usersPerPage);

  const getAPIData = async (url) => {
    try {
      const res = await axios.get(url);
      setUserData(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  // Fetch data on component mount and update the state with it.
  useEffect(() => {
    getAPIData(API);
  }, []);

  useEffect(() => {
    setPageVisited(pageNumber * usersPerPage);
    setDisplayUsers(userData.slice(pageVisited, pageVisited + usersPerPage));
    setPageCount(Math.ceil(userData.length / usersPerPage));
  }, [userData, pageNumber, pageVisited]);

  const getNextPage = (pageNumber) => {
    setPageNumber(pageNumber + 1);
    console.log(pageNumber);
  };
  const getPreviousPage = (pageNumber) => {
    setPageNumber(pageNumber - 1);
    // console.log(pageNumber);
  };
  return (
    <Pagination
      pageCount={pageCount}
      pageNumber={pageNumber}
      getNextPage={getNextPage}
      getPreviousPage={getPreviousPage}
      setPageNumber={setPageNumber}
    >
      <Table data={displayUsers} />
    </Pagination>
  );
}
